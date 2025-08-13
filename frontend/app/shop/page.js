'use client'
import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { FiSearch, FiGrid, FiList, FiHeart, FiShoppingCart, FiStar, FiEye, FiChevronDown } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ProductQuickView from '../components/ProductQuickView'
import RecentlyViewed from '../components/RecentlyViewed'
import ShoppingCart from '../components/ShoppingCart'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSize, setSelectedSize] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  // Dummy product data with images
  const dummyProducts = useMemo(() => [
    {
      id: 1,
      name: "Urban Vibes Graphic Tee",
      price: 29.99,
      originalPrice: 39.99,
      category: "graphic",
      size: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      description: "Trendy graphic t-shirt with urban street style design"
    },
    {
      id: 2,
      name: "Classic Cotton Crew Neck",
      price: 24.99,
      originalPrice: null,
      category: "plain",
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Gray", "Navy", "Olive"],
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 89,
      badge: "New",
      description: "Premium cotton crew neck for everyday comfort"
    },
    {
      id: 3,
      name: "Retro Wave Vintage Tee",
      price: 34.99,
      originalPrice: 44.99,
      category: "vintage",
      size: ["S", "M", "L"],
      colors: ["Olive", "Brown", "Cream"],
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 67,
      badge: "Sale",
      description: "Vintage-inspired t-shirt with retro wave patterns"
    },
    {
      id: 4,
      name: "Limited Art Collection",
      price: 49.99,
      originalPrice: null,
      category: "limited",
      size: ["M", "L", "XL"],
      colors: ["Black", "White"],
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
      rating: 5.0,
      reviews: 23,
      badge: "Limited",
      description: "Exclusive limited edition artistic t-shirt"
    },
    {
      id: 5,
      name: "Sport Performance Tee",
      price: 32.99,
      originalPrice: 42.99,
      category: "sport",
      size: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green", "Black"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "Sale",
      description: "High-performance athletic t-shirt for active lifestyle"
    },
    {
      id: 6,
      name: "Minimalist Design Tee",
      price: 27.99,
      originalPrice: null,
      category: "minimalist",
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Gray"],
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
      rating: 4.5,
      reviews: 78,
      badge: null,
      description: "Clean and simple design for minimalist fashion lovers"
    },
    {
      id: 7,
      name: "Street Art Collection",
      price: 39.99,
      originalPrice: null,
      category: "graphic",
      size: ["S", "M", "L"],
      colors: ["Black", "White", "Red"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 92,
      badge: "Popular",
      description: "Bold street art inspired graphic t-shirts"
    },
    {
      id: 8,
      name: "Premium Organic Tee",
      price: 44.99,
      originalPrice: null,
      category: "premium",
      size: ["S", "M", "L", "XL"],
      colors: ["Natural", "White", "Ecru"],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 45,
      badge: "Premium",
              description: "100% organic cotton premium quality t-shirt"
      }
    ], [])

  const categories = [
    { id: 'all', name: 'All Products', count: dummyProducts.length },
    { id: 'graphic', name: 'Graphic Tees', count: dummyProducts.filter(p => p.category === 'graphic').length },
    { id: 'plain', name: 'Plain Tees', count: dummyProducts.filter(p => p.category === 'plain').length },
    { id: 'vintage', name: 'Vintage', count: dummyProducts.filter(p => p.category === 'vintage').length },
    { id: 'limited', name: 'Limited Edition', count: dummyProducts.filter(p => p.category === 'limited').length },
    { id: 'sport', name: 'Sport', count: dummyProducts.filter(p => p.category === 'sport').length },
    { id: 'minimalist', name: 'Minimalist', count: dummyProducts.filter(p => p.category === 'minimalist').length },
    { id: 'premium', name: 'Premium', count: dummyProducts.filter(p => p.category === 'premium').length }
  ]

  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  const colors = ['all', 'Black', 'White', 'Navy', 'Gray', 'Olive', 'Brown', 'Cream', 'Red', 'Blue', 'Green', 'Natural', 'Ecru']

  useEffect(() => {
    setProducts(dummyProducts)
    setFilteredProducts(dummyProducts)
  }, [dummyProducts])

  // Reset filters to default state when component mounts
  useEffect(() => {
    // Reset all filters to their default values
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedSize('all')
    setSelectedColor('all')
    setPriceRange([0, 200])
    setSortBy('featured')
  }, [])

  const addToRecentlyViewed = (product) => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
    const filtered = viewed.filter(item => item.id !== product.id)
    const newViewed = [product, ...filtered].slice(0, 8)
    localStorage.setItem('recentlyViewed', JSON.stringify(newViewed))
  }

  const handleQuickView = (product) => {
    setQuickViewProduct(product)
    setIsQuickViewOpen(true)
    addToRecentlyViewed(product)
  }

  const handleAddToCart = (product) => {
    // Default to first available size and color
    addToCart(product, product.size[0], product.colors[0], 1)
    addToRecentlyViewed(product)
  }

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  useEffect(() => {
    // Only apply filters if any are actually set (not default values)
    if (searchTerm || selectedCategory !== 'all' || selectedSize !== 'all' || selectedColor !== 'all' || sortBy !== 'featured') {
      filterProducts()
    } else {
      // Show all products by default
      setFilteredProducts(products)
    }
  }, [searchTerm, selectedCategory, selectedSize, selectedColor, priceRange, sortBy, products])

  const filterProducts = () => {
    let filtered = [...products]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Size filter
    if (selectedSize !== 'all') {
      filtered = filtered.filter(product => product.size.includes(selectedSize))
    }

    // Color filter
    if (selectedColor !== 'all') {
      filtered = filtered.filter(product => product.colors.includes(selectedColor))
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // featured - keep original order
        break
    }

    setFilteredProducts(filtered)
  }

  const clearFilters = useCallback(() => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedSize('all')
    setSelectedColor('all')
    setPriceRange([0, 200])
    setSortBy('featured')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header with proper spacing */}
      <div className="pt-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-b border-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">Shop All T-Shirts</h1>
          <p className="text-purple-100">Discover our complete collection of premium t-shirts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 rounded-lg px-4 py-3 flex items-center justify-between font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md"
          >
            <span>Filters & Search</span>
            <FiChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMobileFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className={`lg:w-80 order-last lg:order-first ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {category.name} ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Color</label>
                <div className="grid grid-cols-2 gap-2">
                  {colors.map((color) => (
                    <label key={color} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 order-first lg:order-last">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <FiGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <FiList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
              }>
                {filteredProducts.map((product) => (
                  <div key={product.id} className={viewMode === 'grid' 
                    ? 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow'
                    : 'bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex space-x-4'
                  }>
                    {/* Product Image */}
                    <div className={viewMode === 'grid' 
                      ? 'relative aspect-square bg-gray-100 group'
                      : 'w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg relative group'
                    }>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={viewMode === 'grid' 
                          ? 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                          : 'w-full h-full object-cover rounded-lg'
                        }
                      />
                      
                      {/* Quick Actions Overlay */}
                      {viewMode === 'grid' && (
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button
                              onClick={() => handleQuickView(product)}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-colors"
                              title="Quick View"
                            >
                              <FiEye className="w-4 h-4" />
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
                      )}
                      
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                            product.badge === 'New' ? 'bg-green-500 text-white' :
                            product.badge === 'Sale' ? 'bg-red-500 text-white' :
                            product.badge === 'Limited' ? 'bg-purple-500 text-white' :
                            product.badge === 'Popular' ? 'bg-blue-500 text-white' :
                            'bg-gray-500 text-white'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className={viewMode === 'grid' ? 'p-4' : 'flex-1'}>
                      <div className="flex justify-between items-start mb-2">
                                              <Link href={`/shop/${product.id}`} className="font-semibold text-gray-900 text-sm lg:text-base line-clamp-2 hover:text-purple-600 transition-colors">
                        {product.name}
                      </Link>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <FiHeart className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>

                      {/* Colors */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-gray-600">Colors:</span>
                        <div className="flex gap-1">
                          {product.colors.slice(0, 3).map((color, index) => (
                            <div
                              key={index}
                              className="w-3 h-3 rounded-full border border-gray-200"
                              style={{
                                backgroundColor: color.toLowerCase(),
                                opacity: color.toLowerCase() === 'white' ? 0.8 : 1
                              }}
                              title={color}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <FiShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                        <Link 
                          href={`/shop/${product.id}`}
                          className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-purple-500 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RecentlyViewed />
      </div>

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false)
          setQuickViewProduct(null)
        }}
      />
      
      {/* Shopping Cart */}
      <ShoppingCart />
    </div>
  )
} 