'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiHeart,
  FiShoppingCart,
  FiArrowRight,
  FiPlay,
} from 'react-icons/fi';

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isTouching, setIsTouching] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: 'Urban Vibes Graphic Tee',
      price: 29.99,
      originalPrice: 39.99,
      badge: 'Bestseller',
      colors: ['Black', 'White', 'Navy'],
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      rating: 4.8,
      reviews: 124,
      category: 'graphic',
    },
    {
      id: 2,
      name: 'Classic Cotton Crew Neck',
      price: 24.99,
      originalPrice: null,
      badge: 'New',
      colors: ['White', 'Black', 'Gray', 'Navy'],
      image:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
      rating: 4.6,
      reviews: 89,
      category: 'plain',
    },
    {
      id: 3,
      name: 'Retro Wave Vintage Tee',
      price: 34.99,
      originalPrice: 44.99,
      badge: 'Sale',
      colors: ['Olive', 'Brown', 'Cream'],
      image:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'vintage',
    },
    {
      id: 4,
      name: 'Limited Art Collection',
      price: 49.99,
      originalPrice: null,
      badge: 'Limited',
      colors: ['Black', 'White'],
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
      rating: 4.9,
      reviews: 78,
      category: 'graphic',
    },
    {
      id: 5,
      name: 'Street Style Hoodie',
      price: 64.99,
      originalPrice: 79.99,
      badge: 'Trending',
      colors: ['Gray', 'Black', 'Navy'],
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop',
      rating: 4.5,
      reviews: 203,
      category: 'urban',
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'graphic', name: 'Graphic', count: 45 },
    { id: 'plain', name: 'Plain', count: 32 },
    { id: 'vintage', name: 'Vintage', count: 28 },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? featuredProducts
      : featuredProducts.filter(product => product.category === activeCategory);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);

      // Pause carousel on mobile by default
      if (mobile && isPlaying) {
        setIsPlaying(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isPlaying]);

  // Auto-play carousel (disabled on mobile)
  useEffect(() => {
    if (!isPlaying || isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % filteredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, filteredProducts.length, isMobile]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + filteredProducts.length) % filteredProducts.length
    );
  };

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsTouching(true);
  };

  const onTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsTouching(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setSwipeDirection('left');
      nextSlide();
    }
    if (isRightSwipe) {
      setSwipeDirection('right');
      prevSlide();
    }

    // Clear swipe direction indicator after animation
    setTimeout(() => setSwipeDirection(null), 500);
  };

  return (
    <section className='hero-section relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 sm:pt-20'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse'></div>
        <div className='absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-0 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000'></div>

        {/* Floating particles */}
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce'></div>
        <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300/50 rounded-full animate-bounce animation-delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-bounce animation-delay-2000'></div>
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center min-h-screen py-16 sm:py-20'>
          {/* Left Side - Hero Content */}
          <div className='text-center lg:text-left'>
            <div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6'>
              <Image
                src='/logo.svg'
                alt='Starboy Apparels Logo'
                width={20}
                height={20}
                className='w-4 h-4 mr-2'
              />
              <span className='text-white/90 text-sm font-medium'>
                New Collection Available
              </span>
            </div>

            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
              Express Your
              <span className='block text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse'>
                Unique Style
              </span>
            </h1>

            <p className='text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Discover our exclusive collection of premium fashion that speaks
              your language. Quality materials, unique designs, and perfect fit
              for the modern trendsetter.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12'>
              <Link
                href='/shop'
                className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'
              >
                <span className='relative z-10 flex items-center'>
                  Shop New Arrivals
                  <FiArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity'></div>
              </Link>

              {/* Play/Pause button - hidden on mobile */}
              {!isMobile ? (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className='group flex items-center px-6 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300'
                >
                  <FiPlay
                    className={`mr-2 transition-all ${isPlaying ? 'text-green-400' : 'text-white'}`}
                  />
                  {isPlaying ? 'Pause' : 'Play'} Carousel
                </button>
              ) : (
                <div className='px-6 py-4 border-2 border-white/20 text-white/70 text-center rounded-2xl'>
                  <span className='text-sm'>Swipe to browse products</span>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0'>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                  500+
                </div>
                <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>
                  Unique Designs
                </div>
              </div>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                  50K+
                </div>
                <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>
                  Happy Customers
                </div>
              </div>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                  24/7
                </div>
                <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Products Carousel */}
          <div className='relative'>
            {/* Section Header */}
            <div className='text-center mb-8'>
              <h2 className='text-3xl lg:text-4xl font-bold text-white mb-3'>
                Featured Products
              </h2>
              <p className='text-gray-300 text-lg'>
                Shop our most popular designs
              </p>
            </div>

            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Carousel Container */}
            <div className='relative bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 overflow-hidden'>
              {/* Swipe Direction Indicator - Mobile Only */}
              {isMobile && swipeDirection && (
                <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-300 ${
                      swipeDirection === 'left'
                        ? 'animate-slide-left'
                        : 'animate-slide-right'
                    }`}
                  >
                    {swipeDirection === 'left' ? '← Next' : '→ Previous'}
                  </div>
                </div>
              )}
              <div
                className='relative overflow-hidden rounded-2xl'
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Products Container */}
                <div
                  className={`flex transition-transform duration-700 ease-out select-none touch-pan-y ${
                    isMobile && isTouching ? 'scale-[0.98]' : 'scale-100'
                  }`}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {filteredProducts.map(product => (
                    <div key={product.id} className='w-full flex-shrink-0'>
                      <div className='group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2'>
                        {/* Product Image */}
                        <div className='relative aspect-[4/5] overflow-hidden'>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className='object-cover group-hover:scale-110 transition-transform duration-700'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />

                          {/* Badge */}
                          {product.badge && (
                            <div className='absolute top-4 left-4'>
                              <span
                                className={`px-3 py-1.5 rounded-full text-sm font-bold shadow-lg ${
                                  product.badge === 'Bestseller'
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                                    : product.badge === 'New'
                                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                                      : product.badge === 'Sale'
                                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                                        : product.badge === 'Limited'
                                          ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                                          : 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white'
                                }`}
                              >
                                {product.badge}
                              </span>
                            </div>
                          )}

                          {/* Quick Actions */}
                          <div className='absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                            <button className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg hover:scale-110 transition-all'>
                              <FiHeart className='w-5 h-5' />
                            </button>
                            <button className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg hover:scale-110 transition-all'>
                              <FiShoppingCart className='w-5 h-5' />
                            </button>
                          </div>

                          {/* Rating */}
                          <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg'>
                            <FiStar className='w-4 h-4 text-yellow-400 fill-current' />
                            <span className='text-sm font-semibold text-gray-900'>
                              {product.rating}
                            </span>
                            <span className='text-xs text-gray-600'>
                              ({product.reviews})
                            </span>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className='p-6'>
                          <h3 className='font-bold text-gray-900 text-lg mb-3 group-hover:text-purple-600 transition-colors line-clamp-2'>
                            {product.name}
                          </h3>

                          {/* Colors */}
                          <div className='flex items-center gap-2 mb-4'>
                            <span className='text-sm text-gray-600'>
                              Colors:
                            </span>
                            <div className='flex gap-2'>
                              {product.colors.slice(0, 3).map((color, idx) => (
                                <div
                                  key={idx}
                                  className='w-4 h-4 rounded-full border-2 border-gray-200'
                                  style={{
                                    backgroundColor: color.toLowerCase(),
                                  }}
                                  title={color}
                                />
                              ))}
                              {product.colors.length > 3 && (
                                <span className='text-xs text-gray-500'>
                                  +{product.colors.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Price */}
                          <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-2'>
                              <span className='text-2xl font-bold text-gray-900'>
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className='text-lg text-gray-500 line-through'>
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            {product.originalPrice && (
                              <span className='px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full'>
                                {Math.round(
                                  ((product.originalPrice - product.price) /
                                    product.originalPrice) *
                                    100
                                )}
                                % OFF
                              </span>
                            )}
                          </div>

                          {/* Add to Cart Button */}
                          <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl text-sm font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100'
                >
                  <FiChevronLeft className='w-6 h-6' />
                </button>

                <button
                  onClick={nextSlide}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100'
                >
                  <FiChevronRight className='w-6 h-6' />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className='flex justify-center mt-6 gap-2'>
                {filteredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Swipe Instructions */}
              {isMobile && (
                <div className='text-center mt-4'>
                  <p className='text-white/60 text-sm'>
                    💡 Swipe left or right to browse products
                  </p>
                </div>
              )}

              {/* View All Products CTA */}
              <div className='text-center mt-8'>
                <Link
                  href='/shop'
                  className='group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl'
                >
                  View All Products
                  <FiArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-6 border-2 border-white/50 border-t-white rounded-full animate-spin'></div>
      </div>
    </section>
  );
}
