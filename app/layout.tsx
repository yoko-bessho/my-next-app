import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "YOKO BESSHO | Portfolio",
        template: "%s | YOKO BESSHO",
    },
    description: "役立つ Webアプリ を目指します。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="ja"
          className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-20 antialiased`}
      >
          <body className="min-h-full flex flex-col">
              <Header />
              {children}
          </body>
      </html>
  );
}
