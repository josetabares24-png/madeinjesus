import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { CinematicHero } from "@/components/CinematicHero";
import { Footer } from "@/components/Footer";
import { IdentitySection } from "@/components/IdentitySection";
import { MeetingsSection } from "@/components/MeetingsSection";
import { MessagesSection } from "@/components/MessagesSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone">
      <Navbar />
      <CinematicHero />
      <IdentitySection />
      <MeetingsSection />
      <MessagesSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
