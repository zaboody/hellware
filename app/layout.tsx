import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hellware.vercel.app'),
  title: 'Hellware',
  description: 'Ruin The Game With Hellware\'s Products',
  keywords: 'Hellware, gaming, cheats, hacks, Rainbow Six Siege',
  authors: [{ name: 'Hellware' }],
  creator: 'Hellware',
  publisher: 'Hellware',
  robots: 'index, follow',
  openGraph: {
    title: 'Hellware',
    description: 'Ruin The Game With Hellware\'s Products',
    url: 'https://hellware.vercel.app',
    siteName: 'Hellware',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Hellware Banner',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hellware',
    description: 'Ruin The Game With Hellware\'s Products',
    images: ['/banner.png'],
  },
  themeColor: '#ff4444',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://sellauth.com/assets/js/sellauth-embed-2.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
