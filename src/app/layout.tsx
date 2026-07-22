import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ROHIT | KING OF EGOIST",
  description: "ROHIT — King of Egoist. Enter the realm.",
  openGraph: {
    title: "ROHIT | KING OF EGOIST",
    description: "Enter the realm of ROHIT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${montserrat.variable} ${orbitron.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
