import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import SpiderWebConnector from '@/components/ui/SpiderWebConnector';
import InteractiveBackground from '@/components/ui/InteractiveBackground';
import { ThemeProvider, ThemeScript } from '@/components/theme/ThemeProvider';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_KEYWORDS,
  COMPANY_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from '@/lib/constants';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
});

const mokoto = localFont({
  src: './fonts/Mokoto.ttf',
  variable: '--font-mokoto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — B2B & B2C Business Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Viruzverse', url: SITE_URL }],
  creator: 'Viruzverse',
  publisher: 'Viruzverse',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — B2B & B2C Business Software`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — B2B & B2C Business Software`,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
    creator: '@viruzverse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Viruzverse Solutions Private Limited",
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_ADDRESS,
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641038",
      addressCountry: "IN",
    },
    sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${mokoto.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased transition-colors duration-200 relative">
        <ThemeProvider>
          <PageLoader />
          <SpiderWebConnector />
          <InteractiveBackground />
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
