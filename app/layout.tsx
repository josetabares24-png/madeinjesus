import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made in Jesús",
  description: "Hechos por Él. Hechos para Él.",
  openGraph: {
    title: "Made in Jesús",
    description: "Una comunidad formada por Jesús, reunida en familia y enviada con propósito.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
