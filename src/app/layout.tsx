import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MediaContextProvider } from "@/domains/common/components/MediaProvider";
import { ThemeProvider } from "@/domains/common/components/ThemeProvider";
import type { PropsWithChildren } from "react";
import { RootHead } from "./RootHead";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booknet Reader",
  description: "Booknet Test task",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <RootHead />
      <body className={inter.className}>
        <MediaContextProvider>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </MediaContextProvider>
      </body>
    </html>
  );
}
