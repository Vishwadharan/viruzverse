import type { Metadata } from "next";
import CareersHero from "@/components/sections/careers/CareersHero";
import OpenApplicationCTA from "@/components/sections/careers/OpenApplicationCTA";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Viruzverse — we're hiring engineers and designers who care about craft.",
};

export default function CareersPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <CareersHero />
      <OpenApplicationCTA />
    </div>
  );
}
