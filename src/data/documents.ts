export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'textarea' | 'number';
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
    description: 'Yargıtay içtihatlarına ve TBK 352/1 maddesine tam uyumlu, tahliye tarihi kira başlangıcından sonraki resmi taahhütname.',
    price: 99,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren (Mal Sahibi) Adı Soyadı', type: 'text', placeholder: 'Örn: Ahmet Yılmaz', required: true },
      { id: 'landlordId', label: 'Kiraya Veren T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C. No', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Örn: Mehmet Demir', required: true },
      { id: 'tenantId', label: 'Kiracı T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C. No', required: true },
      { id: 'propertyAddress', label: 'Kiralanan Taşınmazın Açık Adresi', type: 'textarea', placeholder: 'Mahalle, Cadde, No, İlçe/İl', required: true },
      { id: 'leaseStartDate', label: 'Kira Sözleşmesi Başlangıç Tarihi', type: 'date', required: true },
      { id: 'evictionDate', label: 'Taahhüt Edilen Tahliye Tarihi', type: 'date', required: true },
      { id: 'signDate', label: 'Düzenleme (İmza) Tarihi', type: 'date', required: true, helpText: 'Kira başlangıç tarihinden sonraki bir gün olmalıdır.' },
    ]
  },
  'ilamsiz-icra-takip-talebi': {
    slug: 'ilamsiz-icra-takip-talebi',
    title: 'İlamsız İcra Takip Talebi (Örnek No: 1 / Genel Haciz)',
    category: 'İcra & Alacak',
    description: 'İcra dairelerine sunulacak genel haciz yoluyla ilamsız icra takip formu ve alacak döküm tablosu.',
    price: 149,
    fields: [
      { id: 'creditorName', label: 'Alacaklı Adı Soyadı / Unvanı', type: 'text', placeholder: 'Alacaklı kişi veya şirket', required: true },
      { id: 'creditorId', label: 'Alacaklı T.C. / Vergi No', type: 'text', placeholder: '11 haneli T.C. veya 10 haneli VKN', required: true },
      { id: 'creditorIban', label: 'Tahsilat İçin Banka IBAN No', type: 'text', placeholder: 'TR...', required: true },
      { id: 'debtorName', label: 'Borçlu Adı Soyadı / Unvanı', type: 'text', placeholder: 'Borçlu kişi veya şirket', required: true },
      { id: 'debtorId', label: 'Borçlu T.C. / VKN (Biliyorsanız)', type: 'text', placeholder: 'Bilinmiyorsa boş bırakılabilir', required: false },
      { id: 'debtorAddress', label: 'Borçlunun Tebligat Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'debtAmount', label: 'Asıl Alacak Tutarı (TL)', type: 'text', placeholder: 'Örn: 25.000 TL', required: true },
      { id: 'interestRate', label: 'Talep Edilen Yıllık Yasal Faiz Oranı (%)', type: 'text', placeholder: 'Örn: %24 veya %9 Yasal Faiz', required: true },
      { id: 'debtReason', label: 'Alacağın Sebebi / Dayanağı', type: 'textarea', placeholder: 'Örn: 15.01.2026 tarihli fatura ve hizmet bedeli karşılığı', required: true },
    ]
  },
  'konut-kira-sozlesmesi': {
    slug: 'konut-kira-sozlesmesi',
    title: 'Standart Konut Kira Sözleşmesi',
    category: 'Kira & Gayrimenkul',
    description: 'Özel şart maddeleri, depozito, TÜFE zam kuralı ve demirbaş listesini içeren A4 tam sözleşme.',
    price: 129,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren Adı Soyadı', type: 'text', placeholder: 'Örn: Ahmet Yılmaz', required: true },
      { id: 'landlordId', label: 'Kiraya Veren T.C.', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Örn: Selin Kaya', required: true },
      { id: 'tenantId', label: 'Kiracı T.C.', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'propertyAddress', label: 'Kiralanan Konutun Açık Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'rentAmount', label: 'Aylık Kira Bedeli (TL)', type: 'text', placeholder: 'Örn: 18.000 TL', required: true },
      { id: 'depositAmount', label: 'Alınan Güvence Bedeli (Depozito)', type: 'text', placeholder: 'Örn: 36.000 TL', required: true },
      { id: 'paymentDay', label: 'Her Ayın Ödeme Günü', type: 'text', placeholder: 'Örn: Her ayın 1-5 arası', required: true },
      { id: 'leaseStartDate', label: 'Kira Başlangıç Tarihi', type: 'date', required: true },
    ]
  },
  'isyeri-kira-sozlesmesi': {
    slug: 'isyeri-kira-sozlesmesi',
    title: 'Çatılı İşyeri Kira Sözleşmesi (Stopaj / KDV Uyumlu)',
    category: 'Kira & Gayrimenkul',
    description: 'Dükkan, ofis, depo kiralamalarında vergi, stopaj, devir yasağı ve tadilat şartlarını içeren kurumsal sözleşme.',
    price: 149,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren Adı / Unvanı', type: 'text', placeholder: 'Şahıs veya Şirket', required: true },
      { id: 'tenantName', label: 'Kiracı Firma / Şahıs Adı', type: 'text', placeholder: 'Kiracı Vergi Levhası Unvanı', required: true },
      { id: 'tenantTaxInfo', label: 'Kiracı Vergi Dairesi ve VKN', type: 'text', placeholder: 'Örn: Beşiktaş V.D. - 1234567890', required: true },
      { id: 'propertyAddress', label: 'İşyeri Açık Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'rentAmountNet', label: 'Aylık Net Kira Tutarı (TL)', type: 'text', placeholder: 'Örn: 35.000 TL Net', required: true },
      { id: 'usagePurpose', label: 'Kullanım Amacı / Faaliyet Alanı', type: 'text', placeholder: 'Örn: Cafe / Ofis / Yazılım Atölyesi', required: true },
    ]
  },
  'ihtarname-genel': {
    slug: 'ihtarname-genel',
    title: 'Noter Onaylı Genel Hukuki İhtarname',
    category: 'Dilekçe & İhtarname',
    description: 'Borç ödeme, kira temerrüdü, ayıplı mal iadesi veya sözleşme feshi için noter onayına uygun resmi ihtarname.',
    price: 119,
    fields: [
      { id: 'senderName', label: 'İhtar Eden (Keşideci) Adı Soyadı', type: 'text', placeholder: 'Ad Soyad / Şirket', required: true },
      { id: 'senderAddress', label: 'İhtar Eden Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'receiverName', label: 'Muhatap Adı Soyadı / Unvanı', type: 'text', placeholder: 'İhtar çekilen taraf', required: true },
      { id: 'receiverAddress', label: 'Muhatap Adresi', type: 'textarea', placeholder: 'Tebligat adresi', required: true },
      { id: 'subject', label: 'İhtarın Konusu', type: 'text', placeholder: 'Örn: Ödenmeyen Kira Bedellerinin Ödenmesi İhtarı', required: true },
      { id: 'content', label: 'Açıklamalar ve Verilen Süre (Gün)', type: 'textarea', placeholder: 'Olay özeti ve örn: 7 gün içinde ödenmesi aksi halde dava açılacağı...', required: true },
    ]
  },
  'kvkk-aydinlatma-metni': {
    slug: 'kvkk-aydinlatma-metni',
    title: 'Web Sitesi KVKK Aydınlatma & Çerez Politikası',
    category: 'E-Ticaret & İnternet',
    description: '6698 sayılı Kanun uyarınca internet siteleri, mobil uygulamalar ve e-ticaret için yasal uyum metni.',
    price: 99,
    fields: [
      { id: 'companyName', label: 'Veri Sorumlusu Ticari Unvan / Ad Soyad', type: 'text', placeholder: 'Örn: ABC Teknoloji Ltd. Şti.', required: true },
      { id: 'websiteUrl', label: 'Web Sitesi Alan Adı', type: 'text', placeholder: 'Örn: www.siteadi.com', required: true },
      { id: 'contactEmail', label: 'İletişim / KEP E-posta Adresi', type: 'text', placeholder: 'destek@siteadi.com', required: true },
      { id: 'companyAddress', label: 'Şirket Tebligat Adresi', type: 'textarea', placeholder: 'Açık merkez adresi', required: true },
    ]
  },
  'arac-satis-sozlesmesi': {
    slug: 'arac-satis-sozlesmesi',
    title: 'Adi Araç Satış & Kapora Protokolü',
    category: 'Otomotiv',
    description: 'Noter devri öncesi alıcı ile satıcı arasında kapora, ekspertiz masrafları ve teslim şartlarını bağlayan protokol.',
    price: 89,
    fields: [
      { id: 'sellerName', label: 'Satıcı Adı Soyadı', type: 'text', placeholder: 'Ruhsat sahibi', required: true },
      { id: 'buyerName', label: 'Alıcı Adı Soyadı', type: 'text', placeholder: 'Satın alacak kişi', required: true },
      { id: 'carPlate', label: 'Araç Plakası ve Şasi No', type: 'text', placeholder: 'Örn: 34 ABC 123 - Şasi: ...', required: true },
      { id: 'salePrice', label: 'Toplam Anlaşılan Satış Bedeli (TL)', type: 'text', placeholder: 'Örn: 650.000 TL', required: true },
      { id: 'depositAmount', label: 'Ödenen Kapora Tutarı (TL)', type: 'text', placeholder: 'Örn: 15.000 TL', required: true },
      { id: 'notaryDeadline', label: 'Noter Satışının Yapılacağı Son Tarih', type: 'date', required: true },
    ]
  }
};
