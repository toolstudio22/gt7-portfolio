import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GT7 Analysis - グランツーリスモ7 データ分析ツール & リソース",
  description: "グランツーリスモ7のデータ分析ツール、ノウハウ、技術情報を提供する個人ポートフォリオサイト。GT7 Monitorなどのツールやデータ分析の知見を共有しています。",
  keywords: ["GT7", "グランツーリスモ7", "Gran Turismo 7", "データ分析", "テレメトリー", "モニタリング"],
  authors: [{ name: "GT7 Analysis" }],
  openGraph: {
    title: "GT7 Analysis - グランツーリスモ7 データ分析ツール",
    description: "GT7のデータ分析ツールとノウハウを提供",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
