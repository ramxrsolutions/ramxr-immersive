import { createServerFn } from "@tanstack/react-start";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; email: string; phone: string; message: string }) => data)
  .handler(async ({ data }) => {
    try {
      const BREVO_API_KEY = process.env.BREVO_API_KEY;
      if (!BREVO_API_KEY) {
        throw new Error("BREVO_API_KEY is not configured");
      }

      const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ramxrsolutions@gmail.com";
      const SENDER_EMAIL = process.env.SENDER_EMAIL || "ramxrsolutions@gmail.com";
      const SENDER_NAME = process.env.SENDER_NAME || "RamXR Solutions";

      console.log(`[Contact Form] Sending admin notification to: ${ADMIN_EMAIL}`);
      console.log(`[Contact Form] Sender: ${SENDER_EMAIL}`);
      console.log(`[Contact Form] From: ${data.name} <${data.email}>`);

      // Notify the admin with full form details
      const adminEmailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: SENDER_NAME, email: SENDER_EMAIL },
          to: [{ email: ADMIN_EMAIL, name: SENDER_NAME }],
          replyTo: { email: data.email, name: data.name },
          subject: `📩 New Demo Request from ${data.name}`,
          htmlContent: `
            <html>
              <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 22px;">New Demo Request</h1>
                  <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Via RamXR Immersive Website</p>
                </div>
                <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 120px;">Name</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${data.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                        <a href="mailto:${data.email}" style="color: #6366f1;">${data.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                        <a href="tel:${data.phone}" style="color: #6366f1;">${data.phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top; padding-top: 14px;">Message</td>
                      <td style="padding: 10px 0; white-space: pre-line; padding-top: 14px;">${data.message}</td>
                    </tr>
                  </table>
                  <div style="margin-top: 24px; text-align: center;">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Reply to ${data.name}
                    </a>
                  </div>
                </div>
              </body>
            </html>
          `,
        }),
      });

      const adminResText = await adminEmailRes.text();
      console.log(`[Contact Form] Admin email status: ${adminEmailRes.status}`, adminResText);

      if (!adminEmailRes.ok) {
        throw new Error(`Brevo error (${adminEmailRes.status}): ${adminResText}`);
      }

      // Send a confirmation email to the person who filled the form
      const confirmationRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: SENDER_NAME, email: SENDER_EMAIL },
          to: [{ email: data.email, name: data.name }],
          subject: "We received your demo request — RamXR Solutions",
          htmlContent: `
            <html>
              <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 22px;">Thanks, ${data.name}!</h1>
                  <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">We've received your demo request</p>
                </div>
                <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
                  <p>Hi ${data.name},</p>
                  <p>Thank you for reaching out to <strong>RamXR Solutions</strong>. Our team will review your request and get back to you at <strong>${data.phone}</strong> or <strong>${data.email}</strong> within 1–2 business days.</p>
                  <p style="background: #ede9fe; border-left: 4px solid #6366f1; padding: 12px 16px; border-radius: 4px; font-style: italic;">"${data.message}"</p>
                  <p>Warm regards,<br/><strong>RamXR Solutions Team</strong></p>
                </div>
              </body>
            </html>
          `,
        }),
      });

      console.log(`[Contact Form] Confirmation email status: ${confirmationRes.status}`);

      return { success: true };
    } catch (error) {
      console.error("[Contact Form] Error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      };
    }
  });
