import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import { Navigation, Footer, NavigationProgress } from '@/components/layout'
import { CalProvider } from '@/components/CalProvider'
import { PageTransition } from '@/components/animations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'optional',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dayonedevs.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Day One Devs - Full-Stack Product Engineering',
    template: '%s | Day One Devs',
  },
  description:
    'Full-stack product engineering for workflow-heavy apps: AI systems, document automation, SaaS platforms, and codebase stabilization with Next.js, TypeScript, Supabase, and Vercel.',
  keywords: [
    'full-stack development',
    'MVP development',
    'codebase stabilization',
    'Supabase developer',
    'Vercel deployment',
    'Stripe integration',
    'workflow systems',
    'document automation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Day One Devs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Day One Devs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
      </head>
      <body className="min-h-screen bg-bg-primary font-sans antialiased flex flex-col">
        <Script
          src="https://app.cal.com/embed/embed.js"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Day One Devs',
              logo: `${siteUrl}/dayonelogo-transparent.png`,
              url: siteUrl,
              description:
                'Full-stack product engineering for workflow-heavy applications: AI systems, document automation, SaaS platforms, and codebase stabilization.',
              sameAs: [
                'https://www.upwork.com/agencies/dayonedevs',
                'https://github.com/JahacksV1',
                'https://www.linkedin.com/in/jahamiel-douglas-a63b50343/',
              ],
              offers: {
                '@type': 'Offer',
                description:
                  'Custom software development — MVPs, internal tools, AI workflows, document automation, and SaaS platforms.',
              },
            }),
          }}
        />
        <CalProvider>
          <NavigationProgress />
          <Navigation />
          <main className="flex-1 pt-16 md:pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </CalProvider>
      </body>
    </html>
  )
}
