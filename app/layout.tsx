import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { ContentProvider } from "@/lib/ContentContext";
import { link } from "fs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ranarajvindersingh.com";
const ogImage = "https://ranarajvindersingh.com/rana.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rana Rajvinder Singh — Fractional CXO | I turn a growing business into one that runs",
  description:
    "When your business grows faster than your operation can hold, I rebuild the back end so it runs without breaking. Fractional CXO and operational excellence leader — I've run companies myself and rebuilt a listed one department by department. India and worldwide.",
  keywords: [
    "Fractional CXO",
    "interim CXO",
    "Chief Excellence Officer",
    "operational excellence",
    "process improvement",
    "scaling operations",
    "operating model",
    "M&A integration",
    "independent director",
    "business turnaround",
    "India",
  ],
  openGraph: {
    title: "Rana Rajvinder Singh — Fractional CXO | I turn a growing business into one that runs",
    description:
      "When your business grows faster than your operation can hold, I rebuild the back end so it runs without breaking. Fractional CXO and operational excellence leader — I've run companies myself and rebuilt a listed one department by department. India and worldwide.",
    url: siteUrl,
    siteName: "Rana Rajvinder Singh",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Rana Rajvinder Singh — Fractional CXO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rana Rajvinder Singh — Fractional CXO | I turn a growing business into one that runs",
    description:
      "When your business grows faster than your operation can hold, I rebuild the back end so it runs without breaking. Fractional CXO and operational excellence leader — I've run companies myself and rebuilt a listed one department by department. India and worldwide.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <link rel="icon" href="/Logo-RRS.png" />
      <body className="min-h-full flex flex-col">
        <ContentProvider>
          <Navbar />
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}