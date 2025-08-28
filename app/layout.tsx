import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
    url: 'https://hellware.vip',
    siteName: 'Hellware',
    images: [
      {
        url: 'https://github.com/zaboody/hellware/blob/main/public/banner.png?raw=true',
        width: 1200,
        height: 630,
        alt: 'Hellware Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hellware',
    description: 'Ruin The Game With Hellware\'s Products',
    images: ['https://github.com/zaboody/hellware/blob/main/public/banner.png?raw=true'],
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
