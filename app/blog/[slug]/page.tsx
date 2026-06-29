import type { Metadata } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { pageUrl } from '@/lib/seo'
import BlogPostPageClient from '@/components/pages/BlogPostPage'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: pageUrl(`/blog/${post.slug}`) },
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostPageClient slug={params.slug} />
}
