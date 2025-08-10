'use client'
import { useState, useEffect } from 'react'
import { FiEye, FiHeart, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function RecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState([])
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
    setRecentlyViewed(viewed)
  }, [])

  const addToRecentlyViewed = (product) => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
    const filtered = viewed.filter(item => item.id !== product.id)
    const newViewed = [product, ...filtered].slice(0, 8) // Keep only 8 most recent
    localStorage.setItem('recentlyViewed', JSON.stringify(newViewed))
    setRecentlyViewed(newViewed)
  }

  const handleQuickAdd = (product) => {
    // Default to first available size and color
    addToCart(product, product.size[0], product.colors[0], 1)
  }

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  if (recentlyViewed.length === 0) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recently Viewed</h2>
          <p className="text-gray-600">Continue browsing products you've shown interest in</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-colors"
                      title="Quick Add to Cart"
                    >
                      <FiShoppingCart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleWishlistToggle(product)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isInWishlist(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
                      }`}
                      title={isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <FiHeart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      product.badge === 'Limited' ? 'bg-purple-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Quick Add Button */}
                <button 
                  onClick={() => handleQuickAdd(product)}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg text-xs font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-1"
                >
                  <FiShoppingCart className="w-3 h-3" />
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 