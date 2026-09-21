'use client';

import React from 'react';

interface Props {
  data: Record<string, string>;
  isWatermarked?: boolean;
}

export default function EvictionDocPreview({ data, isWatermarked = true }: Props) {
  return (
    <div 
      id="printable-document"
      className="relative bg-white text-black p-8 sm:p-12 shadow-xl rounded-sm border border-neutral-200 aspect-[1/1.414] w-full max-w-[650px] mx-auto text-[13px] leading-relaxed select-none font-serif flex flex-col justify-between"
    >
      {isWatermarked && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="text-5xl sm:text-6xl font-bold uppercase tracking-widest text-neutral-800 -rotate-45">
            ÖNİZLEME TASLAK
          </span>
        </div>
      )}

      <div>
        <h1 className="text-center font-bold text-base tracking-wider underline mb-8">
          TAHLİYE TAAHHÜTNAMESİ
        </h1>

        <div className="space-y-2 mb-6 text-[12px]">
          <div className="flex">
            <span className="w-48 font-bold">KİRAYA VEREN (MALİK):</span>
            <span>{data.landlordName || '...........................................'} (T.C: {data.landlordId || '...........'})</span>
          </div>
          <div className="flex">
            <span className="w-48 font-bold">TAAHHÜT EDEN (KİRACI):</span>
            <span>{data.tenantName || '...........................................'} (T.C: {data.tenantId || '...........'})</span>
          </div>
          <div className="flex">
            <span className="w-48 font-bold">MECURUN ADRESİ:</span>
            <span className="flex-1">{data.propertyAddress || '....................................................................................'}</span>
          </div>
          <div className="flex">
            <span className="w-48 font-bold">KİRA BAŞLANGIÇ TARİHİ:</span>
            <span>{data.leaseStartDate || '.../.../20...'}</span>
          </div>
          <div className="flex">
            <span className="w-48 font-bold">TAHLİYE TARİHİ:</span>
            <span className="font-bold underline">{data.evictionDate || '.../.../20...'}</span>
          </div>
        </div>

        <p className="text-justify indent-6 mb-4">
          Halen kiracı olarak ikamet etmekte olduğum yukarıda açık adresi belirtilen taşınmazı, 
          Türk Borçlar Kanunu'nun 352/1 maddesi uyarınca hiçbir ihtar ve ihbara gerek kalmaksızın, 
          kayıtsız ve şartsız olarak <strong>{data.evictionDate || '.../.../20...'}</strong> tarihinde 
          boş ve sağlam olarak tahliye edeceğimi, mal sahibine teslim edeceğimi taahhüt ederim.
        </p>
        <p className="text-justify indent-6">
          Belirtilen tarihte taşınmazı tahliye etmemem halinde, kiralayanın icra takibatına geçerek 
          yapacağı tüm tahliye masrafları ile doğacak bilumum zarar ve ziyanı bila itiraz nakden ve 
          defaten ödeyeceğimi kabul ve taahhüt eylerim.
        </p>
      </div>

      <div className="flex justify-between items-end mt-12 pt-6 border-t border-neutral-200 text-[12px]">
        <div>
          <p><strong>Düzenleme Tarihi:</strong> {data.signDate || '.../.../20...'}</p>
        </div>
        <div className="text-center">
          <p className="font-bold">TAAHHÜT EDEN (KİRACI)</p>
          <p className="mt-1">{data.tenantName || 'İsim / İmza'}</p>
          <div className="h-12 border-b border-dashed border-neutral-300 w-36 mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
}
