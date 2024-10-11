import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Trylab - Try Products. Earn Rewards.',
  description: 'A loyalty program that rewards users for discussing ecommerce products they purchased with AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}