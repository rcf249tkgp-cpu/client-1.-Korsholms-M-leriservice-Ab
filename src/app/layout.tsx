import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

// Archivo is kept for the KMS wordmark only.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Display serif for headlines; optical sizing keeps it crisp at large sizes.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

// Body and UI text.
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "KMS – Korsholms Måleriservice Ab | Måleri i Korsholm sedan 1984",
  description:
    "Inomhus- och utomhusmålning för hem, företag och kyrkor i Korsholm och Österbotten. Familjeföretag i Vassor sedan 1984.",
  // Demo site: keep it out of search engines.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#f3f3ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${archivo.variable} ${newsreader.variable} ${schibsted.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
