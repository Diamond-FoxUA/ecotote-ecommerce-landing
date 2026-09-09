"use server";
import { contactSchema } from "./contactSchema";
import type { ContactInput } from "./contactSchema";

export async function sendContactMessage(formData: ContactInput) {
  const result = contactSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      error: "Please, check if your data is correct.",
    };
  }

  const { name, email, message, honeypot } = result.data;

  if (result.data.honeypot && result.data.honeypot?.trim().length > 0) {
    return { success: true };
  }

  const text = `
  <b>New Message from EcoTote's Contact Form</b>
  =======================
  <b>Name:</b> ${name}
  <b>Email:</b> ${email}
  <b>Message:</b> ${message}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return { success: false, error: "Failed to send message to Telegram." };
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      success: false,
      error:
        process.env.NODE_ENV === "development"
          ? errorMessage
          : "Internal server error.",
    };
  }
}
