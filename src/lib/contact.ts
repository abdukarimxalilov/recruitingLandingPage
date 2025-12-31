import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required." })
    .max(120, { message: "Keep your name under 120 characters." }),
  company: z
    .string()
    .max(160, { message: "Company name is too long." })
    .optional(),
  email: z
    .string()
    .nonempty({ message: "Email is required." })
    .email({ message: "Enter a valid email address." })
    .max(160, { message: "Email is too long." }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required." })
    .regex(/^[+\d().\-\s]{7,20}$/, {
      message: "Enter a valid phone number.",
    }),
  intent: z.enum(["talent", "job", "partnership"], "Select an option."),
  message: z
    .string()
    .max(1200, { message: "Message should be under 1200 characters." })
    .optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
