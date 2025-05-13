import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pankaj Kumar | Frontend Developer",
  description: "Portfolio of Pankaj Kumar, a Frontend Developer specializing in React.js, Next.js, and modern web technologies",
  keywords: ["Frontend Developer", "React.js", "Next.js", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Pankaj Kumar", url: "https://github.com/iampankajk" }],
  creator: "Pankaj Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pankajkumar.dev",
    title: "Pankaj Kumar | Frontend Developer",
    description: "Portfolio of Pankaj Kumar, a Frontend Developer specializing in React.js, Next.js, and modern web technologies",
    siteName: "Pankaj Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Kumar | Frontend Developer",
    description: "Portfolio of Pankaj Kumar, a Frontend Developer specializing in React.js, Next.js, and modern web technologies",
    creator: "@iampankajk",
  },
  icons: {
    icon: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
