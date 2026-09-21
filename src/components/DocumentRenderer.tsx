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
      className="relative bg-white text-black p-8 sm:p-12 shadow-xl rounded-sm border border-neutral-200 aspect-[1/1.414] w-full max-w-[650px] mx-auto text-[12px] leading-relaxed font-serif flex flex-col justify-between"
    >
      {/* 1. İlamsız İcra Takip Talebi Formu */}
      {slug === 'ilamsiz-icra-takip-talebi' && (
        <div className="space-y-4">
          <div className="text-center border-b pb-3">
            <h2 className="font-bold text-sm">T.C. NÖBETÇİ İCRA MÜDÜRLÜĞÜ'NE</h2>
            <p className="text-[10px] text-neutral-600 mt-1">İLAMSIZ TAKİPLERDE TAKİP TALEBİ (Örnek No: 1)</p>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="flex"><span className="w-36 font-bold">1. ALACAKLI:</span> <span>{data.creditorName || '...'} (T.C/VKN: {data.creditorId || '...'})</span></div>
            <div className="flex"><span className="w-36 font-bold">2. TAHSIİL HESABI (IBAN):</span> <span>{data.creditorIban || '...'}</span></div>
            <div className="flex"><span className="w-36 font-bold">3. BORÇLU:</span> <span>{data.debtorName || '...'} (T.C/VKN: {data.debtorId || 'Belirtilmedi'})</span></div>
            <div className="flex"><span className="w-36 font-bold">4. BORÇLU ADRESİ:</span> <span className="flex-1">{data.debtorAddress || '...'}</span></div>
            <div className="flex"><span className="w-36 font-bold">5. ASIL ALACAK TUTARI:</span> <span className="font-bold">{data.debtAmount || '0.00 TL'}</span></div>
            <div className="flex"><span className="w-36 font-bold">6. FAİZ VE ORANI:</span> <span>{data.interestRate || 'Yasal Faiz'}</span></div>
            <div className="flex"><span className="w-36 font-bold">7. ALACAĞIN SEBEBİ:</span> <span className="flex-1">{data.debtReason || '...'}</span></div>
          </div>

          <p className="text-justify indent-4 pt-2">
            Yukarıda yazılı alacağımın, yasal faiz, icra harç ve masraflarıyla birlikte tahsili amacıyla borçlu aleyhine 
            genel haciz yoluyla ilamsız takip icrasını, borçluya Örnek No: 7 ödeme emri gönderilmesini saygılarımla arz ve talep ederim.
          </p>

          <div className="flex justify-end pt-8">
            <div className="text-center">
              <p className="font-bold">ALACAKLI</p>
              <p>{data.creditorName || 'İmza'}</p>
              <div className="h-10 border-b border-dashed border-neutral-400 w-32 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Standart Konut / İşyeri Kira Sözleşmesi */}
      {(slug === 'konut-kira-sozlesmesi' || slug === 'isyeri-kira-sozlesmesi') && (
        <div className="space-y-4">
          <div className="text-center border-b pb-3">
            <h2 className="font-bold text-sm uppercase">{slug === 'isyeri-kira-sozlesmesi' ? 'ÇATILI İŞYERİ KİRA SÖZLEŞMESİ' : 'KONUT KİRA SÖZLEŞMESİ'}</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div><strong>Kiraya Veren:</strong> {data.landlordName || '...'}</div>
            <div><strong>Kiracı:</strong> {data.tenantName || '...'}</div>
            <div className="col-span-2"><strong>Kiralanan Adres:</strong> {data.propertyAddress || '...'}</div>
            <div><strong>Aylık Kira Bedeli:</strong> {data.rentAmount || data.rentAmountNet || '...'}</div>
            <div><strong>Depozito / Güvence:</strong> {data.depositAmount || '0 TL'}</div>
            <div><strong>Başlangıç Tarihi:</strong> {data.leaseStartDate || '...'}</div>
            <div><strong>Kullanım Amacı:</strong> {data.usagePurpose || 'Mesken (Konut)'}</div>
          </div>

          <p className="text-justify indent-4 pt-2 text-[11px]">
            Kiracı, kiralananı sözleşmeye uygun olarak özenle kullanmak, aidat ve ortak giderleri zamanında ödemekle yükümlüdür. 
            Kira artış oranı Türk Borçlar Kanunu çerçevesinde bir önceki kira yılının TÜFE on iki aylık ortalamasını geçemez.
          </p>

          <div className="flex justify-between pt-12 text-[11px]">
            <div className="text-center w-36">
              <p className="font-bold">KİRAYA VEREN</p>
              <div className="h-10 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
            <div className="text-center w-36">
              <p className="font-bold">KİRACI</p>
              <div className="h-10 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Tahliye Taahhütnamesi ve Diğerleri */}
      {slug !== 'ilamsiz-icra-takip-talebi' && slug !== 'konut-kira-sozlesmesi' && slug !== 'isyeri-kira-sozlesmesi' && (
        <div className="space-y-4">
          <h2 className="text-center font-bold text-sm underline uppercase">{slug.replace(/-/g, ' ')}</h2>
          <div className="space-y-2 text-[11px]">
            {Object.entries(data).map(([key, val]) => (
              <div key={key} className="flex">
                <span className="w-40 font-bold uppercase">{key}:</span>
                <span className="flex-1">{val || '...........................................'}</span>
              </div>
            ))}
          </div>
          <p className="text-justify indent-4 pt-4">
            İşbu belgede yer alan tüm hususları serbest irademle beyan, kabul ve taahhüt ederim.
          </p>
          <div className="flex justify-end pt-12">
            <div className="text-center w-36">
              <p className="font-bold">İMZA</p>
              <div className="h-10 border-b border-dashed border-neutral-400 mt-2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
