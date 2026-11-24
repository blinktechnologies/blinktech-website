import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';
import { SiteChrome } from '@/components/SiteChrome';

// Self-hosted variable fonts (no runtime dependency on Google Fonts).
const urbanist = localFont({
  src: './fonts/Urbanist.ttf',
  weight: '100 900',
  variable: '--font-urbanist',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

const inter = localFont({
  src: './fonts/Inter.ttf',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

const interTight = localFont({
  src: './fonts/InterTight.ttf',
  weight: '100 900',
  variable: '--font-inter-tight',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Blink-Tech Ltd | Next-Gen Tech Solutions Built in a Blink',
  description: 'Blink-Tech architects innovative digital products, robust enterprise cloud systems, and AI automation for visionary enterprises worldwide.',
  keywords: 'Blink-Tech, software engineering, AI systems, cloud solutions, product development, East Africa tech',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/bt-logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/bt-logo.png' },
      { url: '/apple-icon.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    title: 'Blink-Tech Ltd | Next-Gen Tech Solutions Built in a Blink',
    description: 'Blink-Tech architects innovative digital products, robust enterprise cloud systems, and AI automation for visionary enterprises worldwide.',
    images: [
      {
        url: '/images/bt-logo.png',
        width: 512,
        height: 512,
        alt: 'Blink-Tech Logo'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable} ${interTight.variable}`}>
      <body className={urbanist.className} suppressHydrationWarning>
        <PageLoader />
        <SiteChrome />
        <Navbar />
        <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
