import type { Metadata } from "next";
import { MessagesSection } from "@/components/MessagesSection";

export const metadata: Metadata = {
  title: "Mensajes — Made in Jesús",
  description: "Predicaciones y series recientes que despiertan fe."
};

export default function MensajesPage() {
  return (
    <main>
      <MessagesSection />
    </main>
  );
}
