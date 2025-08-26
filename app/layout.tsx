import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hellware',
  description: 'Ruin The Game With Hellware\'s Products. Never Lose Again.',
  keywords: ['gaming', 'tools', 'hellware', 'competitive', 'undetected'],
  authors: [{ name: 'Hellware' }],
  creator: 'Hellware',
  publisher: 'Hellware',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hellware.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hellware.vercel.app',
    siteName: 'Hellware',
    title: 'Hellware - Ruin The Game With Hellware\'s Products',
    description: 'Ruin The Game With Hellware\'s Products. Never Lose Again.',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Hellware Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hellware - Ruin The Game With Hellware\'s Products',
    description: 'Ruin The Game With Hellware\'s Products. Never Lose Again.',
    images: ['/LOGO.png'],
    creator: '@hellware',
    site: '@hellware',
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
    google: 'your-google-verification-code',
  },
  category: 'gaming',
  classification: 'gaming tools and services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ff4444" />
        <meta name="msapplication-TileColor" content="#ff4444" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/LOGO.png" />
        <link rel="apple-touch-icon" href="/LOGO.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
