'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiFilter,
  FiGrid,
  FiList,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiEye,
  FiChevronDown,
} from 'react-icons/fi';
import Footer from '../components/Footer';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Dummy collections data
  const collections = [
    {
      id: 'summer-essentials',
      name: 'Summer Essentials',
      description: 'Light, breathable pieces perfect for warm weather',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      productCount: 45,
      badge: 'New',
    },
    {
      id: 'urban-streetwear',
      name: 'Urban Streetwear',
      description: 'Contemporary street style with urban edge',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      productCount: 38,
      badge: 'Trending',
    },
    {
      id: 'elegant-evening',
      name: 'Elegant Evening',
      description: 'Sophisticated pieces for special occasions',
      image:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
      productCount: 22,
      badge: 'Limited',
    },
    {
      id: 'casual-comfort',
      name: 'Casual Comfort',
      description: 'Relaxed, comfortable everyday wear',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      productCount: 56,
      badge: 'Popular',
    },
    {
      id: 'athletic-active',
      name: 'Athletic & Active',
      description: 'Performance wear for active lifestyles',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      productCount: 31,
      badge: 'Hot',
    },
    {
      id: 'vintage-inspired',
      name: 'Vintage Inspired',
      description: 'Timeless classics with modern twists',
      image:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
      productCount: 28,
      badge: 'Classic',
    },
  ];

  // Dummy products data for featured items
  const featuredProducts = [
    {
      id: 1,
      name: 'Summer Breeze Maxi Dress',
      price: 89.99,
      originalPrice: 129.99,
      image:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 156,
      category: 'summer-essentials',
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Urban Street Hoodie',
      price: 64.99,
      originalPrice: 79.99,
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop',
      rating: 4.6,
      reviews: 89,
      category: 'urban-streetwear',
      badge: 'New',
    },
    {
      id: 3,
      name: 'Elegant Evening Gown',
      price: 199.99,
      originalPrice: 299.99,
      image:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 234,
      category: 'elegant-evening',
      badge: 'Limited',
    },
    {
      id: 4,
      name: 'Comfort Cotton Tee',
      price: 34.99,
      originalPrice: 44.99,
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop',
      rating: 4.7,
      reviews: 312,
      category: 'casual-comfort',
      badge: 'Popular',
    },
    {
      id: 5,
      name: 'Performance Leggings',
      price: 54.99,
      originalPrice: 69.99,
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      rating: 4.5,
      reviews: 178,
      category: 'athletic-active',
      badge: 'Hot',
    },
    {
      id: 6,
      name: 'Vintage Denim Jacket',
      price: 79.99,
      originalPrice: 99.99,
      image:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 145,
      category: 'vintage-inspired',
      badge: 'Classic',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'summer-essentials', name: 'Summer Essentials', count: 45 },
    { id: 'urban-streetwear', name: 'Urban Streetwear', count: 38 },
    { id: 'elegant-evening', name: 'Elegant Evening', count: 22 },
    { id: 'casual-comfort', name: 'Casual Comfort', count: 56 },
    { id: 'athletic-active', name: 'Athletic & Active', count: 31 },
    { id: 'vintage-inspired', name: 'Vintage Inspired', count: 28 },
  ];

  const filteredCollections =
    selectedCategory === 'all'
      ? collections
      : collections.filter(collection => collection.id === selectedCategory);

  return (
    <div
      className='min-h-screen'
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      {/* Hero Section */}
      <div
        className='text-white pt-20'
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>Collections</h1>
          <p
            className='text-xl md:text-2xl max-w-3xl mx-auto'
            style={{ color: 'var(--color-primary-100)' }}
          >
            Discover our curated fashion collections, each designed with passion
            and style
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div
        className='border-b sticky top-16 z-40'
        style={{
          background: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-secondary)',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
            {/* Category Filter */}
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <FiFilter
                  className='w-5 h-5'
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <span
                  className='text-sm font-medium'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Filter:
                </span>
              </div>
              <div className='flex flex-wrap gap-2'>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors`}
                    style={{
                      background:
                        selectedCategory === category.id
                          ? 'var(--color-primary-600)'
                          : 'var(--color-neutral-100)',
                      color:
                        selectedCategory === category.id
                          ? 'var(--color-text-primary)'
                          : 'var(--color-text-secondary)',
                    }}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className='flex items-center gap-4'>
              {/* Sort Dropdown */}
              <div className='relative'>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='appearance-none border rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:border-transparent'
                  style={{
                    background: 'var(--color-bg-primary)',
                    borderColor: 'var(--color-border-primary)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <option value='featured'>Featured</option>
                  <option value='newest'>Newest</option>
                  <option value='price-low'>Price: Low to High</option>
                  <option value='price-high'>Price: High to Low</option>
                  <option value='rating'>Highest Rated</option>
                </select>
                <FiChevronDown
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none'
                  style={{ color: 'var(--color-text-muted)' }}
                />
              </div>

              {/* View Mode Toggle */}
              <div
                className='flex items-center rounded-lg p-1'
                style={{ background: 'var(--color-neutral-100)' }}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors`}
                  style={{
                    background:
                      viewMode === 'grid'
                        ? 'var(--color-bg-primary)'
                        : 'transparent',
                    color:
                      viewMode === 'grid'
                        ? 'var(--color-primary-600)'
                        : 'var(--color-text-muted)',
                  }}
                >
                  <FiGrid className='w-5 h-5' />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors`}
                  style={{
                    background:
                      viewMode === 'list'
                        ? 'var(--color-bg-primary)'
                        : 'transparent',
                    color:
                      viewMode === 'list'
                        ? 'var(--color-primary-600)'
                        : 'var(--color-text-muted)',
                  }}
                >
                  <FiList className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredCollections.map(collection => (
              <div key={collection.id} className='group cursor-pointer'>
                <div
                  className='rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
                  style={{
                    background: 'var(--color-bg-card)',
                    borderColor: 'var(--color-border-primary)',
                  }}
                >
                  {/* Collection Image */}
                  <div className='relative aspect-[4/3] overflow-hidden'>
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-300'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                    {collection.badge && (
                      <div className='absolute top-4 right-4'>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            collection.badge === 'New'
                              ? 'bg-green-500 text-white'
                              : collection.badge === 'Trending'
                                ? 'bg-orange-500 text-white'
                                : collection.badge === 'Limited'
                                  ? 'bg-red-500 text-white'
                                  : collection.badge === 'Popular'
                                    ? 'bg-blue-500 text-white'
                                    : collection.badge === 'Hot'
                                      ? 'bg-pink-500 text-white'
                                      : 'bg-purple-500 text-white'
                          }`}
                        >
                          {collection.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Collection Info */}
                  <div className='p-6'>
                    <h3
                      className='text-xl font-bold mb-2 transition-colors'
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {collection.name}
                    </h3>
                    <p
                      className='mb-4 leading-relaxed'
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {collection.description}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {collection.productCount} products
                      </span>
                      <Link
                        href={`/shop?collection=${collection.id}`}
                        className='font-medium text-sm group-hover:underline'
                        style={{ color: 'var(--color-primary-600)' }}
                      >
                        View Collection →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className='py-16'
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2
              className='text-3xl md:text-4xl font-bold mb-4'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Featured Products
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Handpicked items from our most popular collections
            </p>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className={`rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-primary)',
                }}
              >
                {/* Product Image */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === 'list'
                      ? 'w-48 h-48 flex-shrink-0'
                      : 'aspect-square'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-300'
                    sizes={
                      viewMode === 'list'
                        ? '192px'
                        : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                  />
                  {product.badge && (
                    <div className='absolute top-3 left-3'>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.badge === 'Bestseller'
                            ? 'bg-yellow-500 text-white'
                            : product.badge === 'New'
                              ? 'bg-green-500 text-white'
                              : product.badge === 'Limited'
                                ? 'bg-red-500 text-white'
                                : product.badge === 'Popular'
                                  ? 'bg-blue-500 text-white'
                                  : product.badge === 'Hot'
                                    ? 'bg-pink-500 text-white'
                                    : 'bg-purple-500 text-white'
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg'>
                      <FiHeart className='w-5 h-5' />
                    </button>
                    <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg'>
                      <FiEye className='w-5 h-5' />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className='mb-3'>
                    <h3
                      className='font-semibold mb-2 transition-colors'
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {product.name}
                    </h3>
                    <div className='flex items-center gap-2 mb-2'>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-current'
                                : ''
                            }`}
                            style={{
                              color:
                                i < Math.floor(product.rating)
                                  ? 'var(--color-accent-yellow)'
                                  : 'var(--color-text-muted)',
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <span
                        className='text-lg font-bold'
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span
                          className='text-sm line-through'
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      className='w-10 h-10 rounded-full flex items-center justify-center transition-colors'
                      style={{
                        background: 'var(--color-primary-600)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <FiShoppingCart className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className='py-20 text-white'
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p
            className='text-xl mb-8 max-w-2xl mx-auto'
            style={{ color: 'var(--color-primary-100)' }}
          >
            Explore our full shop or get in touch with our style experts for
            personalized recommendations
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/shop'
              className='px-8 py-4 rounded-lg font-medium transition-colors text-lg'
              style={{
                background: 'var(--color-bg-card)',
                color: 'var(--color-primary-600)',
              }}
            >
              Browse All Products
            </Link>
            <Link
              href='/about-contact'
              className='border-2 px-8 py-4 rounded-lg font-medium transition-colors text-lg'
              style={{
                borderColor: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
