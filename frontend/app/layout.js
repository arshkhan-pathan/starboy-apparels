import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Starboy Apparels - Premium Fashion Store | Trendsetting Style for Everyone',
  description: 'Discover our exclusive collection of premium fashion. High-quality materials, trendy designs, and perfect fit. Shop the latest fashion trends with fast shipping and easy returns.',
  keywords: 'fashion, clothing, premium fashion, trendy clothing, online store, fashion store, Starboy apparels, modern style',
  authors: [{ name: 'Starboy Apparels Team' }],
  creator: 'Starboy Apparels',
  publisher: 'Starboy Apparels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://starboy-apparels.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Starboy Apparels - Premium Fashion Store',
    description: 'Discover our exclusive collection of premium fashion. High-quality materials, trendy designs, and perfect fit.',
    url: 'https://starboy-apparels.com',
    siteName: 'Starboy Apparels Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Starboy Apparels Fashion Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starboy Apparels - Premium Fashion Store',
    description: 'Discover our exclusive collection of premium fashion. High-quality materials, trendy designs, and perfect fit.',
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