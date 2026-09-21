'use client';

import React from 'react';

interface Props {
  slug: string;
  data: Record<string, string>;
}

export default function DocumentRenderer({ slug, data }: Props) {
  return (
    <div 
      id="printable-document"
      className="relative bg-white text-black p-8 sm:p-12 shadow-xl rounded-sm border border-neutral-200 aspect-[1/1.414] w-full max-w-[650px] mx-auto text-[11.5px] leading-relaxed font-serif flex flex-col justify-between"
    >
      {/* 1. İCRA & TAKİP TALEPLERİ */}
      {slug === 'ilamsiz-icra-takip-talebi' && (
        <div className="space-y-4">
          <div className="text-center border-b pb-3">
            <h2 className="font-bold text-sm">T.C. İCRA MÜDÜRLÜĞÜ'NE</h2>
            <p className="text-[10px] text-neutral-600 mt-1">İLAMSIZ TAKİPLERDE TAKİP TALEBİ (Örnek No: 1)</p>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="flex"><span className="w-40 font-bold">1. ALACAKLI:</span> <span>{data.creditorName || '...'} (T.C/VKN: {data.creditorId || '...'})</span></div>
            <div className="flex"><span className="w-40 font-bold">2. IBAN NO:</span> <span>{data.creditorIban || '...'}</span></div>
            <div className="flex"><span className="w-40 font-bold">3. BORÇLU:</span> <span>{data.debtorName || '...'}</span></div>
            <div className="flex"><span className="w-40 font-bold">4. BORÇLU ADRESİ:</span> <span className="flex-1">{data.debtorAddress || '...'}</span></div>
            <div className="flex"><span className="w-40 font-bold">5. ALACAK TUTARI:</span> <span className="font-bold">{data.debtAmount || '0.00 TL'}</span></div>
            <div className="flex"><span className="w-40 font-bold">6. ALACAĞIN SEBEBİ:</span> <span className="flex-1">{data.debtReason || '...'}</span></div>
          </div>
          <p className="text-justify indent-4 pt-2">
            Yukarıda yazılı alacağımın, yasal faiz ve takip masraflarıyla birlikte tahsili için borçlu aleyhine ilamsız icra takibi başlatılmasını ve ödeme emri tebliğini arz ve talep ederim.
          </p>
          <div className="flex justify-end pt-8">
            <div className="text-center w-36">
              <p className="font-bold">ALACAKLI</p>
              <p className="mt-1">{data.creditorName || 'İsim / İmza'}</p>
              <div className="h-8 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
          </div>
        </div>
      )}

      {/* 2. SÖZLEŞMELER (Kira, İş, Araç, Gizlilik, Mesafeli Satış) */}
      {(slug.includes('sozlesmesi') || slug.includes('protokolu')) && slug !== 'ilamsiz-icra-takip-talebi' && (
        <div className="space-y-4">
          <div className="text-center border-b pb-3">
            <h2 className="font-bold text-sm uppercase">{slug.replace(/-/g, ' ')}</h2>
          </div>
          <div className="space-y-2 text-[11px] border border-neutral-200 p-3 rounded">
            {Object.entries(data).map(([key, val]) => (
              <div key={key} className="flex">
                <span className="w-44 font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="flex-1 font-sans">{val || '...........................................'}</span>
              </div>
            ))}
          </div>
          <p className="text-justify indent-4 pt-2">
            Taraflar, yukarıda belirtilen şartlar dahilinde işbu sözleşmenin hükümlerini karşılıklı kabul, beyan ve taahhüt etmişlerdir. Anlaşmazlık halinde yetkili mahkeme ve icra daireleri geçerlidir.
          </p>
          <div className="flex justify-between pt-10 text-[11px]">
            <div className="text-center w-36">
              <p className="font-bold">1. TARAF</p>
              <div className="h-8 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
            <div className="text-center w-36">
              <p className="font-bold">2. TARAF</p>
              <div className="h-8 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
          </div>
        </div>
      )}

      {/* 3. DİLEKÇELER & İHTARNAMELER (Belediye, SGK, Vergi, İhtarname, THH, İstifa, vb.) */}
      {!slug.includes('sozlesmesi') && !slug.includes('protokolu') && slug !== 'ilamsiz-icra-takip-talebi' && (
        <div className="space-y-4">
          <div className="text-center border-b pb-3">
            <h2 className="font-bold text-sm uppercase">{slug.replace(/-/g, ' ')}</h2>
          </div>
          <div className="space-y-2 text-[11px]">
            {Object.entries(data).map(([key, val]) => (
              <div key={key} className="flex">
                <span className="w-44 font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="flex-1 font-sans">{val || '...........................................'}</span>
              </div>
            ))}
          </div>
          <p className="text-justify indent-4 pt-3">
            Yukarıda belirtilen hususlar ve yasal mevzuat çerçevesinde gereğinin yapılmasını, tarafıma yazılı olarak bilgi verilmesini saygılarımla arz ve talep ederim.
          </p>
          <div className="flex justify-end pt-10">
            <div className="text-center w-36">
              <p className="font-bold">TALEP EDEN</p>
              <div className="h-8 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
