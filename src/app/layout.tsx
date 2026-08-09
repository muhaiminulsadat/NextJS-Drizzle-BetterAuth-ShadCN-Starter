import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Keep Notes",
  description: "Keep Notes Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
