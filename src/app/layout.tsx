import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/components/layout/header';

import '../assets/styles/tailwind.css';

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'BTC Markets',
  description: 'BTC Markets - buy, sell and trade crypto today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="h-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
