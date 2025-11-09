import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer, type Server } from "http";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Initialize app for both development and production
let initialized = false;
let httpServer: Server | null = null;

async function initializeApp() {
  if (initialized) return;
  initialized = true;

  httpServer = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "development") {
    if (httpServer) {
      await setupVite(app, httpServer);
    }
  } else {
    serveStatic(app);
  }
}

// For Vercel/serverless: export the handler
// For development: start the server
if (process.env.NODE_ENV === "development" || !process.env.VERCEL) {
  (async () => {
    await initializeApp();
    
    if (httpServer) {
      // ALWAYS serve the app on the port specified in the environment variable PORT
      // Other ports are firewalled. Default to 5000 if not specified.
      // this serves both the API and the client.
      // It is the only port that is not firewalled.
      const port = parseInt(process.env.PORT || '5000', 10);
      const host = process.platform === 'win32' ? 'localhost' : '0.0.0.0';
      
      httpServer.listen(port, host, () => {
        log(`serving on http://${host}:${port}`);
      });
    }
  })();
}

// For Vercel: ensure app is initialized before handling requests
let initPromise: Promise<void> | null = null;

if (process.env.VERCEL) {
  initPromise = initializeApp();
  // Don't await, but ensure it starts
  initPromise.catch(console.error);
}

// Middleware to ensure initialization before handling requests
app.use(async (req, res, next) => {
  if (initPromise && !initialized) {
    await initPromise;
  }
  next();
});

// Export the app for Vercel
export default app;
