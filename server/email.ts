import nodemailer from "nodemailer";

const YOUR_EMAIL = "Maheky495@gmail.com";

// Create transporter - using Gmail SMTP
// You'll need to set up environment variables for email credentials
const createTransporter = () => {
  // For Gmail, you can use App Password or OAuth
  // For now, using a simple configuration that works with Gmail App Passwords
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || YOUR_EMAIL,
      pass: process.env.EMAIL_PASSWORD || "", // Use App Password here
    },
  });
};

export interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER || YOUR_EMAIL,
      to: YOUR_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #333; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This email was sent from your portfolio contact form.
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Contact email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email notification");
  }
}

