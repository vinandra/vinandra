import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { inter, jetBrainsMono } from "../util/fonts";
import { Providers } from "./providers";

import "@unocss/reset/tailwind-compat.css";
import "../styles/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "vinandra",
  description: "Software Developer",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
      <body className="bg-neutral-100 antialiased dark:bg-neutral-900 dark:text-neutral-200">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
