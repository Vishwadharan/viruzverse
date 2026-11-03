import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_OG_IMAGE } from "@/lib/constants";
import HeroSection from "@/components/sections/home/HeroSection";
import LiveTickerRibbon from "@/components/ui/LiveTickerRibbon";
import ServicesSection from "@/components/sections/home/ServicesSection";
import CafeauraSpotlight from "@/components/sections/home/CafeauraSpotlight";
import HowWeWorkSection from "@/components/sections/home/HowWeWorkSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — Next-Gen B2B Software Engineering` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — Next-Gen B2B Software Engineering`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveTickerRibbon />
      <ServicesSection />
      <CafeauraSpotlight />
      <HowWeWorkSection />
      <IndustriesSection />
      <FinalCTASection />
    </>
  );
}
