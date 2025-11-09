// Vercel serverless function entry point for API routes only
// This handles /api/* routes
import express, { type Request, Response, NextFunction } from "express";
import { storage } from "../server/storage";
import { insertContactSchema } from "../shared/schema";
import { sendContactEmail } from "../server/email";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.post("/api/contacts", async (req: Request, res: Response) => {
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
      console.error("Email sending failed:", emailError);
    }
    
    res.json(contact);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Invalid request data" });
  }
});

app.get("/api/contacts", async (req: Request, res: Response) => {
  try {
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch contacts" });
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export for Vercel
export default app;

