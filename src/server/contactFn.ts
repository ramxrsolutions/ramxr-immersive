"use server";
import { createServerFn } from "@tanstack/react-start";

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; phone: string; message: string }) => data)
  .handler(async ({ data }) => {
    try {
      // Dynamically import mongoose to prevent client-side bundle errors
      const mongoose = (await import("mongoose")).default;

      // Connect to MongoDB
      const MONGODB_URI = process.env.MONGODB_URI;
      if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not set in environment variables");
      }

      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(MONGODB_URI);
      }

      // MongoDB Schema
      const contactSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        message: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      });

      // Avoid model overwrite in hot reload
      const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

      // Save to MongoDB
      const newContact = new Contact(data);
      await newContact.save();

      // Send Email via Brevo
      const BREVO_API_KEY = process.env.BREVO_API_KEY;
      if (!BREVO_API_KEY) {
        throw new Error("BREVO_API_KEY is not set in environment variables");
      }

      const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "RamXR Solutions", email: "noreply@ramxrsolutions.com" },
          to: [{ email: data.email, name: data.name }],
          subject: "Demo Request Confirmation",
          htmlContent: `<html><body>
            <h2>Hi ${data.name},</h2>
            <p>We have received your demo request. Our team will get back to you shortly at ${data.phone}.</p>
            <p><strong>Your message:</strong><br/>${data.message}</p>
            <br/>
            <p>Best regards,<br/>RamXR Solutions Team</p>
          </body></html>`
        }),
      });

      if (!emailResponse.ok) {
        console.error("Brevo API error:", await emailResponse.text());
        throw new Error("Failed to send email");
      }

      // Also send an email to the admin/support team
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "Website System", email: "noreply@ramxrsolutions.com" },
          to: [{ email: "contact@ramxrsolutions.com", name: "RamXR Support" }],
          subject: "New Demo Request",
          htmlContent: `<html><body>
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong><br/>${data.message}</p>
          </body></html>`
        }),
      });

      return { success: true, message: "Demo request submitted successfully" };
    } catch (error) {
      console.error("Contact Form Error:", error);
      return { success: false, error: error instanceof Error ? error.message : "An error occurred" };
    }
  });
