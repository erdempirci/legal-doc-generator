'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCUMENTS, CATEGORIES } from '@/data/documents';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const filteredDocuments = selectedCategory === 'Tümü'
    ? Object.values(DOCUMENTS)
    : Object.values(DOCUMENTS).filter((doc) => doc.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      {/* Hero Başlık */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Türkiye Cumhuriyeti Yasal Mevzuat Kataloğu
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mt-3">
          Resmi Belge ve Sözleşme Oluşturucu
        </h1>
        <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto">
          Aradığınız yasal formu seçin, bilgilerinizi girin, mevzuata tam uyumlu hazır A4 PDF formatında anında indirin.
        </p>
      </div>

      {/* Kategori Filtre Butonları */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Belge Kartları Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <div 
            key={doc.slug} 
            className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <FileText size={20} />
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                  {doc.category}
                </span>
              </div>
              <h2 className="text-lg font-bold text-neutral-900 leading-snug">{doc.title}</h2>
              <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                {doc.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-base font-extrabold text-neutral-900">{doc.price} TL</span>
              <Link 
                href={`/belge/${doc.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition"
              >
                Doldur & İndir <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Güvenlik Bandı */}
      <div className="mt-16 bg-white border border-neutral-200 rounded-xl p-6 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-neutral-600 text-center">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>2026 Güncel Mevzuat & Yargıtay Uyumlu</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>A4 Resmi Standart Yazdırılabilir Çıktı</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>Üye Olmadan Anında İndirme</span>
        </div>
      </div>
    </div>
  );
}
