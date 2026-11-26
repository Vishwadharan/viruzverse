import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_OG_IMAGE } from "@/lib/constants";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import HowWeWorkSection from "@/components/sections/home/HowWeWorkSection";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — Innovation that Flows | B2B & B2C Solutions` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — Innovation that Flows | B2B & B2C Solutions`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowWeWorkSection />
    </>
  );
}
