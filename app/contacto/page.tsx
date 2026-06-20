import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contacto / Visítanos — Made in Jesús",
  description: "Queremos conocerte, recibirte y ayudarte a dar tu próximo paso."
};

export default function ContactoPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
