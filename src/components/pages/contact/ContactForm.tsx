"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/data";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90">
      {pending ? "Enviando..." : "Enviar mensaje"}
    </Button>
  );
}

export default function ContactForm() {
  const initialState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Éxito",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo*</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email*</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="company">Empresa/Organización</Label>
            <Input id="company" name="company" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Servicio de interés</Label>
        <Select name="service" defaultValue={services[0].title}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.title} value={service.title}>
                {service.title}
              </SelectItem>
            ))}
             <SelectItem value="Otro">Otro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje*</Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
