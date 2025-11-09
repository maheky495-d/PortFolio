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

// Initialize app based on environment
let httpServer: Server | null = null;
let appInitialized = false;

async function setupApp() {
  if (appInitialized) return httpServer;
  appInitialized = true;

  // Register API routes
  httpServer = await registerRoutes(app);

  // Setup static file serving or Vite dev server
  if (process.env.NODE_ENV === "development") {
    if (httpServer) {
      await setupVite(app, httpServer);
    }
  } else {
    // Production: serve static files
    serveStatic(app);
  }

  // Error handler middleware (must be after all routes)
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  return httpServer;
}

// For Vercel: Initialize app immediately (synchronous where possible)
if (process.env.VERCEL || process.env.VERCEL_ENV) {
  // Start initialization immediately
  setupApp().catch((err) => {
    console.error("Failed to initialize app for Vercel:", err);
  });
  
  // Add middleware to ensure initialization completes before handling requests
  app.use(async (req, res, next) => {
    if (!appInitialized) {
      try {
        await setupApp();
      } catch (err) {
        console.error("App initialization error:", err);
        return res.status(500).json({ 
          error: "Internal server error",
          message: err instanceof Error ? err.message : "Failed to initialize application"
        });
      }
    }
    next();
  });
}

// For development: Start the server
if (process.env.NODE_ENV === "development" || (!process.env.VERCEL && !process.env.NOW)) {
  (async () => {
    const server = await setupApp();
    
    if (server) {
      const port = parseInt(process.env.PORT || '5000', 10);
      const host = process.platform === 'win32' ? 'localhost' : '0.0.0.0';
      
      server.listen(port, host, () => {
        log(`serving on http://${host}:${port}`);
      });
    }
  })();
}

// Export the app for Vercel serverless functions
export default app;
