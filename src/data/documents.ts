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
  category: 'Gayrimenkul & Kira' | 'İcra, Alacak & Hukuk' | 'İş Hukuku & İK' | 'Araç & Ulaşım' | 'Şirket & E-Ticaret' | 'Resmi Kurum & Dilekçe';
  description: string;
  price: number;
  fields: FormField[];
}

export const CATEGORIES = [
  'Tümü',
  'Gayrimenkul & Kira',
  'İcra, Alacak & Hukuk',
  'İş Hukuku & İK',
  'Araç & Ulaşım',
  'Şirket & E-Ticaret',
  'Resmi Kurum & Dilekçe'
] as const;

export const DOCUMENTS: Record<string, DocumentConfig> = {
  // --- GAYRİMENKUL & KİRA ---
  'tahliye-taahhutnamesi': {
    slug: 'tahliye-taahhutnamesi',
    title: 'Tahliye Taahhütnamesi',
    category: 'Gayrimenkul & Kira',
    description: 'TBK 352/1 uyumlu, kira başlangıcından sonraki tarihli tahliye taahhüdü.',
    price: 99,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren Adı Soyadı', type: 'text', placeholder: 'Mal sahibi', required: true },
      { id: 'landlordId', label: 'Kiraya Veren T.C. No', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Kiracı', required: true },
      { id: 'tenantId', label: 'Kiracı T.C. No', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'propertyAddress', label: 'Taşınmazın Açık Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'leaseStartDate', label: 'Kira Başlangıç Tarihi', type: 'date', required: true },
      { id: 'evictionDate', label: 'Taahhüt Edilen Tahliye Tarihi', type: 'date', required: true },
      { id: 'signDate', label: 'Düzenleme (İmza) Tarihi', type: 'date', required: true, helpText: 'Kira başlangıç tarihinden sonraki bir tarih olmalıdır.' },
    ]
  },
  'konut-kira-sozlesmesi': {
    slug: 'konut-kira-sozlesmesi',
    title: 'Konut Kira Sözleşmesi',
    category: 'Gayrimenkul & Kira',
    description: 'TÜFE artış maddesi, depozito şartları ve demirbaş dökümlü standart konut sözleşmesi.',
    price: 129,
    fields: [
      { id: 'landlordName', label: 'Kiraya Veren Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'propertyAddress', label: 'Daire Açık Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'rentAmount', label: 'Aylık Kira Bedeli (TL)', type: 'text', placeholder: 'Örn: 20.000 TL', required: true },
      { id: 'depositAmount', label: 'Depozito Bedeli', type: 'text', placeholder: 'Örn: 40.000 TL', required: true },
      { id: 'leaseStartDate', label: 'Kira Başlangıç Tarihi', type: 'date', required: true },
    ]
  },
  'isyeri-kira-sozlesmesi': {
    slug: 'isyeri-kira-sozlesmesi',
    title: 'İşyeri Kira Sözleşmesi',
    category: 'Gayrimenkul & Kira',
    description: 'Stopaj/KDV, tabela asma hakkı, faaliyet konusu ve alt kiralama şartlarını kapsayan işyeri sözleşmesi.',
    price: 149,
    fields: [
      { id: 'landlordName', label: 'Mülk Sahibi Adı / Unvanı', type: 'text', placeholder: 'Ad Soyad / Şirket', required: true },
      { id: 'tenantName', label: 'Kiracı Firma / Şahıs Unvanı', type: 'text', placeholder: 'Vergi levhası unvanı', required: true },
      { id: 'tenantTaxInfo', label: 'Kiracı Vergi Dairesi ve VKN', type: 'text', placeholder: 'Örn: Kadıköy V.D. - 1234567890', required: true },
      { id: 'propertyAddress', label: 'İşyeri Açık Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'rentAmountNet', label: 'Aylık Net Kira Tutarı', type: 'text', placeholder: 'Örn: 40.000 TL Net', required: true },
      { id: 'usagePurpose', label: 'Faaliyet Alanı / İşletme Türü', type: 'text', placeholder: 'Örn: Ofis / Restoran / Atölye', required: true },
    ]
  },
  'kira-tespit-ve-ihtar': {
    slug: 'kira-tespit-ve-ihtar',
    title: 'Kira Artış ve İhtar Bildirimi',
    category: 'Gayrimenkul & Kira',
    description: '5 yılı dolduran kiracılara veya yasal TÜFE sınırında kira yenilemesi talep eden ihtar taslağı.',
    price: 119,
    fields: [
      { id: 'senderName', label: 'Ev Sahibi Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'tenantName', label: 'Kiracı Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'currentRent', label: 'Mevcut Ödenen Kira Bedeli', type: 'text', placeholder: 'Örn: 10.000 TL', required: true },
      { id: 'demandedRent', label: 'Talep Edilen Yeni Dönem Kirası', type: 'text', placeholder: 'Örn: 25.000 TL', required: true },
      { id: 'propertyAddress', label: 'Taşınmaz Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
    ]
  },

  // --- İCRA, ALACAK & HUKUK ---
  'ilamsiz-icra-takip-talebi': {
    slug: 'ilamsiz-icra-takip-talebi',
    title: 'İlamsız İcra Takip Talebi (Örnek No: 1)',
    category: 'İcra, Alacak & Hukuk',
    description: 'İcra dairelerine sunulacak genel haciz yoluyla ilamsız icra takip formu.',
    price: 149,
    fields: [
      { id: 'creditorName', label: 'Alacaklı Adı Soyadı / Unvanı', type: 'text', placeholder: 'Alacaklı taraf', required: true },
      { id: 'creditorId', label: 'Alacaklı T.C. / Vergi No', type: 'text', placeholder: 'T.C. veya VKN', required: true },
      { id: 'creditorIban', label: 'Tahsilat İçin Banka IBAN No', type: 'text', placeholder: 'TR...', required: true },
      { id: 'debtorName', label: 'Borçlu Adı Soyadı / Unvanı', type: 'text', placeholder: 'Borçlu taraf', required: true },
      { id: 'debtorAddress', label: 'Borçlunun Tebligat Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'debtAmount', label: 'Asıl Alacak Tutarı (TL)', type: 'text', placeholder: 'Örn: 35.000 TL', required: true },
      { id: 'debtReason', label: 'Alacağın Sebebi / Belgesi', type: 'textarea', placeholder: 'Örn: Fatura, cari hesap veya borç ikrarı', required: true },
    ]
  },
  'ihtarname-genel': {
    slug: 'ihtarname-genel',
    title: 'Genel Noter İhtarnamesi',
    category: 'İcra, Alacak & Hukuk',
    description: 'Borç ödeme, taahhüt ihlali veya sözleşme feshi öncesi noterden çekilecek resmi ihtar.',
    price: 119,
    fields: [
      { id: 'senderName', label: 'İhtar Eden (Keşideci)', type: 'text', placeholder: 'Ad Soyad / Firma', required: true },
      { id: 'senderAddress', label: 'İhtar Eden Adresi', type: 'textarea', placeholder: 'Açık adres', required: true },
      { id: 'receiverName', label: 'Muhatap Adı Soyadı', type: 'text', placeholder: 'İhtar çekilen taraf', required: true },
      { id: 'receiverAddress', label: 'Muhatap Adresi', type: 'textarea', placeholder: 'Tebligat adresi', required: true },
      { id: 'subject', label: 'İhtarın Konusu', type: 'text', placeholder: 'Örn: Borcun 7 Gün İçinde Ödenmesi', required: true },
      { id: 'content', label: 'İhtar Metni ve Verilen Süre', type: 'textarea', placeholder: 'Açıklama ve talep', required: true },
    ]
  },
  'tuketici-hakem-heyeti-dilekcesi': {
    slug: 'tuketici-hakem-heyeti-dilekcesi',
    title: 'Tüketici Hakem Heyeti Başvuru Dilekçesi',
    category: 'İcra, Alacak & Hukuk',
    description: 'Ayıplı ürün, haksız kesinti veya iptal edilmeyen abonelikler için e-Devlet/Kayıtlı THH dilekçesi.',
    price: 89,
    fields: [
      { id: 'applicantName', label: 'Başvuran Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'applicantId', label: 'T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'respondentCompany', label: 'Şikayet Edilen Firma Unvanı', type: 'text', placeholder: 'Satıcı / Sağlayıcı adı', required: true },
      { id: 'productName', label: 'Uyuşmazlığa Konu Ürün/Hizmet', type: 'text', placeholder: 'Örn: Cep Telefonu', required: true },
      { id: 'claimAmount', label: 'Uyuşmazlık Bedeli (TL)', type: 'text', placeholder: 'Örn: 8.500 TL', required: true },
      { id: 'complaintReason', label: 'Şikayet Nedeni ve Talep', type: 'textarea', placeholder: 'Ürünün arızası ve bedel iadesi talebi', required: true },
    ]
  },

  // --- İŞ HUKUKU & İK ---
  'belirsiz-sureli-is-sozlesmesi': {
    slug: 'belirsiz-sureli-is-sozlesmesi',
    title: 'Standart İş Sözleşmesi (4857 Sayılı Kanun)',
    category: 'İş Hukuku & İK',
    description: 'Deneme süreli, fazla mesai, gizlilik ve görev tanımını içeren tam süreli personel iş sözleşmesi.',
    price: 139,
    fields: [
      { id: 'employerTitle', label: 'İşveren Şirket / Şahıs Unvanı', type: 'text', placeholder: 'Firma adı', required: true },
      { id: 'employeeName', label: 'Personel Adı Soyadı', type: 'text', placeholder: 'Çalışan adı', required: true },
      { id: 'employeeId', label: 'Personel T.C. No', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'jobTitle', label: 'Görevi / Pozisyonu', type: 'text', placeholder: 'Örn: Satış Temsilcisi', required: true },
      { id: 'monthlySalary', label: 'Aylık Net/Brüt Maaş (TL)', type: 'text', placeholder: 'Örn: 30.000 TL Net', required: true },
      { id: 'startDate', label: 'İşe Başlama Tarihi', type: 'date', required: true },
    ]
  },
  'istifa-dilekcesi': {
    slug: 'istifa-dilekcesi',
    title: 'İstifa ve Fesih Dilekçesi',
    category: 'İş Hukuku & İK',
    description: 'İhbar önelli veya haklı nedenle derhal fesih bildiren işçi istifa formu.',
    price: 79,
    fields: [
      { id: 'employeeName', label: 'Çalışan Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'companyName', label: 'Çalışılan Şirket / Kurum', type: 'text', placeholder: 'Firma unvanı', required: true },
      { id: 'lastWorkDate', label: 'İşten Ayrılınacak Son Gün', type: 'date', required: true },
      { id: 'resignationReason', label: 'İstifa Gerekçesi (İsteğe Bağlı)', type: 'textarea', placeholder: 'Örn: Kendi isteğimle / Haklı nedenle', required: false },
    ]
  },
  'ibraname-ve-feragatname': {
    slug: 'ibraname-ve-feragatname',
    title: 'Personel İbranamesi',
    category: 'İş Hukuku & İK',
    description: 'Kıdem, ihbar, maaş ve izin alacaklarının ödendiğini belgeleyen yasal ibra metni.',
    price: 119,
    fields: [
      { id: 'companyName', label: 'İşveren Firma Adı', type: 'text', placeholder: 'Firma unvanı', required: true },
      { id: 'employeeName', label: 'Ayrılan Personel Adı', type: 'text', placeholder: 'Personel adı', required: true },
      { id: 'totalPaidAmount', label: 'Ödenen Toplam Tazminat & Hak Ediş (TL)', type: 'text', placeholder: 'Örn: 65.000 TL', required: true },
      { id: 'paymentDate', label: 'Ödeme ve İbra Tarihi', type: 'date', required: true },
    ]
  },

  // --- ARAÇ & ULAŞIM ---
  'arac-satis-sozlesmesi': {
    slug: 'arac-satis-sozlesmesi',
    title: 'Araç Satış & Kapora Protokolü',
    category: 'Araç & Ulaşım',
    description: 'Noter devri öncesi kapora, tramer/ekspertiz beyanı ve cayma şartlarını bağlayan resmi protokol.',
    price: 89,
    fields: [
      { id: 'sellerName', label: 'Satıcı Adı Soyadı', type: 'text', placeholder: 'Ruhsat sahibi', required: true },
      { id: 'buyerName', label: 'Alıcı Adı Soyadı', type: 'text', placeholder: 'Alıcı', required: true },
      { id: 'carPlate', label: 'Araç Plakası ve Şasi No', type: 'text', placeholder: '34 ABC ...', required: true },
      { id: 'carModel', label: 'Marka, Model ve Yıl', type: 'text', placeholder: 'Örn: 2021 Megane', required: true },
      { id: 'salePrice', label: 'Toplam Anlaşılan Satış Tutarı', type: 'text', placeholder: 'Örn: 750.000 TL', required: true },
      { id: 'depositAmount', label: 'Verilen Kapora Bedeli', type: 'text', placeholder: 'Örn: 20.000 TL', required: true },
      { id: 'notaryDeadline', label: 'Noter Devri İçin Son Tarih', type: 'date', required: true },
    ]
  },
  'surucu-arac-teslim-tutanagi': {
    slug: 'surucu-arac-teslim-tutanagi',
    title: 'Şirket Aracı Zimmet & Teslim Tutanağı',
    category: 'Araç & Ulaşım',
    description: 'Personele teslim edilen şirket aracının kilometre, hasar durumu ve trafik cezası sorumluluk formu.',
    price: 99,
    fields: [
      { id: 'companyName', label: 'Araç Sahibi Şirket Unvanı', type: 'text', placeholder: 'Firma adı', required: true },
      { id: 'driverName', label: 'Teslim Alan Sürücü/Personel', type: 'text', placeholder: 'Sürücü Ad Soyad', required: true },
      { id: 'carPlate', label: 'Araç Plakası', type: 'text', placeholder: 'Plaka', required: true },
      { id: 'currentKm', label: 'Teslim Anındaki Kilometre', type: 'text', placeholder: 'Örn: 84.500 km', required: true },
      { id: 'handoverDate', label: 'Teslim Tarihi', type: 'date', required: true },
    ]
  },

  // --- ŞİRKET & E-TİCARET ---
  'kvkk-aydinlatma-metni': {
    slug: 'kvkk-aydinlatma-metni',
    title: 'Web Sitesi KVKK Aydınlatma & Çerez Politikası',
    category: 'Şirket & E-Ticaret',
    description: '6698 sayılı KVKK uyarınca internet siteleri ve uygulamalar için zorunlu yasal metin.',
    price: 99,
    fields: [
      { id: 'companyName', label: 'Veri Sorumlusu Unvanı / Adı', type: 'text', placeholder: 'Ticari unvan', required: true },
      { id: 'websiteUrl', label: 'Web Sitesi Domain Adresi', type: 'text', placeholder: 'www.ornek.com', required: true },
      { id: 'contactEmail', label: 'İletişim / Başvuru E-posta Adresi', type: 'text', placeholder: 'kvkk@ornek.com', required: true },
      { id: 'companyAddress', label: 'Firma Tebligat Adresi', type: 'textarea', placeholder: 'Açık merkez adres', required: true },
    ]
  },
  'mesafeli-satis-sozlesmesi': {
    slug: 'mesafeli-satis-sozlesmesi',
    title: 'Mesafeli Satış Sözleşmesi & Ön Bilgilendirme',
    category: 'Şirket & E-Ticaret',
    description: 'Ticaret Bakanlığı yönetmeliğine tam uyumlu e-ticaret checkout satış sözleşmesi paketi.',
    price: 119,
    fields: [
      { id: 'sellerTitle', label: 'Satıcı Firma Ticari Unvanı', type: 'text', placeholder: 'Firma adı', required: true },
      { id: 'sellerTaxNo', label: 'Satıcı Vergi Dairesi ve VKN', type: 'text', placeholder: 'VKN no', required: true },
      { id: 'websiteDomain', label: 'E-Ticaret Sitesi Adresi', type: 'text', placeholder: 'www.alisveris.com', required: true },
      { id: 'returnAddress', label: 'Kargo İade Adresi', type: 'textarea', placeholder: 'İade depo adresi', required: true },
    ]
  },
  'gizlilik-sozlesmesi-nda': {
    slug: 'gizlilik-sozlesmesi-nda',
    title: 'Gizlilik Sözleşmesi (NDA - İki Taraflı)',
    category: 'Şirket & E-Ticaret',
    description: 'Ticari sırlar, yazılım kodları ve iş ortaklıkları öncesi paylaşılan bilgileri koruyan sözleşme.',
    price: 129,
    fields: [
      { id: 'party1Name', label: '1. Taraf Unvanı / Adı', type: 'text', placeholder: 'Firma/Şahıs', required: true },
      { id: 'party2Name', label: '2. Taraf Unvanı / Adı', type: 'text', placeholder: 'Firma/Şahıs', required: true },
      { id: 'scopeSubject', label: 'Paylaşılacak Bilginin Kapsamı / Proje', type: 'textarea', placeholder: 'Örn: X mobil uygulama projesi görüşmeleri', required: true },
      { id: 'penaltyAmount', label: 'İhlal Halinde Cezai Şart Tutarı (TL/USD)', type: 'text', placeholder: 'Örn: 250.000 TL', required: true },
    ]
  },

  // --- RESMİ KURUM & DİLEKÇE ---
  'belediye-imar-ve-yapi-dilekcesi': {
    slug: 'belediye-imar-ve-yapi-dilekcesi',
    title: 'Belediye İmar Durumu ve Çap Talep Dilekçesi',
    category: 'Resmi Kurum & Dilekçe',
    description: 'İlgili belediye imar ve şehircilik müdürlüğüne sunulacak resmi ada/parsel talep dilekçesi.',
    price: 79,
    fields: [
      { id: 'municipalityName', label: 'İlgili Belediye Başkanlığı', type: 'text', placeholder: 'Örn: Başiskele Belediye Başkanlığı', required: true },
      { id: 'ownerName', label: 'Malik Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'ownerId', label: 'T.C. Kimlik No', type: 'text', placeholder: '11 haneli T.C.', required: true },
      { id: 'parcelInfo', label: 'İlçe, Mahalle, Ada ve Parsel No', type: 'textarea', placeholder: 'Örn: Kullar Mah. 102 Ada, 4 Parsel', required: true },
    ]
  },
  'sgk-itiraz-ve-duzeltme-dilekcesi': {
    slug: 'sgk-itiraz-ve-duzeltme-dilekcesi',
    title: 'SGK Prim / Hizmet Düzeltme Dilekçesi',
    category: 'Resmi Kurum & Dilekçe',
    description: 'Sosyal Güvenlik Merkez Müdürlüklerine sunulacak gün/prim birleştirme ve düzeltme dilekçesi.',
    price: 89,
    fields: [
      { id: 'sgkCenter', label: 'Sosyal Güvenlik Merkezi Müdürlüğü', type: 'text', placeholder: 'Örn: İzmit SGM Müdürlüğü', required: true },
      { id: 'applicantName', label: 'Sigortalı Adı Soyadı', type: 'text', placeholder: 'Ad Soyad', required: true },
      { id: 'applicantId', label: 'T.C. Kimlik No / Sigorta Sicil No', type: 'text', placeholder: 'Sicil no', required: true },
      { id: 'correctionRequest', label: 'Talep Edilen Düzeltme Özeti', type: 'textarea', placeholder: 'Örn: 2024 yılı eksik yatan 4A prim günlerinin incelenmesi', required: true },
    ]
  },
  'vergi-dairesi-uzlasma-dilekcesi': {
    slug: 'vergi-dairesi-uzlasma-dilekcesi',
    title: 'Vergi Dairesi Tarhiyat Öncesi Uzlaşma Dilekçesi',
    category: 'Resmi Kurum & Dilekçe',
    description: 'Tebliğ edilen vergi ve ceza ihbarnameleri için yasal süresinde uzlaşma komisyonu talep dilekçesi.',
    price: 99,
    fields: [
      { id: 'taxOfficeName', label: 'İlgili Vergi Dairesi Müdürlüğü', type: 'text', placeholder: 'Örn: Alemdar Vergi Dairesi', required: true },
      { id: 'taxPayerTitle', label: 'Mükellef Adı / Şirket Unvanı', type: 'text', placeholder: 'Mükellef adı', required: true },
      { id: 'taxNo', label: 'T.C. / Vergi Kimlik No', type: 'text', placeholder: 'VKN no', required: true },
      { id: 'noticeDetails', label: 'İhbarname Tarih ve Numarası', type: 'text', placeholder: 'Örn: 10.02.2026 tarihli 2026/A-12 sayılı ihbarname', required: true },
    ]
  }
};
