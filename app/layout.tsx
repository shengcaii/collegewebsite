import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`antialiased bg-gradient-to-r from-sky-300 to-yellow-100 font-serif`}>
        {children}
      </body>
    </html>
  );
}
