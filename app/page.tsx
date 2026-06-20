import { CinematicHero } from "@/components/CinematicHero";
import { ExploreSection } from "@/components/ExploreSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone">
      <CinematicHero />
      <ExploreSection />
    </main>
  );
}
