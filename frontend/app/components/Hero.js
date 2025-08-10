'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState('all')

  const featuredProducts = [
    {
      id: 1,
      name: "Urban Vibes Graphic Tee",
      price: 29.99,
      originalPrice: 39.99,
      badge: "Bestseller",
      colors: ["Black", "White", "Navy"]
    },
    {
      id: 2,
      name: "Classic Cotton Crew Neck",
      price: 24.99,
      originalPrice: null,
      badge: "New",
      colors: ["White", "Black", "Gray", "Navy"]
    },
    {
      id: 3,
      name: "Retro Wave Vintage Tee",
      price: 34.99,
      originalPrice: 44.99,
      badge: "Sale",
      colors: ["Olive", "Brown", "Cream"]
    },
    {
      id: 4,
      name: "Limited Art Collection",
      price: 49.99,
      originalPrice: null,
      badge: "Limited",
      colors: ["Black", "White"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'graphic', name: 'Graphic', count: 45 },
    { id: 'plain', name: 'Plain', count: 32 },
    { id: 'vintage', name: 'Vintage', count: 28 }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Express Your Style with
              <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Venus Appareals
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover our exclusive collection of premium t-shirts that speak your language. 
              Quality materials, unique designs, and perfect fit for the modern trendsetter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link href="/shop" className="btn-primary text-lg px-8 py-4">
                Shop New Arrivals
              </Link>
              <Link href="/shop" className="btn-secondary text-lg px-8 py-4">
                Explore Collections
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Products */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
            {/* Section Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Featured Products
              </h2>
              <p className="text-gray-200 text-sm">
                Shop our most popular designs
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Product Image</span>
                    </div>
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                          product.badge === 'New' ? 'bg-green-500 text-white' :
                          product.badge === 'Sale' ? 'bg-red-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-xs font-medium hover:bg-purple-700 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Products CTA */}
            <div className="text-center mt-6">
              <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                View All Products
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 