import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/react"
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NYRDDC",
  description: "Nationalities Youth Resource Development Degree College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
