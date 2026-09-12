import z from "zod";

export const productSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  price: z.string(),
  customerName: z.string().min(2, "Name must be at least 2 characters long"),
  phoneOrTelegram: z
    .string()
    .min(5, "Please enter a valid phone number or Telegram @username"),

  honeypot: z.string().optional(),
});

export type orderInput = z.infer<typeof productSchema>;
