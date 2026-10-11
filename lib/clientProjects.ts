/** Fictional UAE/GCC client builds — homepage trust gallery */

export type ClientProject = {
  id: string
  src: string
  nicheEn: string
  nicheAr: string
  clientEn: string
  clientAr: string
  cityEn: string
  cityAr: string
  headlineEn: string
  headlineAr: string
  bodyEn: string
  bodyAr: string
  outcomeEn: string
  outcomeAr: string
  altEn: string
  altAr: string
  featured?: boolean
}

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'arabian-odyssey',
    src: '/showcase/clients/arabian-odyssey-travel.jpg',
    featured: true,
    nicheEn: 'Travel & tourism',
    nicheAr: 'سفر وسياحة',
    clientEn: 'Arabian Odyssey Travel',
    clientAr: 'أوديسي العربية للسفر',
    cityEn: 'Dubai',
    cityAr: 'دبي',
    headlineEn: 'From brochure PDF to a package search that books.',
    headlineAr: 'من PDF دعائي إلى بحث باقات يحجز فعلياً.',
    bodyEn:
      'A DTCM-minded travel desk needed more than Instagram reels. We shipped a bilingual inquiry site with package search, visa path, and WhatsApp handoff so travelers ask from one place.',
    bodyAr:
      'مكتب سفر يحتاج أكثر من ريلز. بنينا موقعاً ثنائي اللغة مع بحث باقات ومسار تأشيرات وواتساب — عشان الاستفسار يجي من مكان واحد.',
    outcomeEn: 'WhatsApp inquiries structured by destination',
    outcomeAr: 'استفسارات واتساب منظمة حسب الوجهة',
    altEn:
      'Arabian Odyssey Travel website mockup — UAE travel agency homepage with Dubai skyline hero and holiday package search',
    altAr:
      'نموذج موقع أوديسي العربية للسفر — وكالة سفر إماراتية مع بحث باقات وهيرو لأفق دبي',
  },
  {
    id: 'noor-electric',
    src: '/showcase/clients/noor-al-khaleej-electric.jpg',
    nicheEn: 'Home services',
    nicheAr: 'خدمات منزلية',
    clientEn: 'Noor Al Khaleej Electric',
    clientAr: 'نور الخليج للكهرباء',
    cityEn: 'Dubai & Emirates',
    cityAr: 'دبي والإمارات',
    headlineEn: 'Emergency electrical trust — Arabic-first.',
    headlineAr: 'ثقة كهرباء طوارئ — عربي أولاً.',
    bodyEn:
      'A licensed electrical team was drowning in messy chat threads. Their site now leads with emergency booking, 24/7 signals, and clear service cards so residents call with confidence.',
    bodyAr:
      'فريق كهرباء مرخّص كان يضيع في محادثات واتساب. الموقع صار يبدأ بحجز طوارئ وإشارات ٢٤ ساعة وبطاقات خدمات واضحة.',
    outcomeEn: 'Book-a-technician path above the fold',
    outcomeAr: 'مسار حجز فني ظاهر من أول شاشة',
    altEn:
      'Noor Al Khaleej Electric Arabic website — Dubai electrician service homepage with emergency booking CTA',
    altAr:
      'موقع نور الخليج للكهرباء بالعربي — خدمات كهربائي في دبي مع زر حجز طوارئ',
  },
  {
    id: 'express-electrician',
    src: '/showcase/clients/express-electrician.jpg',
    nicheEn: 'Maintenance',
    nicheAr: 'صيانة',
    clientEn: 'Express Electrician',
    clientAr: 'الكهربائي السريع',
    cityEn: 'Dubai',
    cityAr: 'دبي',
    headlineEn: 'Same-day maintenance, same-day clarity.',
    headlineAr: 'صيانة بنفس اليوم — ووضوح بنفس اليوم.',
    bodyEn:
      'Home maintenance brand wanted speed without looking cheap. Navy/gold UI, warranty trust strip, and a one-tap appointment CTA for villa and apartment callouts.',
    bodyAr:
      'علامة صيانة منزلية تبغى سرعة بدون شكل رخيص. واجهة كحلي/ذهبي، شريط ضمان، وزر موعد بنقرة للشقق والفلل.',
    outcomeEn: 'Appointment CTA + transparent pricing cues',
    outcomeAr: 'زر موعد + إشارات أسعار شفافة',
    altEn:
      'Express Electrician UAE website — home electrical maintenance landing page with booking and trust badges',
    altAr:
      'موقع الكهربائي السريع — صيانة كهرباء منزلية في الإمارات مع حجز وشارات ثقة',
  },
  {
    id: 'vanguard',
    src: '/showcase/clients/vanguard-promotions.jpg',
    nicheEn: 'Events & promotions',
    nicheAr: 'فعاليات وترويج',
    clientEn: 'Vanguard Promotions UAE',
    clientAr: 'فانغارد للترويج',
    cityEn: 'Dubai · Abu Dhabi',
    cityAr: 'دبي · أبوظبي',
    headlineEn: 'Event staffing that looks as sharp as the expo floor.',
    headlineAr: 'توظيف فعاليات بمستوى أرض المعرض.',
    bodyEn:
      'A promoter agency pitching luxury brands needed a dark, high-end presence. Stats, service cards, and a “Book staff” CTA built for procurement teams under deadline.',
    bodyAr:
      'وكالة مروّجين تبيع لعلامات فاخرة تحتاج حضوراً داكن وفخم. أرقام، بطاقات خدمات، وزر حجز طاقم لفرق المشتريات تحت ضغط الوقت.',
    outcomeEn: 'Quote requests from expo & activation buyers',
    outcomeAr: 'طلبات عرض من مشتري المعارض والتفعيلات',
    altEn:
      'Vanguard Promotions UAE website — event staffing and brand ambassador agency dark luxury homepage',
    altAr:
      'موقع فانغارد للترويج — وكالة توظيف فعاليات وسفراء علامة بهوية فاخرة داكنة',
  },
  {
    id: 'bait-al-joud',
    src: '/showcase/clients/bait-al-joud-restaurant.jpg',
    nicheEn: 'Hospitality',
    nicheAr: 'ضيافة',
    clientEn: 'Bait Al Joud',
    clientAr: 'بيت الجود',
    cityEn: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    headlineEn: 'Emirati hospitality online — reserve, don’t scroll forever.',
    headlineAr: 'ضيافة إماراتية أونلاين — احجز بدل ما تتصفح بلا نهاية.',
    bodyEn:
      'Fine Emirati dining needed a site worthy of the majlis. Gold-on-charcoal, signature dishes, and table booking CTAs for residents and hotel guests.',
    bodyAr:
      'مطعم إماراتي راقٍ يحتاج موقعاً يليق بالمجلس. ذهبي على فحمي، أطباق مميزة، وزر حجز طاولة للسكان ونزلاء الفنادق.',
    outcomeEn: 'Table reservations + menu discovery',
    outcomeAr: 'حجز طاولات + اكتشاف القائمة',
    altEn:
      'Bait Al Joud restaurant website — luxury Emirati dining homepage with table booking and Arabic menu',
    altAr:
      'موقع بيت الجود — مطعم إماراتي فاخر مع حجز طاولة وقائمة عربية',
  },
  {
    id: 'al-diyafa',
    src: '/showcase/clients/al-diyafa-catering.jpg',
    nicheEn: 'Catering',
    nicheAr: 'تموين',
    clientEn: 'Al Diyafa Al Fakhira',
    clientAr: 'الضيافة الفاخرة للتموين',
    cityEn: 'Dubai',
    cityAr: 'دبي',
    headlineEn: 'Weddings & corporate buffets that convert to quotes.',
    headlineAr: 'أعراس وضيافة شركات تتحوّل لطلبات عرض.',
    bodyEn:
      'Premium catering was losing big events to slow replies. Gallery-led services, quote CTA, and bilingual trust for wedding planners and corporate hosts.',
    bodyAr:
      'تموين فاخر كان يخسر فعاليات كبيرة بسبب الرد البطيء. خدمات بمعرض صور، زر طلب عرض، وثقة ثنائية اللغة لمنظمي الأعراس والشركات.',
    outcomeEn: 'Quote form for weddings & boardrooms',
    outcomeAr: 'نموذج عرض للأعراس وقاعات الشركات',
    altEn:
      'Al Diyafa Al Fakhira catering website — luxury UAE catering homepage for weddings and corporate events',
    altAr:
      'موقع الضيافة الفاخرة — تموين إماراتي فاخر للأعراس وفعاليات الشركات',
  },
  {
    id: 'al-safar',
    src: '/showcase/clients/al-safar-travel.jpg',
    nicheEn: 'Travel & visas',
    nicheAr: 'سفر وتأشيرات',
    clientEn: 'Al Safar Travel & Tourism',
    clientAr: 'السفر للسياحة',
    cityEn: 'Dubai',
    cityAr: 'دبي',
    headlineEn: 'IATA-ready trust for holidays and visa paperwork.',
    headlineAr: 'ثقة بمستوى IATA للعطلات ومعاملات التأشيرة.',
    bodyEn:
      'Established travel operator needed modern proof: desert-to-skyline hero, package finder, and certification cues so families book with less hesitation.',
    bodyAr:
      'مشغّل سفر عريق يحتاج إثباتاً عصرياً: هيرو من الصحراء للأفق، باحث باقات، وشارات اعتماد عشان العائلات تحجز بثقة.',
    outcomeEn: 'Package search + visa inquiry path',
    outcomeAr: 'بحث باقات + مسار استفسار تأشيرة',
    altEn:
      'Al Safar Travel website — UAE travel agency with desert Dubai hero, package search, and IATA trust badges',
    altAr:
      'موقع السفر للسياحة — وكالة سفر إماراتية مع بحث باقات وشارات ثقة',
  },
]

export function buildClientProjectImageSchemas(siteUrl: string, siteName: string) {
  return CLIENT_PROJECTS.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${siteUrl}${p.src}`,
    contentUrl: `${siteUrl}${p.src}`,
    url: `${siteUrl}${p.src}`,
    name: p.clientEn,
    description: p.altEn,
    caption: p.headlineEn,
    inLanguage: ['en', 'ar'],
    creditText: siteName,
    copyrightNotice: siteName,
    acquireLicensePage: `${siteUrl}/contact/`,
    creator: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
  }))
}

export const CLIENT_PROJECTS_COPY = {
  en: {
    label: 'Client projects',
    title: 'Built for Gulf businesses',
    titleAccent: 'that already earn offline',
    body: 'A sample of the verticals we ship for — travel, home services, events, dining, and catering. Real niches. Clear conversion paths.',
    outcomeLabel: 'Focus',
  },
  ar: {
    label: 'مشاريع عملاء',
    title: 'مبني لبزنس خليجي',
    titleAccent: 'يكسب أوفلاين',
    body: 'عيّنة من القطاعات اللي نبني لها — سفر، خدمات منزلية، فعاليات، مطاعم، وتموين. نيش حقيقي ومسار تحويل واضح.',
    outcomeLabel: 'التركيز',
  },
}
