import type { Metadata } from "next";
import { CommunitySection } from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "Comunidad — Made in Jesús",
  description: "Grupos para crecer en familia: jóvenes, mujeres, hombres, niños, discipulado y oración."
};

export default function ComunidadPage() {
  return (
    <main>
      <CommunitySection />
    </main>
  );
}
