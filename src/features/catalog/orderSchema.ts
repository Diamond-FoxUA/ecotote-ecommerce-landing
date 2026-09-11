import z from "zod";

export const productSchema = z.object({
  productId: z.number(),

  productName: z.string(),
  productPrice: z.string(),

  customerName: z.string().min(4, "Name must be at least 4 characters long."),
  phoneOrTelegram: z
    .string()
    .min(5, "Please enter a valid phone number or Telegram @username"),

  honeypot: z.string().optional(),
});

export type orderInput = z.infer<typeof productSchema>;
