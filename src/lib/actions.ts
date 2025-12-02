"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("El email no es válido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string(),
  message: z.string().min(10, "El mensaje es demasiado corto"),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revise los campos.",
      success: false,
    };
  }

  try {
    // Here you would typically send an email
    console.log("Form data received:", validatedFields.data);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
      success: true,
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      message: "Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.",
      success: false,
    };
  }
}
