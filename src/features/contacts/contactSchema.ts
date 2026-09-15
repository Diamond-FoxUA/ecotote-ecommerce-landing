import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "errors.nameMin"),
  email: z.string().email("errors.emailInvalid"),
  message: z.string().min(10, "errors.messageMin"),
  honeypot: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
