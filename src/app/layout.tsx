import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasal Belge Oluşturucu | Resmi Evrak Asistanı",
  description: "Tahliye taahhütnamesi, kira sözleşmesi ve resmi dilekçelerinizi online doldurup anında indirin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-neutral-50 text-neutral-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
