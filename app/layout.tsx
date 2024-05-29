import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import InstallBootstrap from "./components/InstallBootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "WING TZUN - Wing Tsun München - Kampfkunst und Selbstverteidigung in München",
  description:
    "Effektive Selbstverteidigung für Frauen, Kinder und Männer. Wing Tzun in München.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <InstallBootstrap />
        <HeaderTop />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
