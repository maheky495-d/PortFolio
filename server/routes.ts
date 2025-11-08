import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      try {
        await sendContactEmail({
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        });
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Email sending failed:", emailError);
        // Still return success since the contact was saved
      }
      
      res.json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
