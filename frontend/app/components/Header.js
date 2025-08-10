'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getCartItemCount } = useCart()
  const { items: wishlistItems } = useWishlist()

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Venus Appareals
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Shop
            </Link>
            <a href="#collections" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Collections
            </a>
            <Link href="/about-contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              About & Contact
            </Link>
          </nav>

          {/* CTA Button and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
            
            {/* Wishlist Icon */}
            <Link href="/wishlist" className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <FiHeart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <FiShoppingCart className="w-6 h-6" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
                Shop
              </Link>
              <a href="#collections" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
                Collections
              </a>
              <Link href="/about-contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
                About & Contact
              </Link>
              <div className="pt-2">
                <Link href="/shop" className="btn-primary w-full block text-center">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 