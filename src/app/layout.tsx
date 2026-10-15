import type { Metadata } from 'next';
import './globals.css';
import { TopTicker } from '@/components/TopTicker';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blink-Tech Ltd | Next-Gen Tech Solutions Built in a Blink',
  description: 'Blink-Tech architects innovative digital products, robust enterprise cloud systems, and AI automation for visionary enterprises worldwide.',
  keywords: 'Blink-Tech, software engineering, AI systems, cloud solutions, product development, East Africa tech',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning>
        <TopTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
