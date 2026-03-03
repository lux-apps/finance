import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUX Finance - Liquid Protocol | Self-Repaying Loans',
  description: 'Liquid Protocol: Self-repaying loans powered by yield. Deposit bridged collateral, borrow L* synthetic tokens, and let source chain yield auto-repay your debt. 90% LTV E-Mode.',
  keywords: ['DeFi', 'self-repaying loans', 'Liquid Protocol', 'L* tokens', 'LETH', 'LBTC', 'LUSD', 'yield', 'lending', 'borrowing', 'cross-chain', 'LUX'],
  authors: [{ name: 'Lux Partners' }],
  creator: 'Lux Partners',
  publisher: 'Lux Partners',
  metadataBase: new URL('https://lux.finance'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LUX Finance - Liquid Protocol | Self-Repaying Loans',
    description: 'Self-repaying loans. Borrow against yield. Deposit bridged collateral, borrow L* tokens, auto-repay with source chain yield.',
    url: 'https://lux.finance',
    siteName: 'LUX Finance',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LUX Finance - Liquid Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUX Finance - Liquid Protocol | Self-Repaying Loans',
    description: 'Self-repaying loans. Borrow against yield. Deposit bridged collateral, borrow L* tokens, auto-repay with source chain yield.',
    creator: '@luxfi',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
