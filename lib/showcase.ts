import { SITE } from './seo'

export type ShowcaseItem = {
  id: string
  src: string
  width: number
  height: number
  /** English SEO alt */
  altEn: string
  /** Arabic SEO alt */
  altAr: string
  titleEn: string
  titleAr: string
  captionEn: string
  captionAr: string
}

/** Studio visuals — used on homepage + ImageObject JSON-LD */
export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'global-scale',
    src: '/showcase/global-scale.png',
    width: 1080,
    height: 1080,
    altEn:
      'WebAtlas multilingual web studio — global connectivity workstation for Arabic, English and French website delivery in about 10 days',
    altAr:
      'استوديو WebAtlas — محطة عمل لبناء مواقع عربية وإنجليزية وفرنسية مع تسليم حوالي ١٠ أيام',
    titleEn: 'Scale with bilingual sites',
    titleAr: 'توسّع بمواقع ثنائية اللغة',
    captionEn: 'Arabic + English builds for UAE & GCC businesses that need clients, not brochures.',
    captionAr: 'مواقع عربي + إنجليزي لشركات الإمارات والخليج — تجيب عملاء مو بس شكل.',
  },
  {
    id: 'ten-day-deploys',
    src: '/showcase/ten-day-deploys.jpg',
    width: 1080,
    height: 1080,
    altEn:
      'WebAtlas 10-day website deployment process — custom portals and web apps for Gulf businesses',
    altAr:
      'منهجية WebAtlas لتسليم المواقع خلال حوالي ١٠ أيام — بوابات وتطبيقات ويب لشركات الخليج',
    titleEn: 'About 10-day delivery',
    titleAr: 'تسليم حوالي ١٠ أيام',
    captionEn: 'Clear scope, WhatsApp-first CTAs, and a launch date you can plan around.',
    captionAr: 'نطاق واضح، واتساب أولاً، وموعد إطلاق تقدر تخطط عليه.',
  },
  {
    id: 'enterprise-precision',
    src: '/showcase/enterprise-precision.jpg',
    width: 1080,
    height: 1080,
    altEn:
      'Enterprise-grade web architecture meeting — scalable custom web applications engineered by WebAtlas',
    altAr:
      'هندسة ويب بمستوى مؤسسات — تطبيقات مخصصة قابلة للتوسع من WebAtlas',
    titleEn: 'Built for serious businesses',
    titleAr: 'مبني لبزنس جاد',
    captionEn: 'Clinics, real estate, salons, and professional firms that already make money offline.',
    captionAr: 'عيادات، عقارات، صالونات، ومكاتب مهنية عندها شغل حقيقي أوفلاين.',
  },
  {
    id: 'web-architecture',
    src: '/showcase/web-architecture.jpg',
    width: 1080,
    height: 1080,
    altEn:
      'WebAtlas custom web architecture diagrams — portals and systems with fixed pricing in about 10 days',
    altAr:
      'مخططات هندسة ويب مخصصة من WebAtlas — بوابات وأنظمة بأسعار واضحة وتسليم سريع',
    titleEn: 'Systems that convert',
    titleAr: 'أنظمة تحوّل',
    captionEn: 'Lead forms, booking paths, and portals — engineered, not template-pasted.',
    captionAr: 'نماذج استفسار، حجز، وبوابات — مهندَسة مو قالب جاهز.',
  },
]

export function buildShowcaseImageSchemas() {
  return SHOWCASE_ITEMS.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${SITE.url}${item.src}`,
    contentUrl: `${SITE.url}${item.src}`,
    url: `${SITE.url}${item.src}`,
    name: item.titleEn,
    description: item.altEn,
    caption: item.captionEn,
    inLanguage: ['en', 'ar'],
    creditText: SITE.name,
    copyrightNotice: SITE.name,
    acquireLicensePage: `${SITE.url}/contact/`,
    creator: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  }))
}
