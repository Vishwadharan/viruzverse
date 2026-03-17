// src/app/about/page.tsx

import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_OG_IMAGE,
} from "@/lib/constants";

import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";
import ValuesSection from "@/components/sections/about/ValuesSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: { absolute: `About ${SITE_NAME}` },
  description: `Learn about ${SITE_NAME}, engineering custom SaaS platforms with 3x ROI from Tamil Nadu.`,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-screen">
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <AboutCTA />
    </div>
  );
}
