import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devforge.ai",
  description: "AI Enabled Proprietary Suite",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Devforge.ai",
    description: "AI Enabled Proprietary Suite",
    url: "https://devforge.ai",
    images: [{ url: "/favicon.svg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
