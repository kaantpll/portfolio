import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Topal",
  description: "Kaan Topal Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/profile.svg",
        href: "/profile.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/android-chrome-192x192.png",
        href: "/android-chrome-192x192.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/android-chrome-512x512.png",
        href: "/android-chrome-512x512.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-16x16.png",
        href: "/favicon-16x16.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-32x32.png",
        href: "/favicon-32x32.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={inter.className + `bg-slate-900 h-full text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
