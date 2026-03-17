import type { Metadata } from "next";
import CareersHero from "@/components/sections/careers/CareersHero";
import CultureSection from "@/components/sections/careers/CultureSection";
import PerksSection from "@/components/sections/careers/PerksSection";
import JobListings from "@/components/sections/careers/JobListings";
import OpenApplicationCTA from "@/components/sections/careers/OpenApplicationCTA";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Viruzverse — we're hiring engineers, designers, and builders who care about craft.",
};

export default function CareersPage() {
  return ( 
    <main>
      <CareersHero />
      <JobListings />
      <CultureSection />
      <PerksSection />
      <OpenApplicationCTA />
    </main>
  );
}
