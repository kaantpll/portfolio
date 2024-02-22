import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Topal",
  description: "Kaan Topal Portfolio Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/profile.svg",
        href: "/profile.svg",
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
