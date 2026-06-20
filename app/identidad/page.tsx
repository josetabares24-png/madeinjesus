import type { Metadata } from "next";
import { IdentitySection } from "@/components/IdentitySection";

export const metadata: Metadata = {
  title: "Identidad — Made in Jesús",
  description: "No somos definidos por una estética, sino por Aquel a quien pertenecemos."
};

export default function IdentidadPage() {
  return (
    <main>
      <IdentitySection />
    </main>
  );
}
