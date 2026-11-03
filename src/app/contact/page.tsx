import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactSection from "@/components/sections/contact/ContactSection";
import ContactTrustBar from "@/components/sections/contact/ContactTrustBar";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Viruzverse",
  description: "Get in touch with Viruzverse. Start your custom SaaS or enterprise software project.",
};

export default function ContactPage() {
  return (
    <main className="bg-transparent min-h-screen">
      <ContactHero />
      <ContactSection />
      <ContactTrustBar />
    </main>
  );
}
