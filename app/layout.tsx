import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hellware',
  description: 'Elevate Your Gameplay With Hellware\'s Elite Tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
