import type { Dictionary } from './types'
import arTail from './content-ar-tail'
import arHome from './ar-home'
import arPages from './ar-pages'

const contentAr: Omit<Dictionary, 'lang' | 'dir'> = {
  meta: {
    siteTitle: 'WebAtlas — استوديو ويب وظيفي | الدار البيضاء',
    siteDescription:
      'WebAtlas استوديو ويب وظيفي في الدار البيضاء، المغرب. نبني مواقع وتطبيقات مخصصة — محركات حجز، بوابات، أسواق، لوحات تحكم — تُسلَّم في أيام، 100٪ عن بُعد، من 800$.',
    siteTagline: 'مواقع تُغلق الصفقات. ليست للعرض فقط.',
    home: {
      title: 'WebAtlas — استوديو ويب وظيفي | الدار البيضاء',
      description:
        'WebAtlas تبني مواقع مخصصة تُحوّل — محركات حجز، جذب عملاء، بوابات. استوديو بالدار البيضاء، تسليم عالمي. شاهد موقعك مجاناً قبل الدفع.',
    },
    about: {
      title: 'من نحن — WebAtlas',
      description: 'وكالة ويب مدعومة بالذكاء الاصطناعي في الدار البيضاء. مواقع وظيفية لشركات جادة في أكثر من 7 دول.',
    },
    services: {
      title: 'الخدمات — تطبيقات ويب وأنظمة أعمال',
      description: 'WebAtlas تبني مواقع وتطبيقات مخصصة — حجز، بوابات، أسواق، لوحات تحكم. أسعار ثابتة، تسليم في أيام من الدار البيضاء.',
    },
    process: {
      title: 'منهجيتنا — تسليم ويب في 10 أيام',
      description: 'منهجية WebAtlas: تدقيق مجاني، معاينة حية بحلول اليوم 3، بناء، إطلاق وتسليم. نطاق وموعد ثابتان.',
    },
    contact: {
      title: 'اتصل بنا — WebAtlas',
      description: 'راسل WebAtlas على واتساب. رد خلال 4 ساعات. تدقيق مجاني. فرنسية وإنجليزية وعربية.',
    },
    insights: {
      title: 'رؤى — أبحاث ونماذج وكالة ويب',
      description: 'رؤى WebAtlas: دراسات حالة وأبحاث ودلائل استراتيجية للشركات المستثمرة في مواقع وظيفية بالمغرب ودولياً.',
    },
    blog: {
      title: 'المدونة — تصميم ويب وحجز ورؤى وكالة',
      description: 'أدلة عملية عن مواقع الحجز والحجز المباشر للرياض والمواقع متعددة اللغات للتصدير وأسعار الوكالات في المغرب وخارجه.',
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
    startingPrice: 'السعر الابتدائي',
    bestFor: 'الأنسب لـ',
    deliveredIn10: '✓ التسليم في 10 أيام',
    fixedPrice: '✓ سعر ثابت بلا مفاجآت',
    onlineProcess: '✓ عملية 100٪ عن بُعد',
    mostPopular: 'الأكثر شعبية',
    getFixedQuote: 'احصل على عرض ثابت',
    describeProject: 'صف مشروعك',
    startProject: 'ابدأ هذا المشروع',
    minRead: 'قراءة',
    moreArticles: 'مقالات أخرى',
    readyToBuild: 'مستعد لبناء شيء يعمل؟',
    freePreviewCta: 'احصل على معاينتك المجانية',
    freePreviewBody: 'أرسل موقعك الحالي. سنراجعه ونُريك معاينة حية لنسخة تركز على التحويل — مجاناً، بلا عقد.',
    toggleMenu: 'فتح القائمة',
    locationLine: 'الدار البيضاء، المغرب · عالمي',
    typicalResult: 'نتيجة نموذجية',
    afterBuild: 'بعد — بناء WebAtlas',
    beforeTypical: 'قبل — موقع تقليدي',
    interactivePreview: 'معاينة تفاعلية · ما سيستخدمه عملاؤك — ليس PDF',
    live: 'مباشر',
    bookingsThisWeek: 'حجز هذا الأسبوع',
  },
  nav: {
    products: 'المنتجات',
    services: 'الخدمات',
    process: 'المنهجية',
    blog: 'المدونة',
    insights: 'رؤى',
    about: 'من نحن',
    contact: 'اتصل بنا',
    cta: 'ابدأ مشروعك',
  },
  ...arTail,
  home: arHome,
  ...arPages,
}

export default contentAr
