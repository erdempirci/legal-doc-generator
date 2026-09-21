export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'textarea';
  placeholder?: string;
  required: boolean;
  helpText?: string;
}

export interface DocumentConfig {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: number;
  fields: FormField[];
}

export const DOCUMENTS: Record<string, DocumentConfig> = {
  'tahliye-taahhutnamesi': {
    slug: 'tahliye-taahhutnamesi',
    title: 'Tahliye Taahhütnamesi',
    category: 'Kira & Gayrimenkul',
    description: 'Yargıtay içtihatlarına ve Türk Borçlar Kanunu’na tam uyumlu, geçerli tahliye taahhütnamesi oluşturun.',
    price: 99,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren (Mal Sahibi) Adı Soyadı', type: 'text', placeholder: 'Örn: Ahmet Yılmaz', required: true },
      { id: 'landlordId', label: 'Kiraya Veren T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C. No', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Örn: Mehmet Demir', required: true },
      { id: 'tenantId', label: 'Kiracı T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C. No', required: true },
      { id: 'propertyAddress', label: 'Kiralanan Taşınmazın Açık Adresi', type: 'textarea', placeholder: 'Mahalle, Cadde, Bina No, Daire, İlçe/İl', required: true },
      { id: 'leaseStartDate', label: 'Kira Sözleşmesi Başlangıç Tarihi', type: 'date', required: true },
      { id: 'evictionDate', label: 'Taahhüt Edilen Tahliye Tarihi', type: 'date', required: true },
      { id: 'signDate', label: 'Düzenleme (İmza) Tarihi', type: 'date', required: true, helpText: 'Kira başlangıç tarihinden sonraki bir tarih olmalıdır.' },
    ]
  }
};
