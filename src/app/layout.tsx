import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upcoin.example"), // change avec ton vrai domaine
  title: {
    default: "Upcoin – Only Up State of Mind",
    template: "%s | Upcoin",
  },
  description:
    "Upcoin is not just a coin, it's a mindset. A permanently up-only mental state for traders who refuse to look down.",
  openGraph: {
    title: "only up state of mind",
    description:
      "Upcoin is a culture, a meme and a mental condition where the chart only goes one way: up.",
    url: "upcoin-psi.vercel.app",
    siteName: "Upcoin",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/banner.png",
        width: 1200,
        height: 630,
        alt: "only up state of mind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:"only up state of mind",
    description:
      "Upcoin is the meme-asset for degenerates who still believe in only up.",
    images: ["/assets/banner.png"],
    creator: "@thiscoingoesup",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
