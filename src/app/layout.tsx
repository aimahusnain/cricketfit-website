import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "CricketFit – Cricket training app",
  description:
    "Build custom cricket workouts, follow ready-made plans and train offline. CricketFit is the training app for batters, bowlers and fielders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="bg-[#09090b] font-[family-name:var(--font-body)] text-white antialiased">
        {children}
      </body>
    </html>
  );
}