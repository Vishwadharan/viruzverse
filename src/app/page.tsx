import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_OG_IMAGE } from "../lib/constants";
import HeroSection       from "../components/sections/home/HeroSection";
import ServicesSection   from "../components/sections/home/ServicesSection";
import HowWeWorkSection  from "../components/sections/home/HowWeWorkSection";
import IndustriesSection from "../components/sections/home/IndustriesSection";
import FinalCTASection   from "../components/sections/home/FinalCTASection";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — B2B Software Company` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL, images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }] },
};

export default function HomePage() {
  return (
    <>
      {/* pt-16 offsets the navbar height on mobile home page */}
      <div className="pt-16 md:pt-0">
        <HeroSection />
      </div>
      <ServicesSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <FinalCTASection />
    </>
  );
}
