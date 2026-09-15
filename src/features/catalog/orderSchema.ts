import z from "zod";

export const productSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  price: z.string(),
  
  customerName: z.string().min(2, "errors.customerNameMin"),
  phoneOrTelegram: z.string().min(5, "errors.phoneOrTelegramMin"),

  honeypot: z.string().optional(),
});

export type orderInput = z.infer<typeof productSchema>;
