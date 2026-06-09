import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildSpeakableSchema,
  buildWebSiteSchema,
  FAQS,
  SERVICE_FAQS,
  SERVICES,
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
        buildSpeakableSchema(),
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
