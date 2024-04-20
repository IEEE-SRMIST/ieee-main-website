import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IEEE SRMIST Student Branch',
  description: 'Advancing Technology for the Betterment of Humanity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  )
}