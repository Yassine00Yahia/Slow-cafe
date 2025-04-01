import type { Express } from "express";
import { createServer, type Server } from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // Serve the SVG icon as favicon
  app.get('/icon.svg', (req, res) => {
    res.type('image/svg+xml').send(`
      <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L50 60 L100 0 Z" fill="white" />
        <path d="M0 140 L50 80 L100 140 Z" fill="#121212" />
      </svg>
    `);
  });

  return httpServer;
}
