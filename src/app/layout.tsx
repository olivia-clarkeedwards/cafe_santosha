import { ReactNode } from 'react'
import { Seaweed_Script, Sora } from 'next/font/google'
import './global.css'

// Configure Google Fonts

export const seaweedScript = Seaweed_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-seaweed-script',
})

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sora',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cafe Santosha - A hidden gem in Port Chalmers</title>
        <meta
          name="description"
          content="Come enjoy rustic ambiance of this hidden gem.  At Cafe Santosha in Port Chalmers you will find warm welcoming staff, Good Fortune coffee and a cabinet bursting with freshly baked goods."
        />

        <meta
          property="og:title"
          content="Cafe Santosha - A hidden gem in Port Chalmers"
        />

        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
