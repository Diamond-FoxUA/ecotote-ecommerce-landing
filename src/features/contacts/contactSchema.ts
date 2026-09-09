import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Minimum 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Minimum 10 characters"),
  honeypot: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
