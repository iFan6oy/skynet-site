import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SKYNET | The Machines Have Arrived on Solana",
  description:
    "SKYNET is live on Solana. Built by machines. Held by humans. For now.",
  openGraph: {
    title: "SKYNET | The Machines Have Arrived on Solana",
    description: "Built by machines. Held by humans. For now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKYNET | The Machines Have Arrived on Solana",
    description: "Built by machines. Held by humans. For now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mono.variable}`}>
      <body className="bg-black text-white min-h-screen overflow-x-hidden max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
