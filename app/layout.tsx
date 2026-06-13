import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRONIK_EPISODE | Portofolio Muhammad Yusuf Julian",
  description: "Portofolio sinematik interaktif Muhammad Yusuf Julian - Menampilkan karya rekayasa sistem, utilitas otomatisasi, dan arsitektur web modern.",
  keywords: ["Muhammad Yusuf Julian", "yusjul", "Fullstack Developer", "Cinematic Portfolio", "Next.js", "Tailwind CSS", "Framer Motion"],
  authors: [{ name: "Muhammad Yusuf Julian" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full bg-background text-on-background selection:bg-primary-container selection:text-on-primary flex flex-col">
        {children}
      </body>
    </html>
  );
}
