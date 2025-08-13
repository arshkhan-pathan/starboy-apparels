'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { FiHeart, FiShoppingCart, FiStar, FiTruck, FiShield, FiRefreshCw, FiX, FiCheck, FiPackage, FiMinus, FiDroplet, FiMapPin, FiUser, FiThumbsUp, FiMessageCircle, FiTrendingUp } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import Link from 'next/link'
import ShoppingCart from '../../components/ShoppingCart'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id
  
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  // Dummy product data with more details
  const product = {
    id: parseInt(productId),
    name: "Urban Vibes Graphic Tee",
    price: 29.99,
    originalPrice: 39.99,
    category: "graphic",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    description: "Trendy graphic t-shirt with urban street style design. Made from premium cotton for ultimate comfort and style. Perfect for casual wear, street fashion, and everyday looks.",
    features: [
      "100% Premium Cotton",
      "Breathable fabric",
      "Modern fit",
      "Machine washable",
      "Sustainably sourced"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Weight": "180 GSM",
      "Fit": "Regular",
      "Care": "Machine wash cold",
      "Origin": "Made in USA"
    }
  }

  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Perfect fit and quality!",
      comment: "I absolutely love this t-shirt! The fit is perfect and the material feels so soft. The graphic design is exactly what I was looking for. Highly recommend!",
      verified: true
    },
    {
      id: 2,
      user: "Mike R.",
      rating: 4,
      date: "2024-01-10",
      title: "Great quality, runs a bit large",
      comment: "The quality is excellent and the design is really cool. I ordered a medium but it runs a bit large, so I'd suggest sizing down if you prefer a tighter fit.",
      verified: true
    },
    {
      id: 3,
      user: "Emma L.",
      rating: 5,
      date: "2024-01-08",
      title: "Love the urban vibe!",
      comment: "This t-shirt has such a cool urban aesthetic. The fabric is comfortable and the print quality is amazing. Will definitely buy more from this collection!",
      verified: true
    },
    {
      id: 4,
      user: "David K.",
      rating: 4,
      date: "2024-01-05",
      title: "Good value for money",
      comment: "Solid t-shirt with good quality material. The design is trendy and the fit is comfortable. Shipping was fast too. Would buy again!",
      verified: true
    },
    {
      id: 5,
      user: "Lisa P.",
      rating: 5,
      date: "2024-01-02",
      title: "Exceeded my expectations!",
      comment: "I'm really impressed with this t-shirt. The cotton is so soft and the fit is perfect. The graphic design is even better in person. Love it!",
      verified: true
    }
  ]

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity)
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const isWishlisted = isInWishlist(product.id)

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/shop" className="hover:text-purple-600 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left side - Product Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setShowModal(true)}
              />
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6">
            {/* Product header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {product.badge && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                    product.badge === 'New' ? 'bg-green-500 text-white' :
                    product.badge === 'Sale' ? 'bg-red-500 text-white' :
                    product.badge === 'Limited' ? 'bg-purple-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <span className="text-sm text-gray-500">#{product.id}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
                <button 
                  onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-purple-600 hover:text-purple-700 underline"
                >
                  View all reviews
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="text-sm text-green-600 font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color selection */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor}</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-purple-500 scale-110' : 'border-gray-300'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      opacity: color.toLowerCase() === 'white' ? 0.8 : 1
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Size: {selectedSize}</h4>
              <div className="grid grid-cols-6 gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Quantity</h4>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-purple-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <FiShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                <FiHeart className={`w-7 h-7 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiTruck className="w-5 h-5 text-green-500" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiShield className="w-5 h-5 text-blue-500" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiRefreshCw className="w-5 h-5 text-purple-500" />
                <span>Easy exchanges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <FiPackage className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Product Specifications</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={key} className={`p-6 border-b border-r border-gray-100 ${
                  index % 2 === 0 ? 'md:border-r' : ''
                } ${index >= Object.keys(product.specifications).length - (Object.keys(product.specifications).length % 2) ? 'md:border-b-0' : ''}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {key === 'Material' && <FiPackage className="w-5 h-5 text-purple-600" />}
                      {key === 'Weight' && <FiMinus className="w-5 h-5 text-purple-600" />}
                      {key === 'Fit' && <FiUser className="w-5 h-5 text-purple-600" />}
                      {key === 'Care' && <FiDroplet className="w-5 h-5 text-purple-600" />}
                      {key === 'Origin' && <FiMapPin className="w-5 h-5 text-purple-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{key}</h4>
                      <p className="text-lg font-semibold text-gray-900">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <FiMessageCircle className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center sm:justify-end gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(averageRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">{reviews.length} reviews</div>
            </div>
          </div>

          {/* Rating breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <FiTrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Rating Breakdown</h3>
            </div>
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingCounts[rating] || 0
                const percentage = (count / reviews.length) * 100
                return (
                  <div key={rating} className="flex items-center gap-4">
                    <div className="flex items-center gap-2 w-20">
                      <span className="text-sm font-medium text-gray-700">{rating}</span>
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-sm font-medium text-gray-700">{count}</span>
                      <span className="text-xs text-gray-500 ml-1">({percentage.toFixed(0)}%)</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reviews list */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <FiUser className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.user}</h4>
                        <div className="flex items-center gap-2">
                          {review.verified && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium flex items-center gap-1">
                              <FiCheck className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700 ml-2">{review.rating}/5</span>
                  </div>
                </div>
                
                <h5 className="font-semibold text-gray-900 mb-3 text-lg">{review.title}</h5>
                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                
                {/* Review actions */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                    <FiThumbsUp className="w-4 h-4" />
                    Helpful
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                    <FiMessageCircle className="w-4 h-4" />
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowModal(false)}
            ></div>

            {/* Modal */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side - Images */}
                  <div className="space-y-4">
                    {/* Main image */}
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Thumbnail images */}
                    <div className="grid grid-cols-4 gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                            selectedImage === index ? 'border-purple-500' : 'border-transparent'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Product details */}
                  <div className="space-y-6">
                    {/* Rating and reviews */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(averageRating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {averageRating.toFixed(1)} ({reviews.length} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    {/* Color selection */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Color: {selectedColor}</h4>
                      <div className="flex gap-2">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              selectedColor === color ? 'border-purple-500 scale-110' : 'border-gray-300'
                            }`}
                            style={{
                              backgroundColor: color.toLowerCase(),
                              opacity: color.toLowerCase() === 'white' ? 0.8 : 1
                            }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size selection */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Size: {selectedSize}</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {product.size.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                              selectedSize === size
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Quantity</h4>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          handleAddToCart()
                          setShowModal(false)
                        }}
                        className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FiShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                      <button
                        onClick={handleWishlistToggle}
                        className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors ${
                          isWishlisted
                            ? 'border-red-500 bg-red-50 text-red-500'
                            : 'border-gray-300 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Shopping Cart */}
      <ShoppingCart />
    </div>
  )
} 