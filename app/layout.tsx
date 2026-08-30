import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";

// Harmond - Display font (fallback: Playfair Display)
const harmond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font (fallback: Inter)
const nohemi = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Vennela Davunuri | Automation Developer",
  description:
    "Automation developer building production-grade AI systems — n8n workflows, agentic RAG, voice AI, and lead generation engines that replace manual work with reliable, self-running infrastructure.",
  keywords: [
    "Automation Developer",
    "n8n",
    "AI Agents",
    "Workflow Automation",
    "Voice AI",
    "RAG",
    "Lead Generation",
  ],
  authors: [{ name: "Vennela Davunuri" }],
  openGraph: {
    title: "Vennela Davunuri | Automation Developer",
    description:
      "Automation developer building production-grade AI systems that replace manual work with reliable, self-running infrastructure.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />
          
          {/* Custom cursor - Desktop only */}
          <CustomCursor />
          
          {/* Main content */}
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}