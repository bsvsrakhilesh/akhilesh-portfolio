import type { Metadata, Viewport } from "next";
import MotionPreferences from "../components/MotionPreferences";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(new URL(siteUrl).origin),
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
  themeColor: "#f7f8f5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
