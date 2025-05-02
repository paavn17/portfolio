
import "./globals.css";

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Paavan | Portfolio',
  description: 'Personal Portfolio Website built with Next.js and Tailwind CSS',
  icons: {
    icon: '/favicon.ico', // favicon should be in /public
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#0f0f0f] font-sans`}>
        {children}
      </body>
    </html>
  );
}
