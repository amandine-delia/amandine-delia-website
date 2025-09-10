import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";



const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  // variable: "--font-quicksand",
});

// TODO: update metadata
export const metadata: Metadata = {
  title: "Amandine D'Elia",
  description: "Médecine Traditionnelle Chinoise & Acupuncture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${quickSand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
