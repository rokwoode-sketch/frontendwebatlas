export type Locale = 'en' | 'fr' | 'ar'

export type FaqItem = { q: string; a: string }

export type PageMeta = { title: string; description: string }

export type Dictionary = {
  lang: Locale
  dir: 'ltr' | 'rtl'
  meta: {
    siteTitle: string
    siteDescription: string
    siteTagline: string
    home: PageMeta
    about: PageMeta
    services: PageMeta
    process: PageMeta
    contact: PageMeta
    insights: PageMeta
    blog: PageMeta
  }
  common: {
    home: string
    blog: string
    readArticle: string
    readGuide: string
    viewAll: string
    challenge: string
    solution: string
    before: string
    after: string
    popular: string
    comingSoon: string
    startingPrice: string
    bestFor: string
    deliveredIn10: string
    fixedPrice: string
    onlineProcess: string
    mostPopular: string
    getFixedQuote: string
    describeProject: string
    startProject: string
    minRead: string
    moreArticles: string
    readyToBuild: string
    freePreviewCta: string
    freePreviewBody: string
    toggleMenu: string
    skipToMain: string
    locationLine: string
    typicalResult: string
    afterBuild: string
    beforeTypical: string
    interactivePreview: string
    live: string
    bookingsThisWeek: string
  }
  nav: {
    products: string
    services: string
    process: string
    blog: string
    insights: string
    about: string
    contact: string
    cta: string
  }
  footer: {
    tagline: string
    services: string
    company: string
    markets: string
    rights: string
    location: string
    links: {
      custom: string
      booking: string
      leadgen: string
      portal: string
      catalog: string
      multilang: string
      ai: string
      about: string
      contact: string
      process: string
      faq: string
      blog: string
      insights: string
      morocco: string
      france: string
      uk: string
      gulf: string
      global: string
    }
  }
  heroBadge: {
    ariaLabel: string
    eyebrow: string
    titleGradient: string
    titlePlain: string
    skills: [string, string, string, string, string]
    city: string
    coords: string
  }
  home: {
    heroBadge: string
    heroLine1: string
    heroLine2: string
    heroLine3: string
    heroBody: string
    heroBodyStrong: string
    heroBodyExtra: string
    heroCta1: string
    heroCta2: string
    heroTrust: [string, string, string]
    standardsLabel: string
    standardsTitle: string
    standardsTitleAccent: string
    standardsBody: string
    standards: { metric: string; label: string; detail: string }[]
    markets: string[]
    stats: { v: number; s: string; u: string; l: string }[]
    painLabel: string
    painTitle: string
    painTitleAccent: string
    painBody: string
    pains: { n: string; title: string; body: string }[]
    servicesLabel: string
    servicesTitle: string
    servicesBody: string
    services: { id: string; title: string; body: string; tag: string; hot?: boolean }[]
    deliverablesLabel: string
    deliverablesTitle: string
    deliverablesBody: string
    deliverables: { title: string; body: string }[]
    industriesLabel: string
    industriesTitle: string
    industriesBody: string
    industries: { code: string; title: string; body: string }[]
    investmentLabel: string
    investmentTitle: string
    investmentBody: string
    investmentFootnote: string
    investment: { tier: string; range: string; timeline: string; includes: string }[]
    processLabel: string
    processTitle: string
    processTitleAccent: string
    processBody: string
    steps: { n: string; title: string; sub: string; body: string }[]
    previewLabel: string
    previewTitle: string
    previewTitleAccent: string
    previewBody: string
    previewBullets: [string, string, string, string]
    previewCta: string
    previewSteps: { title: string; sub: string }[]
    previewNote: string
    caseStudyLabel: string
    caseStudyTitle: string
    caseStudyTitleAccent: string
    voicesLabel: string
    voicesTitle: string
    voicesBody: string
    clientVoices: { quote: string; name: string; role: string }[]
    whyLabel: string
    whyTitle: string
    whyTitleAccent: string
    whyBody: string
    whyItems: [string, string][]
    whyStats: [string, string][]
    whyLocationTitle: string
    whyLocationBody: string
    faqLabel: string
    faqTitle: string
    ctaTitle: string
    ctaTitleAccent: string
    ctaBody: string
    ctaButton: string
    ctaFootnote: string
    ctaLabel: string
  }
  productShowcase: {
    label: string
    title: string
    titleAccent: string
    body: string
    typicalResult: string
    products: {
      id: string
      label: string
      headline: string
      body: string
      metric: string
      industry: string
      before: string
      after: string
    }[]
  }
  caseStudy: {
    client: string
    industry: string
    location: string
    headline: string
    body: string
    challenge: string
    solution: string
    metrics: { label: string; value: string }[]
    before: string
    after: string
    cta: string
    visitUrl: string
    visitCta: string
    mockup: {
      banner: string
      services: [string, string, string]
      prices: [string, string, string]
      cta: string
      liveValue: string
      liveLabel: string
      langBadge: string
      siteBar: string
    }
  }
  about: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
    storyTitle: string
    storyP1: string
    storyP2: string
    storyP3: string
    quote: string
    quoteAttribution: string
    stats: { n: string; label: string }[]
    valuesLabel: string
    valuesTitle: string
    values: { title: string; body: string }[]
    marketsLabel: string
    marketsTitle: string
    marketsBody: string
    markets: { region: string; cities: string; lang: string }[]
    credentialsLabel: string
    credentialsTitle: string
    credentialsBody: string
    credentials: { title: string; body: string }[]
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
  services: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
    heroCta: string
    comingSoon: string
    startProject: string
    details: {
      id: string
      label: string
      headline: string
      body: string
      includes: string[]
      for: string
      price: string
      soon?: boolean
    }[]
    pricingLabel: string
    pricingTitle: string
    pricingBody: string
    tiers: {
      name: string
      price: string
      description: string
      features: string[]
      cta: string
      highlight?: boolean
    }[]
    faqLabel: string
    faqTitle: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
  process: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
    stepsSrOnly: string
    steps: {
      n: string
      title: string
      sub: string
      body: string
      deliverables: string[]
    }[]
    principlesTitle: string
    principles: { title: string; body: string }[]
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
  contact: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
    waTitle: string
    waBody: string
    waCta: string
    projectTypesLabel: string
    projectTypes: { label: string; message: string }[]
    footnote: string
    nextTitle: string
    nextSteps: { step: string; text: string }[]
    directTitle: string
    hours: string
    auditTitle: string
    auditBody: string
    defaultMessage: string
  }
  insights: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
    patternsTitle: string
    patterns: { title: string; stat: string; body: string; href: string }[]
    casesTitle: string
    caseStudies: { id: string; name: string; description: string; result: string; industry: string }[]
    latestTitle: string
  }
  blog: {
    label: string
    title: string
    titleAccent: string
    heroBody: string
  }
  faqs: FaqItem[]
  serviceFaqs: FaqItem[]
  notFound: {
    title: string
    body: string
    goHome: string
    contact: string
  }
  mockups: {
    heroFloatUrl: string
    booking: {
      title: string
      clinic: string
      days: [string, string, string, string, string]
      smsConfirm: string
      noCall: string
    }
    lead: {
      headline: string
      fields: [string, string, string]
      sampleValue: string
      submit: string
      footnote: string
    }
    catalog: {
      filters: [string, string, string]
      title: string
      langBadge: string
      products: { name: string; spec: string; price: string }[]
      cta: string
    }
    reservation: {
      property: string
      location: string
      dates: [string, string, string]
      suite: string
      noFee: string
      saved: string
      bookCta: string
    }
    before: {
      noBooking: string
      noForms: string
      bounce: string
      footnote: string
    }
  }
  wa: {
    brand: string
    headline: string
    sub: string
    quickMessages: { label: string; message: string }[]
    cta: string
    status: string
    triggerLabel: string
    openAria: string
    closeAria: string
    defaultMessage: string
  }
}
