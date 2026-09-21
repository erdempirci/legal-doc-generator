import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DOCUMENTS } from '@/data/documents';
import DocumentEditor from '@/components/DocumentEditor';
import { ArrowLeft, ShieldCheck, FileCheck } from 'lucide-react';

export async function generateStaticParams() {
  return Object.keys(DOCUMENTS).map((slug) => ({ slug }));
}

export default function DocumentPage({ params }: { params: { slug: string } }) {
  const doc = DOCUMENTS[params.slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Geri Dön Butonu ve Başlık Alanı */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 px-3.5 py-2 rounded-xl border border-slate-700/60 transition mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Tüm Belgelere Geri Dön</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                {doc.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">{doc.title}</h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">{doc.description}</p>
          </div>

          <div className="flex items-center gap-3 bg-[#131B2E] border border-slate-800 px-4 py-2.5 rounded-2xl w-fit">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Yasal Mevzuat Garantisi</div>
              <div className="text-[11px] text-slate-400">Resmi kurumlara ibraz edilebilir</div>
            </div>
          </div>
        </div>
      </div>

      <DocumentEditor doc={doc} />
    </div>
  );
}
