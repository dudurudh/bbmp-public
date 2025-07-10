import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bengaluru Democracy Quiz - No Corporators Since 2020',
  description: 'Take this quiz to see why Bengaluru has had no local corporators since 2020 and why local elections matter.',
  keywords: 'Bengaluru, BBMP, corporators, local elections, democracy, civic awareness',
  metadataBase: new URL('https://dudurudh.github.io'),
  openGraph: {
    title: 'Bengaluru Democracy Quiz - No Corporators Since 2020',
    description: 'Take this quiz to see why Bengaluru has had no local corporators since 2020 and why local elections matter.',
    type: 'website',
    url: 'https://dudurudh.github.io/bump-public',
  },
  twitter: {
    card: 'summary',
    title: 'Bengaluru Democracy Quiz - No Corporators Since 2020',
    description: 'Take this quiz to see why Bengaluru has had no local corporators since 2020 and why local elections matter.',
  },
  other: {
    'viewport': 'width=device-width, initial-scale=1',
    'theme-color': '#2563eb',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-SQ8PWMFKP7`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SQ8PWMFKP7');
            `,
          }}
        />
        {/* Accessibility meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bengaluru Democracy Quiz" />
        <meta name="description" content="Interactive quiz about Bengaluru's local democracy and the absence of elected corporators since 2020" />
        <meta name="keywords" content="Bengaluru, BBMP, corporators, local elections, democracy, civic awareness, quiz" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {/* Skip to main content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        {children}
      </body>
    </html>
  )
} 