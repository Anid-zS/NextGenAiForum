import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { NeuralNetworkBg } from '@/components/neural-network-bg'
import { buildMetadata, siteMetadata } from '@/lib/metadata'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  applicationName: siteMetadata.name,
  authors: [{ name: siteMetadata.name, url: siteMetadata.url }],
  creator: siteMetadata.name,
  publisher: siteMetadata.name,
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...buildMetadata({
    title: 'NextGenAIForum 2027 | International AI Conference in Bangalore, India',
    description:
      'Join NextGenAIForum 2027 in Bangalore for Generative AI, agentic systems, 6G orchestration, standards, and strategic AI autonomy across research, industry, and policy.',
    path: '/',
    keywords: [
      'AI conference',
      'artificial intelligence conference India',
      'generative AI',
      'agentic systems',
      '6G orchestration',
      'Bangalore technology conference',
      'strategic AI autonomy',
      'NextGenAIForum 2027',
    ],
  }),
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <NeuralNetworkBg />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
