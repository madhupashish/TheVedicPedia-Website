import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/page-ui/nav/navbar'
import Footer from "./page-ui/footer/page";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedic Pedia - Explore the Vedas and Mantras",
  description: "Unlock the wisdom of the Vedas. Listen, read, and explore the eternal knowledge in English and Hindi.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/vh1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/images/vh1.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <br />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
