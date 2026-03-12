import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'NextGenAIForum 2027 | International AI Conference - Bangalore, India',
  description: 'The preeminent international conference converging Generative AI, 6G Orchestration, and Global Technology Policy. April 9-10, 2027 in Bangalore, India.',
  keywords: ['AI Conference', 'Artificial Intelligence', 'Generative AI', 'Agentic AI', '6G', 'Machine Learning', 'Bangalore', 'India'],
  openGraph: {
    title: 'NextGenAIForum 2027 | The Agentic Network',
    description: 'Defining the Agentic Network & Strategic AI Autonomy. April 9-10, 2027 - Bangalore, India',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
