import type { Metadata, Viewport } from "next";
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
  title: {
    default: "Akhilesh | AI/ML Systems Engineer",
    template: "%s | Akhilesh",
  },
  description:
    "AI/ML engineer portfolio focused on retrieval systems, semantic search, computer vision, IoT, embedded systems, and architecture-led engineering workflows.",
  keywords: [
    "Akhilesh",
    "AI ML Engineer",
    "RAG",
    "Semantic Search",
    "Computer Vision",
    "IoT",
    "Embedded Systems",
    "Portfolio",
  ],
  openGraph: {
    title: "Akhilesh | AI/ML Systems Engineer",
    description:
      "AI/ML engineer portfolio focused on retrieval systems, semantic search, computer vision, IoT, embedded systems, and architecture-led engineering workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilesh | AI/ML Systems Engineer",
    description:
      "AI/ML engineer portfolio focused on retrieval systems, semantic search, computer vision, IoT, embedded systems, and architecture-led engineering workflows.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1efe8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
