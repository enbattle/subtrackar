/**
 * Root layout component for the application.
 * This file defines the base HTML structure and global providers.
 */

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Initialize Inter font with Latin subset for the entire application
const inter = Inter({ subsets: ["latin"] });

// Define metadata for SEO and browser tab information
export const metadata: Metadata = {
  title: "SubTrackar - Manage Your Company Subscriptions",
  description:
    "Track, manage, and optimize your company's subscription services in one place",
};

/**
 * RootLayout Component
 *
 * This is the root layout that wraps all pages in the application.
 * It provides:
 * - HTML structure
 * - Font configuration
 * - Theme provider for dark/light mode
 * - Language settings
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {JSX.Element} The root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider enables dark/light mode functionality */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
