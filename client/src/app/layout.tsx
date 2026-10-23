import type { Metadata, Viewport } from "next";
import { Archivo, Karla } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { PreviewProvider } from "@/components/preview/PreviewProvider";

const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sarah Zwart",
  description:
    "Sarah Zwart is a software developer and Lehigh computer science grad building accessible apps and AV control systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={siteConfig.theme} className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {process.env.NODE_ENV === "development" ? <PreviewProvider>{children}</PreviewProvider> : children}
      </body>
    </html>
  );
}
