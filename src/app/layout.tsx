import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { AppBar } from "./components/AppBar/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booknet Reader",
  description: "Booknet Test task",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
