import { ReactNode } from 'react'
import './global.css'

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
