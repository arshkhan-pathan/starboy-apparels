import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Venus Appareals - Premium T-Shirt Store | Quality Fashion for Everyone',
  description: 'Discover our exclusive collection of premium t-shirts. High-quality materials, trendy designs, and perfect fit. Shop the latest fashion trends with fast shipping and easy returns.',
  keywords: 't-shirts, fashion, clothing, premium t-shirts, trendy t-shirts, online store, fashion store, Venus appareals',
  authors: [{ name: 'Venus Appareals Team' }],
  creator: 'Venus Appareals',
  publisher: 'Venus Appareals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Venus-appareals.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Venus Appareals - Premium T-Shirt Store',
    description: 'Discover our exclusive collection of premium t-shirts. High-quality materials, trendy designs, and perfect fit.',
    url: 'https://Venus-appareals.com',
    siteName: 'Venus Appareals Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Venus Appareals T-Shirt Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venus Appareals - Premium T-Shirt Store',
    description: 'Discover our exclusive collection of premium t-shirts. High-quality materials, trendy designs, and perfect fit.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
} 