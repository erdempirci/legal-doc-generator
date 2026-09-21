import type { Metadata } from "next";
import Link from "next/link";
import { Scale, FileCheck, ShieldCheck } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResmiBelge.net | Online Yasal Sözleşme ve Dilekçe Oluşturucu",
  description: "Tahliye taahhütnamesi, kira sözleşmesi, icra takip talepleri ve yasal formlarınızı dakikalar içinde resmi A4 PDF formatında oluşturun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full bg-slate-900 text-slate-100">
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#0B0F19] text-slate-100 selection:bg-blue-600 selection:text-white">
        {/* Üst Bilgi / Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
                <Scale className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white text-base leading-tight">
                  Resmi<span className="text-blue-500">Belge</span>.net
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">T.C. Hukuk Asistanı</span>
              </div>
            </Link>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
                <ShieldCheck className="text-emerald-400 w-4 h-4" />
                <span>2026 Mevzuatına Uyumlu</span>
              </div>
              <Link 
                href="/" 
                className="hover:text-blue-400 transition"
              >
                Katalog
              </Link>
            </div>
          </div>
        </header>

        {/* Ana İçerik */}
        <main className="flex-1">{children}</main>

        {/* Alt Bilgi */}
        <footer className="border-t border-slate-800/80 bg-[#080B11] py-8 text-center text-xs text-slate-500">
          <p>© 2026 ResmiBelge.net - Tüm hakları saklıdır. Belgeler genel bilgilendirme ve taslak amaçlıdır.</p>
        </footer>
      </body>
    </html>
  );
}
