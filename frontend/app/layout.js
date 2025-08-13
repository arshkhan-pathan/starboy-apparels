import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Starboy Apparels - Bold Style & Premium Fashion | Express Your Unique Style',
  description:
    'Discover our exclusive collection of premium fashion with bold, confident designs. High-quality materials, unique artwork, and perfect fit for the modern trendsetter.',
  keywords:
    'fashion, clothing, premium fashion, bold style, trendy clothing, online store, fashion store, Starboy apparels, modern style, unique designs',
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
    title: 'Starboy Apparels - Bold Style & Premium Fashion',
    description:
      'Discover our exclusive collection of premium fashion with bold, confident designs. High-quality materials, unique artwork, and perfect fit.',
    url: 'https://starboy-apparels.com',
    siteName: 'Starboy Apparels Store',
    images: [
      {
        url: '/logo-large.svg',
        width: 1200,
        height: 630,
        alt: 'Starboy Apparels - Bold Style Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starboy Apparels - Bold Style & Premium Fashion',
    description:
      'Discover our exclusive collection of premium fashion with bold, confident designs. High-quality materials, unique artwork, and perfect fit.',
    images: ['/logo-large.svg'],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' sizes='180x180' href='/logo-large.svg' />
        <link rel='icon' type='image/svg+xml' sizes='32x32' href='/logo.svg' />
        <link rel='icon' type='image/svg+xml' sizes='16x16' href='/logo.svg' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#FF8C00' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <Header />
              {children}
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
