// Vercel serverless function entry point
// This file is automatically detected by Vercel as a serverless function
import app from "../server/index";

// Export the Express app directly for Vercel
// Vercel's @vercel/node automatically handles Express apps
export default app;

