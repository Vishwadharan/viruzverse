import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import InteractiveBackground from '@/components/ui/InteractiveBackground';
import { ThemeProvider, ThemeScript } from '@/components/theme/ThemeProvider';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_KEYWORDS,
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

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — B2B Software Engineering`,
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
    title: `${SITE_NAME} — B2B Software Engineering`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — B2B Software Engineering`,
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased transition-colors duration-200 relative">
        <ThemeProvider>
          <PageLoader />
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
