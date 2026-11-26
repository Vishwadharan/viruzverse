import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSection from "@/components/sections/contact/ContactSection";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: `Connect with ${SITE_NAME} for a free consultation for business owners.`,
};

export default function ContactPage() {
  return (
    <div className="bg-transparent min-h-screen">
      <ContactHero />
      <ContactSection />
    </div>
  );
}
