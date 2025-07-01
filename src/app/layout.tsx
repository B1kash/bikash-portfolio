import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import ParticlesClientWrapper from '../components/ParticlesClientWrapper';
import { ThemeProvider } from '../components/ThemeProvider';
import ThemeScript from '../components/ThemeScript';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio - Bikash",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} bg-white dark:bg-[#0a0a0a] text-black dark:text-white min-h-screen`}>
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
            background: `url('/vercel.svg') center center / cover no-repeat`,
            opacity: 0.18,
            transition: 'opacity 0.3s',
          }}
          className="bg-white dark:bg-[#0a0a0a]"
        />
        <ThemeScript />
        <ThemeProvider>
          <ParticlesClientWrapper />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
