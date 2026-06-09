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
  title: "EPISODE_CHRONICLES | Technical Noir Developer Story",
  description: "An interactive, cinematic storytelling portfolio showcasing high-end system architecture, cyber security, and cloud engineering.",
  keywords: ["Software Architect", "Fullstack Developer", "Cinematic Portfolio", "Next.js", "Tailwind CSS", "Framer Motion"],
  authors: [{ name: "Noir Dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full bg-background text-on-background selection:bg-primary-container selection:text-on-primary flex flex-col">
        {children}
      </body>
    </html>
  );
}
