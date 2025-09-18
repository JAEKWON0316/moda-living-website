import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '모다리빙 분리수거함 | 친환경 디자인 수납함 전문브랜드',
    template: '%s | 모다리빙'
  },
  description: '세련된 디자인과 실용성을 겸비한 모다리빙 분리수거함. 가정용부터 업소용까지 다양한 크기와 스타일로 깔끔한 분리수거 환경을 만들어보세요.',
  keywords: [
    '분리수거함', '재활용함', '쓰레기통', '수납함', '모다리빙', 
    '친환경', '디자인', '스택형', '공간절약', '모던 인테리어',
    'MODA LIVING', '가정용 분리수거함', '업소용 분리수거함'
  ],
  authors: [{ name: '모다리빙' }],
  creator: '모다리빙',
  publisher: '모다리빙',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moda-living.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '모다리빙 분리수거함 | 친환경 디자인 수납함 전문브랜드',
    description: '세련된 디자인과 실용성을 겸비한 모다리빙 분리수거함. 스택형 구조로 공간을 절약하고 친환경 소재로 지구를 생각합니다.',
    url: 'https://moda-living.vercel.app',
    siteName: '모다리빙',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '모다리빙 분리수거함 - 모던한 디자인의 친환경 분리수거 솔루션',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '모다리빙 분리수거함 | 친환경 디자인 수납함',
    description: '세련된 디자인과 실용성을 겸비한 분리수거함',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
}

// 구조화된 데이터 (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '모다리빙',
  alternateName: 'MODA LIVING',
  url: 'https://moda-living.vercel.app',
  logo: 'https://moda-living.vercel.app/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-1588-0000',
    contactType: 'customer service',
    availableLanguage: ['Korean']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressRegion: '서울시',
    addressLocality: '강남구',
    streetAddress: '테헤란로 123'
  },
  sameAs: [
    'https://smartstore.naver.com/modahlv'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#22c55e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main id="home">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
