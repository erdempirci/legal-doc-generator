'use client';

import React, { useState } from 'react';
import { DocumentConfig } from '@/data/documents';
import EvictionDocPreview from './EvictionDocPreview';
import { Download, ShieldCheck } from 'lucide-react';

export default function DocumentEditor({ doc }: { doc: DocumentConfig }) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-6 bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <h2 className="text-lg font-bold text-neutral-800 mb-4 border-b pb-2">Bilgileri Doldurun</h2>
        <div className="space-y-4">
          {doc.fields.map((field) => (
            <div key={field.id}>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  rows={2}
                  className="w-full text-sm p-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full text-sm p-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              )}
              {field.helpText && <p className="text-[11px] text-neutral-500 mt-1">{field.helpText}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-neutral-600">Hizmet Bedeli:</span>
            <span className="text-2xl font-bold text-neutral-900">{doc.price} TL</span>
          </div>
          <button 
            className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2 transition"
            onClick={() => window.print()}
          >
            <Download size={18} />
            Yazdır / Orijinal PDF İndir
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-neutral-500 text-xs">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>256-Bit SSL Güvenli Ödeme & Anında İndirme</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 sticky top-6">
        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Canlı Belge Önizlemesi</div>
        <EvictionDocPreview data={formData} isWatermarked={false} />
      </div>
    </div>
  );
}
