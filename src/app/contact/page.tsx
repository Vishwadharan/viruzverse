import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSection from "@/components/sections/contact/ContactSection";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Connect With Us — ${SITE_NAME}`,
  description: `Connect with ${SITE_NAME} for a free consultation for business owners in Coimbatore & worldwide.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: `Connect With Us | ${SITE_NAME}`,
    description: `Book a free consultation for business owners with ${SITE_NAME}.`,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <ContactHero />
      <ContactSection />
    </div>
  );
}
