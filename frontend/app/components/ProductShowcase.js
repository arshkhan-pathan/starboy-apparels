'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'graphic', name: 'Graphic Tees', count: 45 },
    { id: 'plain', name: 'Plain', count: 32 },
    { id: 'vintage', name: 'Vintage', count: 28 },
    { id: 'limited', name: 'Limited Edition', count: 15 },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Urban Vibes Graphic Tee',
      price: 29.99,
      originalPrice: 39.99,
      image: '/api/placeholder/400/500',
      category: 'graphic',
      badge: 'Bestseller',
      colors: ['Black', 'White', 'Navy'],
    },
    {
      id: 2,
      name: 'Classic Cotton Crew Neck',
      price: 24.99,
      originalPrice: null,
      image: '/api/placeholder/400/500',
      category: 'plain',
      badge: 'New',
      colors: ['White', 'Black', 'Gray', 'Navy'],
    },
    {
      id: 3,
      name: 'Retro Wave Vintage Tee',
      price: 34.99,
      originalPrice: 44.99,
      image: '/api/placeholder/400/500',
      category: 'vintage',
      badge: 'Sale',
      colors: ['Olive', 'Brown', 'Cream'],
    },
    {
      id: 4,
      name: 'Limited Art Collection',
      price: 49.99,
      originalPrice: null,
      image: '/api/placeholder/400/500',
      category: 'limited',
      badge: 'Limited',
      colors: ['Black', 'White'],
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Featured Collections
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover our most popular t-shirt designs and trending styles. From
            classic basics to statement pieces, we have something for every
            style.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className='ml-2 text-sm opacity-75'>
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'
            >
              {/* Product Image */}
              <div className='relative aspect-[4/5] bg-gray-200 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>Product Image</span>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className='absolute top-3 left-3'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.badge === 'Bestseller'
                          ? 'bg-yellow-500 text-white'
                          : product.badge === 'New'
                            ? 'bg-green-500 text-white'
                            : product.badge === 'Sale'
                              ? 'bg-red-500 text-white'
                              : 'bg-purple-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                  <button className='w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className='p-6'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors'>
                  {product.name}
                </h3>

                {/* Price */}
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-lg font-bold text-gray-900'>
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className='text-sm text-gray-500 line-through'>
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Colors */}
                <div className='flex items-center gap-2 mb-4'>
                  <span className='text-sm text-gray-600'>Colors:</span>
                  <div className='flex gap-1'>
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className='w-4 h-4 rounded-full border border-gray-200'
                        style={{
                          backgroundColor: color.toLowerCase(),
                          opacity: color.toLowerCase() === 'white' ? 0.8 : 1,
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

                {/* Add to Cart Button */}
                <button className='w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-200 group-hover:bg-purple-600'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className='text-center'>
          <Link
            href='/shop'
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'
          >
            View All Products
            <svg
              className='ml-2 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
