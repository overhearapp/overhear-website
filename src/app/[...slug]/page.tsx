import { BuilderComponent } from '@builder.io/react'
import { notFound } from 'next/navigation'

interface BuilderPageProps {
  params: {
    slug: string[]
  }
}

export default async function BuilderPage({ params }: BuilderPageProps) {
  const slug = params.slug.join('/')
  
  // Skip this route for known Next.js pages and Prismic pages
  const knownPages = ['', 'about', 'hire', 'works', 'blog', 'booking']
  const prismicPages = ['meet-the-harmonious-minds', 'start-a-conversation'] // Add your Prismic page UIDs here
  
  if (knownPages.includes(slug) || prismicPages.includes(slug)) {
    notFound()
  }

  // Check if this is a Prismic page first
  try {
    const { createClient } = await import('@/prismicio')
    const client = createClient()
    const prismicPage = await client.getByUID('page', slug)
    if (prismicPage) {
      notFound() // Let the [uid] route handle this
    }
  } catch (error) {
    // Page doesn't exist in Prismic, continue to Builder.io
  }

  return (
    <div className="min-h-screen">
      <BuilderComponent
        model="page"
        content={undefined}
        apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
        options={{
          userAttributes: {
            urlPath: `/${slug}`,
          },
        }}
      />
    </div>
  )
}

// Generate static params for known Builder.io pages (optional)
export async function generateStaticParams() {
  return []
}

