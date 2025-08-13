'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiFilter, FiGrid, FiList, FiHeart, FiShoppingCart, FiStar, FiEye, FiChevronDown } from 'react-icons/fi'

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')

  // Dummy collections data
  const collections = [
    {
      id: 'summer-essentials',
      name: 'Summer Essentials',
      description: 'Light, breathable pieces perfect for warm weather',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      productCount: 45,
      badge: 'New'
    },
    {
      id: 'urban-streetwear',
      name: 'Urban Streetwear',
      description: 'Contemporary street style with urban edge',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      productCount: 38,
      badge: 'Trending'
    },
    {
      id: 'elegant-evening',
      name: 'Elegant Evening',
      description: 'Sophisticated pieces for special occasions',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
      productCount: 22,
      badge: 'Limited'
    },
    {
      id: 'casual-comfort',
      name: 'Casual Comfort',
      description: 'Relaxed, comfortable everyday wear',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      productCount: 56,
      badge: 'Popular'
    },
    {
      id: 'athletic-active',
      name: 'Athletic & Active',
      description: 'Performance wear for active lifestyles',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      productCount: 31,
      badge: 'Hot'
    },
    {
      id: 'vintage-inspired',
      name: 'Vintage Inspired',
      description: 'Timeless classics with modern twists',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
      productCount: 28,
      badge: 'Classic'
    }
  ]

  // Dummy products data for featured items
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Breeze Maxi Dress",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "summer-essentials",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Urban Street Hoodie",
      price: 64.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "urban-streetwear",
      badge: "New"
    },
    {
      id: 3,
      name: "Elegant Evening Gown",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 234,
      category: "elegant-evening",
      badge: "Limited"
    },
    {
      id: 4,
      name: "Comfort Cotton Tee",
      price: 34.99,
      originalPrice: 44.99,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 312,
      category: "casual-comfort",
      badge: "Popular"
    },
    {
      id: 5,
      name: "Performance Leggings",
      price: 54.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      rating: 4.5,
      reviews: 178,
      category: "athletic-active",
      badge: "Hot"
    },
    {
      id: 6,
      name: "Vintage Denim Jacket",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 145,
      category: "vintage-inspired",
      badge: "Classic"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'summer-essentials', name: 'Summer Essentials', count: 45 },
    { id: 'urban-streetwear', name: 'Urban Streetwear', count: 38 },
    { id: 'elegant-evening', name: 'Elegant Evening', count: 22 },
    { id: 'casual-comfort', name: 'Casual Comfort', count: 56 },
    { id: 'athletic-active', name: 'Athletic & Active', count: 31 },
    { id: 'vintage-inspired', name: 'Vintage Inspired', count: 28 }
  ]

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Collections</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Discover our curated fashion collections, each designed with passion and style
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FiFilter className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  {/* Collection Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {collection.badge && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          collection.badge === 'New' ? 'bg-green-500 text-white' :
                          collection.badge === 'Trending' ? 'bg-orange-500 text-white' :
                          collection.badge === 'Limited' ? 'bg-red-500 text-white' :
                          collection.badge === 'Popular' ? 'bg-blue-500 text-white' :
                          collection.badge === 'Hot' ? 'bg-pink-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {collection.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Collection Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {collection.productCount} products
                      </span>
                      <Link
                        href={`/shop?collection=${collection.id}`}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm group-hover:underline"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked items from our most popular collections
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                {/* Product Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                        product.badge === 'New' ? 'bg-green-500 text-white' :
                        product.badge === 'Limited' ? 'bg-red-500 text-white' :
                        product.badge === 'Popular' ? 'bg-blue-500 text-white' :
                        product.badge === 'Hot' ? 'bg-pink-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg">
                      <FiHeart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg">
                      <FiEye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-3">
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                      <FiShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Explore our full shop or get in touch with our style experts for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
              Browse All Products
            </Link>
            <Link href="/about-contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 