import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import GlobalParticles from '@/components/GlobalParticles'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Nezium - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional digital experiences.',
  keywords: ['React', 'Next.js', 'TypeScript', 'Full Stack Developer', 'Web Development'],
  authors: [{ name: 'Nezium' }],
  openGraph: {
    title: 'Nezium - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nezium - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <GlobalParticles />
        {children}
      </body>
    </html>
  )
}
