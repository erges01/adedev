import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adesope Winner | Product Engineer",
  description: "Building software that feels inevitable. Explorations in creator tools, infrastructure, and web architecture.",
  openGraph: {
    title: "Adesope Winner | Product Engineer",
    description: "Building software that feels inevitable.",
    url: "https://yourdomain.com", // Update this when you deploy
    siteName: "Adesope Winner",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
