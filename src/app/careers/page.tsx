import type { Metadata } from "next";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/constants";
import CareersHero from "@/components/sections/careers/CareersHero";
import OpenApplicationCTA from "@/components/sections/careers/OpenApplicationCTA";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${SITE_NAME} in Coimbatore — engineers and designers solving B2B & B2C problems using emerging technologies.`,
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    url: `${SITE_URL}/careers`,
    title: `Careers | ${SITE_NAME}`,
    description: `Join ${SITE_NAME} in Coimbatore — send an open application to careers@viruzverse.in.`,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
};

export default function CareersPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <CareersHero />
      <OpenApplicationCTA />
    </div>
  );
}
