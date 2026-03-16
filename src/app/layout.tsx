import type { Metadata } from 'next';
import './globals.css';
import { Nothing_You_Could_Do } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_KEYWORDS,
} from '@/lib/constants';

const nothing = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — B2B Software Company`,
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
    title: `${SITE_NAME} — B2B Software Company`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — B2B Software Company`,
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
    'color-scheme': 'light',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nothing.variable}>
      <body className="font-nothing">
        <PageLoader />
        <Navbar />
        <main className="md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
