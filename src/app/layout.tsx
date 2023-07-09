/* eslint-disable @next/next/no-page-custom-font */
import { Header } from '@/components/header'
import './globals.css'
import { Raleway } from 'next/font/google'
import { ReactNode } from 'react'
import { Footer } from '@/components/footer'

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway-vr',
})

export const metadata = {
  title: 'Alura Geek',
  description: 'Descubra o universo geek conosco!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={raleway.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
