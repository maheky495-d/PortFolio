import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../client/vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Try multiple possible paths for the built client files
  const possiblePaths = [
    path.resolve(process.cwd(), "client", "dist", "public"), // Vercel build (most likely)
    path.resolve(import.meta.dirname, "..", "client", "dist", "public"), // Local build
    path.resolve(process.cwd(), "dist", "public"), // Vercel alternative
    path.resolve(import.meta.dirname, "..", "dist", "public"), // Root dist
    path.resolve(import.meta.dirname, "public"), // Server public (legacy)
  ];

  let distPath: string | null = null;
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      distPath = possiblePath;
      log(`Serving static files from: ${distPath}`);
      break;
    }
  }

  if (!distPath) {
    const errorMsg = `Could not find the build directory. Tried: ${possiblePaths.join(", ")}. Make sure to build the client first.`;
    log(`WARNING: ${errorMsg}`);
    // Instead of throwing, set up a route that returns an error
    app.use("*", (_req, res) => {
      res.status(500).json({ 
        error: "Static files not found", 
        message: "The client build directory was not found. Please ensure the build completed successfully." 
      });
    });
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath!, "index.html"));
  });
}
