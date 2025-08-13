'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, getCartItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Only trigger scrolled state when actually scrolling down significantly
      // This prevents false triggers from page content positioning
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (isMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl shadow-lg border-b' : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'var(--color-bg-card)' : 'transparent',
        borderColor: isScrolled
          ? 'var(--color-border-secondary)'
          : 'transparent',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          {/* Brand Logo - Mobile First */}
          <div className='flex items-center space-x-2 sm:space-x-3'>
            <div className='relative'>
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden ${
                  isScrolled ? '' : 'backdrop-blur-sm border'
                }`}
                style={{
                  background: isScrolled
                    ? 'var(--gradient-primary)'
                    : 'var(--color-bg-card)',
                  borderColor: isScrolled
                    ? 'transparent'
                    : 'var(--color-border-primary)',
                }}
              >
                <Image
                  src='/logo.jpg'
                  alt='Starboy Apparels Logo'
                  width={40}
                  height={40}
                  className='w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300'
                />
              </div>
              <div
                className={`absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse drop-shadow-lg`}
                style={{
                  background: 'var(--color-accent-yellow)',
                }}
              ></div>
            </div>
            <Link href='/' className='group'>
              <h1
                className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'bg-clip-text' : 'drop-shadow-lg'
                }`}
                style={{
                  background: isScrolled
                    ? 'var(--gradient-text)'
                    : 'transparent',
                  color: isScrolled
                    ? 'transparent'
                    : 'var(--color-text-primary)',
                  WebkitBackgroundClip: isScrolled ? 'text' : 'initial',
                  WebkitTextFillColor: isScrolled ? 'transparent' : 'initial',
                }}
              >
                Starboy Apparels
              </h1>
              <p
                className={`text-xs -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  color: isScrolled
                    ? 'var(--color-text-muted)'
                    : 'var(--color-text-secondary)',
                }}
              >
                Bold Style
              </p>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className='hidden lg:flex items-center space-x-8'>
            <Link
              href='/shop'
              className={`relative font-medium group transition-colors duration-300 ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Shop
              <span
                className='absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                style={{ background: 'var(--gradient-primary)' }}
              ></span>
            </Link>
            <Link
              href='/collections'
              className={`relative font-medium group transition-colors duration-300 ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Collections
              <span
                className='absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                style={{ background: 'var(--gradient-primary)' }}
              ></span>
            </Link>
            <Link
              href='/about-contact'
              className={`relative font-medium group transition-colors duration-300 ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              About Us
              <span
                className='absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                style={{ background: 'var(--gradient-primary)' }}
              ></span>
            </Link>
            <Link
              href='/theme-demo'
              className={`relative font-medium group transition-colors duration-300 ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              Theme Demo
              <span
                className='absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                style={{ background: 'var(--gradient-primary)' }}
              ></span>
            </Link>
          </nav>

          {/* Action Buttons - Mobile First */}
          <div className='flex items-center space-x-3'>
            {/* Wishlist Icon */}
            <Link
              href='/wishlist'
              className={`relative p-2.5 transition-all duration-300 hover:scale-110 group ${
                isScrolled ? 'hover:text-red-500' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              <div className='relative'>
                <FiHeart className='w-5 h-5 group-hover:fill-current' />
                {wishlistItems.length > 0 && (
                  <span
                    className='absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce'
                    style={{
                      background: 'var(--color-accent-red)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {wishlistItems.length}
                  </span>
                )}
              </div>
            </Link>

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className={`relative p-2.5 transition-all duration-300 hover:scale-110 group ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
            >
              <div className='relative'>
                <FiShoppingCart className='w-5 h-5 group-hover:scale-110 transition-transform' />
                {getCartItemCount() > 0 && (
                  <span
                    className='absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse'
                    style={{
                      background: 'var(--color-primary-600)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {getCartItemCount()}
                  </span>
                )}
              </div>
            </button>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'hover:text-purple-600' : 'drop-shadow-lg'
              }`}
              style={{
                color: 'var(--color-text-secondary)',
              }}
              aria-label='Toggle mobile menu'
            >
              {isMenuOpen ? (
                <FiX className='w-6 h-6' />
              ) : (
                <FiMenu className='w-6 h-6' />
              )}
            </button>

            {/* Desktop CTA Button */}
            <Link
              href='/shop'
              className='hidden lg:block px-6 py-2.5 font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
              style={{
                background: 'var(--gradient-button)',
                color: 'var(--color-text-primary)',
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden mobile-menu transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div
            className='backdrop-blur-xl border-t rounded-b-2xl shadow-xl overflow-hidden'
            style={{
              background: 'var(--color-bg-card)',
              borderColor: 'var(--color-border-secondary)',
            }}
          >
            <div className='px-4 py-6 space-y-4'>
              {/* Mobile Navigation Links */}
              <div className='space-y-3'>
                <Link
                  href='/shop'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center px-4 py-3 rounded-xl transition-all duration-300 group'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <div
                    className='w-2 h-2 rounded-full mr-3 group-hover:scale-150 transition-transform'
                    style={{ background: 'var(--color-primary-600)' }}
                  ></div>
                  Shop
                </Link>
                <Link
                  href='/collections'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center px-4 py-3 rounded-xl transition-all duration-300 group'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <div
                    className='w-2 h-2 rounded-full mr-3 group-hover:scale-150 transition-transform'
                    style={{ background: 'var(--color-primary-600)' }}
                  ></div>
                  Collections
                </Link>
                <Link
                  href='/about-contact'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center px-4 py-3 rounded-xl transition-all duration-300 group'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <div
                    className='w-2 h-2 rounded-full mr-3 group-hover:scale-150 transition-transform'
                    style={{ background: 'var(--color-primary-600)' }}
                  ></div>
                  About Us
                </Link>
                <Link
                  href='/theme-demo'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center px-4 py-3 rounded-xl transition-all duration-300 group'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <div
                    className='w-2 h-2 rounded-full mr-3 group-hover:scale-150 transition-transform'
                    style={{ background: 'var(--color-primary-600)' }}
                  ></div>
                  Theme Demo
                </Link>
              </div>

              {/* Mobile CTA Section */}
              <div
                className='pt-4 border-t'
                style={{ borderColor: 'var(--color-border-secondary)' }}
              >
                <Link
                  href='/shop'
                  onClick={() => setIsMenuOpen(false)}
                  className='block w-full px-6 py-3 font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg'
                  style={{
                    background: 'var(--gradient-button)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Start Shopping
                </Link>
              </div>

              {/* Mobile Brand Info */}
              <div
                className='pt-4 border-t text-center'
                style={{ borderColor: 'var(--color-border-secondary)' }}
              >
                <p
                  className='text-sm'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Premium fashion for the modern trendsetter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
