import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zaresh Meridian & Co. — Build · Market · Automate',
  description:
    'Strategi digital, sistem marketing, dan skill yang membekali perempuan Indonesia untuk memiliki income sendiri — tanpa mengorbankan keluarga.',
  keywords: ['digital marketing', 'bisnis perempuan', 'academy', 'saas', 'indonesia'],
  authors: [{ name: 'Zaresh Meridian & Co.' }],
  openGraph: {
    title: 'Zaresh Meridian & Co.',
    description: 'Build · Market · Automate',
    url: 'https://zareshmeridian.com',
    siteName: 'Zaresh Meridian',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaresh Meridian & Co.',
    description: 'Build · Market · Automate',
  },
  metadataBase: new URL('https://zareshmeridian.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
