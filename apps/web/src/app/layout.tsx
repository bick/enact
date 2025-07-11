import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import './layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/common/header';
import { Footer } from '@/components/common/footer';

const inter = Inter({ subsets: ['latin'] });
const instrument = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'HeadlessWP Blog',
  description: 'A blog powered by HeadlessWP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
