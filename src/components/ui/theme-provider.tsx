/**
 * Theme Provider Component
 *
 * A client-side component that provides theme functionality throughout the application.
 * It wraps the next-themes provider to enable dark/light mode switching.
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider Component
 *
 * Wraps the application with theme context and provides theme switching functionality.
 * Uses next-themes under the hood for theme management.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped with theme context
 * @param {Object} props.attribute - HTML attribute to apply theme class (default: "class")
 * @param {string} props.defaultTheme - Default theme to use (default: "system")
 * @param {boolean} props.enableSystem - Whether to enable system theme detection
 * @param {boolean} props.disableTransitionOnChange - Whether to disable transitions when theme changes
 * @returns {JSX.Element} The theme provider component
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
