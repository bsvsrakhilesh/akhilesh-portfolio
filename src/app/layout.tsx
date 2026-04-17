import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Akhilesh | AI/ML Engineer",
  description:
    "AI Command Center portfolio of Akhilesh — AI/ML engineer focused on RAG systems, computer vision, IoT, and intelligent product engineering.",
  keywords: [
    "Akhilesh",
    "AI Engineer",
    "ML Engineer",
    "Portfolio",
    "RAG",
    "Computer Vision",
    "IoT",
    "Next.js",
  ],
  authors: [{ name: "Akhilesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#050816] text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(0,170,255,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.10),transparent_22%),linear-gradient(to_bottom,#04070f,#050816,#02040a)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[90px_90px] opacity-[0.16]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_42%),radial-gradient(circle_at_100%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_0%_30%,rgba(16,185,129,0.08),transparent_24%)]" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] bg-size-[18px_18px]" />

          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
