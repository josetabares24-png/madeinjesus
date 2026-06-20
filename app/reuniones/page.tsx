import type { Metadata } from "next";
import { MeetingsSection } from "@/components/MeetingsSection";

export const metadata: Metadata = {
  title: "Reuniones — Made in Jesús",
  description: "Días, horarios y cómo llegar a nuestras reuniones."
};

export default function ReunionesPage() {
  return (
    <main>
      <MeetingsSection />
    </main>
  );
}
