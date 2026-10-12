import type { Dictionary } from './types'
import arTail from './content-ar-tail'
import arHome from './ar-home'
import arPages from './ar-pages'

const contentAr: Omit<Dictionary, 'lang' | 'dir'> = {
  meta: {
    siteTitle: 'WebAtlas — مواقع تجيب عملاء | الإمارات والخليج',
    siteDescription:
      'WebAtlas تبني مواقع فخمة بالعربي والإنجليزي لشركات الإمارات والخليج — واتساب، حجز، وحضور يمثّل مستوى شغلك. تسليم حوالي ١٠ أيام.',
    siteTagline: 'مواقع تجيب عملاء — مو بس شكل.',
    home: {
      title: 'WebAtlas — مواقع تجيب عملاء في الإمارات',
      description:
        'مواقع عربية وإنجليزية مع واتساب وحجز لشركات دبي وأبوظبي والخليج. باقات واضحة بالدرهم. شوف الموقع وتواصل واتساب.',
    },
    about: {
      title: 'من نحن — WebAtlas',
      description: 'استوديو ويب يستهدف الإمارات والخليج. نبني مواقع تحوّل الزائر لعميل — مو بروشورات.',
    },
    services: {
      title: 'الخدمات — مواقع استفسارات وحجز وحضور فخم',
      description: 'باقات WebAtlas: موقع يجيب استفسارات، موقع مع حجز، حضور فخم عربي/إنجليزي. أسعار بالدرهم وتسليم سريع.',
    },
    process: {
      title: 'منهجيتنا — حوالي ١٠ أيام للإطلاق',
      description: 'واتساب قصير، اتجاه تصميم، بناء، إطلاق. نطاق واضح بدون تعقيد وكالات كبيرة.',
    },
    contact: {
      title: 'تواصل — WebAtlas واتساب',
      description: 'راسل WebAtlas على واتساب. رد سريع. عربي وإنجليزي. باقات للإمارات والخليج.',
    },
    insights: {
      title: 'رؤى — مواقع أعمال في الخليج',
      description: 'ملاحظات عن مواقع تجيب عملاء في الإمارات: واتساب، حجز، ثقة بصرية.',
    },
    blog: {
      title: 'المدونة — مواقع وواتساب وحجز',
      description: 'أدلة عملية لشركات الإمارات: من الإنستغرام لموقع يحوّل.',
    },
  },
  common: {
    home: 'الرئيسية',
    blog: 'المدونة',
    readArticle: 'اقرأ المقال',
    readGuide: 'اقرأ الدليل ←',
    viewAll: 'عرض الكل ←',
    challenge: 'التحدي',
    solution: 'الحل',
    before: 'قبل',
    after: 'بعد',
    popular: 'الأكثر طلباً',
    comingSoon: 'قريباً',
    startingPrice: 'يبدأ من',
    bestFor: 'الأنسب لـ',
    deliveredIn10: '✓ تسليم حوالي ١٠ أيام',
    fixedPrice: '✓ باقة واضحة بالدرهم',
    onlineProcess: '✓ تواصل واتساب عن بُعد',
    mostPopular: 'الأكثر طلباً',
    getFixedQuote: 'اطلب عرض واضح',
    describeProject: 'صف مشروعك',
    startProject: 'ابدأ هذا المشروع',
    minRead: 'قراءة',
    moreArticles: 'مقالات أخرى',
    readyToBuild: 'جاهز لموقع يشتغل لصالحك؟',
    freePreviewCta: 'تواصل واتساب',
    freePreviewBody: 'أرسل مجال شغلك ورابطك الحالي إن وجد. نرد بتقييم صادق ومسار واضح.',
    toggleMenu: 'فتح القائمة',
    skipToMain: 'انتقل إلى المحتوى الرئيسي',
    locationLine: 'دبي · أبوظبي · الخليج',
    typicalResult: 'النتيجة المتوقعة',
    afterBuild: 'بعد — بناء WebAtlas',
    beforeTypical: 'قبل — رابط ضعيف / بلا موقع',
    interactivePreview: 'هذا ما يراه عميلك — مو ملف PDF',
    live: 'مباشر',
    bookingsThisWeek: 'استفسار هذا الأسبوع',
  },
  nav: {
    products: 'الشغل',
    services: 'الأسعار',
    process: 'كيف نشتغل',
    blog: 'المدونة',
    insights: 'رؤى',
    about: 'من نحن',
    contact: 'تواصل',
    cta: 'واتساب',
  },
  ...arTail,
  home: arHome,
  ...arPages,
}

export default contentAr
