import Link from 'next/link';
import { DOCUMENTS } from '@/data/documents';
import { FileText, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Online Yasal Belge Oluşturucu
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          Hukuki ve resmi evraklarınızı mevzuata tam uyumlu şablonlarla dakikalar içinde oluşturun, anında PDF olarak indirin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(DOCUMENTS).map((doc) => (
          <div key={doc.slug} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={24} />
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700">
                {doc.category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-neutral-900">{doc.title}</h2>
            <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{doc.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-bold text-neutral-900">{doc.price} TL</span>
              <Link 
                href={`/belge/${doc.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Belgeyi Doldur <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
