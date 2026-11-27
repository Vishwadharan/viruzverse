import type { Metadata } from "next";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `CafeAura — Skip the Canteen Queue | ${SITE_NAME}`,
  description:
    "CafeAura is a closed-community campus canteen food ordering app. Students and parents pre-order meals and snacks, pay instantly via UPI, skip the queue, and get instant parent pickup alerts.",
  keywords: [
    "CafeAura",
    "campus canteen app",
    "school canteen food ordering app",
    "college canteen pre-order UPI",
    "skip canteen queue app",
    "parent pickup alert canteen",
    "Viruzverse CafeAura",
  ],
  alternates: { canonical: `${SITE_URL}/products/cafeaura` },
  openGraph: {
    url: `${SITE_URL}/products/cafeaura`,
    title: `CafeAura — Skip the Canteen Queue | ${SITE_NAME}`,
    description:
      "Pre-order campus canteen meals & snacks, pay instantly by UPI, skip the queue, and notify parents on pickup.",
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: "CafeAura by Viruzverse" }],
  },
};

export default function CafeAuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CafeAura",
    applicationCategory: "MobileApplication",
    operatingSystem: "Android, iOS",
    description:
      "Closed-community campus canteen food ordering app with instant UPI checkout, prepared-ahead pickup, and instant parent pickup alerts.",
    publisher: {
      "@type": "Organization",
      name: "Viruzverse Solutions Private Limited",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  );
}
