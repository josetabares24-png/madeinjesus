import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IdentitySection } from "@/components/IdentitySection";
import { MeetingsSection } from "@/components/MeetingsSection";
import { MessagesSection } from "@/components/MessagesSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone">
      <Navbar />
      <Hero />
      <IdentitySection />
      <MeetingsSection />
      <MessagesSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
