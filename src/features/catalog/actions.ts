"use server";

import { type orderInput, productSchema } from "./orderSchema";

export async function createProductOrder(formData: orderInput) {
  const result = productSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      error: "Please, check if your data is correct.",
    };
  }

  const {
    customerName,
    phoneOrTelegram,
    productName,
    productId,
    price,
    honeypot,
  } = result.data;

  if (honeypot && honeypot.trim().length > 0) return { success: true };

  const text = `
  <b>New EcoTote order!</b>
  =======================
  <b>Product:</b> ${productName} (ID: ${productId})
  <b>Price: </b> ${price}
  -----------------------
  <b>Customer name: </b> ${customerName}
  <b>Contact channel: </b> ${phoneOrTelegram}
  =======================
  <i>Action required: Reach out to the lead within 2 hours.</i>
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
