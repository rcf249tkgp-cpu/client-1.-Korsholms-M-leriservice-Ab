import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "KMS – Korsholms Måleriservice Ab | Måleri i Korsholm sedan 1984",
  description:
    "Inomhus- och utomhusmålning för hem, företag och kyrkor i Korsholm och Österbotten. Familjeföretag i Vassor sedan 1984.",
  // Demo site: keep it out of search engines.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#1f2328",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${archivo.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
