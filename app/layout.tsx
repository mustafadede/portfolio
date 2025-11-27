import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Dede",
  description: "Mustafa Dede'nin kişisel portföy sitesi",
  openGraph: {
    title: "Mustafa Dede",
    description: "Mustafa Dede'nin kişisel portföy sitesi",
    url: "https://mustafadede.com",
    siteName: "Mustafa Dede Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Dede",
    description: "Mustafa Dede'nin kişisel portföy sitesi",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://mustafadede.com" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black!`}
      >
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mustafa Dede",
            url: "https://mustafadede.com",
            sameAs: [
              "https://github.com/mustafadede",
              "https://linkedin.com/in/mustafadede",
            ],
          }),
        }}
      />
    </html>
  );
}
