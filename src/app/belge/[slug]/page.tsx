'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCUMENTS, CATEGORIES, DocumentConfig } from '@/data/documents';
import { 
  Building2, 
  Gavel, 
  Briefcase, 
  Car, 
  Store, 
  Landmark, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  FileText
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Gayrimenkul & Kira': <Building2 className="w-5 h-5 text-blue-400" />,
  'İcra, Alacak & Hukuk': <Gavel className="w-5 h-5 text-amber-400" />,
  'İş Hukuku & İK': <Briefcase className="w-5 h-5 text-emerald-400" />,
  'Araç & Ulaşım': <Car className="w-5 h-5 text-purple-400" />,
  'Şirket & E-Ticaret': <Store className="w-5 h-5 text-cyan-400" />,
  'Resmi Kurum & Dilekçe': <Landmark className="w-5 h-5 text-rose-400" />,
};

export default function HomePage() {
  // Varsayılan olarak 'Gayrimenkul & Kira' seçili gelir, ekranda yığılma olmaz
  const [activeCategory, setActiveCategory] = useState<string>('Gayrimenkul & Kira');

  const activeDocuments = Object.values(DOCUMENTS).filter(
    (doc) => doc.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Banner */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hukuk Bürosu Hassasiyetinde Standart Şablonlar</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
          Resmi Belgelerinizi <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Hatasız ve Anında
          </span> Üretin
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          Kategori seçin, bilgilerinizi girin; sistem Türk Borçlar Kanunu ve İcra İflas Kanunu standartlarında geçerli A4 PDF'inizi saniyeler içinde hazırlasın.
        </p>
      </div>

      {/* Kategori Seçim Izgarası (Büyük Butonlar) */}
      <div className="mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 text-center sm:text-left">
          Belge Kategorisi Seçin
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.filter((c) => c !== 'Tümü').map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600/15 border-blue-500 ring-2 ring-blue-500/30 text-white shadow-lg shadow-blue-500/10'
                    : 'bg-[#131B2E]/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <div className="p-2 w-fit rounded-xl bg-slate-800/80 border border-slate-700/50">
                  {CATEGORY_ICONS[category] || <FileText className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                  <div className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {category}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {Object.values(DOCUMENTS).filter((d) => d.category === category).length} Belge
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Seçilen Kategoriye Ait Belgeler */}
      <div className="bg-[#111827]/70 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
              <span>{activeCategory}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Bu kategoride doldurulabilir {activeDocuments.length} adet resmi form bulunmaktadır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeDocuments.map((doc: DocumentConfig) => (
            <div
              key={doc.slug}
              className="group bg-[#161F36]/60 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                    Standart Form
                  </span>
                  <span className="text-sm font-extrabold text-white">{doc.price} TL</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> A4 Yazdırılabilir
                </span>
                <Link
                  href={`/belge/${doc.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-xl transition shadow-md shadow-blue-600/20"
                >
                  Doldur <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
