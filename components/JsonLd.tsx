import {
  buildBreadcrumbSchema,
  buildCaseStudySchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildSpeakableSchema,
  buildVideoSchema,
  buildWebSiteSchema,
  CASE_STUDIES,
  FAQS,
  SERVICE_FAQS,
  SERVICES,
  SITE,
  type FaqItem,
} from '@/lib/seo'

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] }

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}

export function GlobalJsonLd() {
  return (
    <JsonLd
      data={[
        buildOrganizationSchema(),
        buildWebSiteSchema(),
      ]}
    />
  )
}

export function HomePageJsonLd() {
  return (
    <JsonLd
      data={[
        buildFaqSchema(FAQS),
        buildVideoSchema(),
        buildSpeakableSchema(),
        ...CASE_STUDIES.slice(0, 3).map((s) => buildCaseStudySchema(s)),
      ]}
    />
  )
}

export function WorkPageJsonLd() {
  return (
    <JsonLd
      data={[
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Results', url: '/work' },
        ]),
        ...CASE_STUDIES.map((s) => buildCaseStudySchema(s)),
      ]}
    />
  )
}

export function ServicesPageJsonLd() {
  return (
    <JsonLd
      data={[
        ...SERVICES.map((svc) => buildServiceSchema(svc)),
        buildFaqSchema(SERVICE_FAQS),
      ]}
    />
  )
}

export function FaqPageJsonLd({ faqs }: { faqs: FaqItem[] }) {
  return <JsonLd data={buildFaqSchema(faqs)} />
}
