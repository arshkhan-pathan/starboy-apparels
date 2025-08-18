'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiX,
  FiCheck,
  FiPackage,
  FiMinus,
  FiDroplet,
  FiMapPin,
  FiUser,
  FiThumbsUp,
  FiMessageCircle,
  FiTrendingUp,
} from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import Link from 'next/link';
import ShoppingCart from '../../components/ShoppingCart';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Dummy product data with more details
  const product = {
    id: parseInt(productId),
    name: 'Urban Vibes Graphic Tee',
    price: 29.99,
    originalPrice: 39.99,
    category: 'graphic',
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Olive'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop',
    ],
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    description:
      'Trendy graphic t-shirt with urban street style design. Made from premium cotton for ultimate comfort and style. Perfect for casual wear, street fashion, and everyday looks.',
    features: [
      '100% Premium Cotton',
      'Breathable fabric',
      'Modern fit',
      'Machine washable',
      'Sustainably sourced',
    ],
    specifications: {
      Material: '100% Cotton',
      Weight: '180 GSM',
      Fit: 'Regular',
      Care: 'Machine wash cold',
      Origin: 'Made in USA',
    },
  };

  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      date: '2024-01-15',
      title: 'Perfect fit and quality!',
      comment:
        'I absolutely love this t-shirt! The fit is perfect and the material feels so soft. The graphic design is exactly what I was looking for. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      user: 'Mike R.',
      rating: 4,
      date: '2024-01-10',
      title: 'Great quality, runs a bit large',
      comment:
        "The quality is excellent and the design is really cool. I ordered a medium but it runs a bit large, so I'd suggest sizing down if you prefer a tighter fit.",
      verified: true,
    },
    {
      id: 3,
      user: 'Emma L.',
      rating: 5,
      date: '2024-01-08',
      title: 'Love the urban vibe!',
      comment:
        'This t-shirt has such a cool urban aesthetic. The fabric is comfortable and the print quality is amazing. Will definitely buy more from this collection!',
      verified: true,
    },
    {
      id: 4,
      user: 'David K.',
      rating: 4,
      date: '2024-01-05',
      title: 'Good value for money',
      comment:
        'Solid t-shirt with good quality material. The design is trendy and the fit is comfortable. Shipping was fast too. Would buy again!',
      verified: true,
    },
    {
      id: 5,
      user: 'Lisa P.',
      rating: 5,
      date: '2024-01-02',
      title: 'Exceeded my expectations!',
      comment:
        "I'm really impressed with this t-shirt. The cotton is so soft and the fit is perfect. The graphic design is even better in person. Love it!",
      verified: true,
    },
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = isInWishlist(product.id);

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className='min-h-screen' style={{ background: 'var(--color-bg-primary)' }}>
      {/* Breadcrumb */}
      <div className='border-b pt-20' style={{
        background: 'var(--color-bg-card)',
        borderColor: 'var(--color-border-primary)'
      }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <nav className='flex items-center space-x-2 text-sm' style={{ color: 'var(--color-text-muted)' }}>
            <Link
              href='/shop'
              className='transition-colors'
              style={{ 
                color: 'var(--color-text-secondary)',
                ':hover': { color: 'var(--color-primary-600)' }
              }}
            >
              Shop
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-primary)' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left side - Product Images */}
          <div className='space-y-3'>
            {/* Main image */}
            <div className='w-full max-w-lg aspect-square rounded-lg overflow-hidden relative' style={{ background: 'var(--color-neutral-100)' }}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className='object-cover cursor-pointer'
                onClick={() => setShowModal(true)}
                sizes='(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 400px'
              />
            </div>

            {/* Thumbnail images */}
            <div className='flex gap-4'>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors relative flex-shrink-0 ${
                    selectedImage === index ? '' : ''
                  }`}
                  style={{
                    background: 'var(--color-neutral-100)',
                    borderColor: selectedImage === index
                      ? 'var(--color-primary-500)'
                      : 'transparent'
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className='object-cover'
                    sizes='64px'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className='space-y-6'>
            {/* Product header */}
            <div>
              <div className='flex items-center gap-3 mb-2'>
                {product.badge && (
                  <span
                    className='px-3 py-1 rounded-full text-sm font-medium'
                    style={{
                      background: product.badge === 'Bestseller'
                        ? 'var(--color-accent-yellow)'
                        : product.badge === 'New'
                          ? 'var(--color-accent-green)'
                          : product.badge === 'Sale'
                            ? 'var(--color-accent-red)'
                            : product.badge === 'Limited'
                              ? 'var(--color-primary-600)'
                              : 'var(--color-neutral-600)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    {product.badge}
                  </span>
                )}
                <span
                  className='text-sm'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  #{product.id}
                </span>
              </div>

              <h1
                className='text-3xl font-bold mb-2'
                style={{ color: 'var(--color-text-primary)' }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating) ? 'fill-current' : ''
                      }`}
                      style={{
                        color: i < Math.floor(averageRating)
                          ? 'var(--color-accent-yellow)'
                          : 'var(--color-text-muted)'
                      }}
                    />
                  ))}
                </div>
                <span
                  className='text-sm'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
                <button
                  onClick={() =>
                    document
                      .getElementById('reviews')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                  className='text-sm underline transition-colors'
                  style={{ 
                    color: 'var(--color-primary-600)',
                    ':hover': { color: 'var(--color-primary-700)' }
                  }}
                >
                  View all reviews
                </button>
              </div>
            </div>

            {/* Price */}
            <div className='flex items-center gap-3'>
              <span
                className='text-4xl font-bold'
                style={{ color: 'var(--color-text-primary)' }}
              >
                ${product.price}
              </span>
              {product.originalPrice && (
                <span
                  className='text-xl line-through'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className='text-sm font-medium' style={{ color: 'var(--color-accent-green)' }}>
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className='leading-relaxed text-lg'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3
                className='text-lg font-semibold mb-3'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Features
              </h3>
              <ul className='space-y-2'>
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2'
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <div className='w-2 h-2 rounded-full' style={{ background: 'var(--color-primary-500)' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color selection */}
            <div>
              <h4
                className='text-sm font-medium mb-3'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Color: {selectedColor}
              </h4>
              <div className='flex gap-3'>
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'scale-110' : ''
                    }`}
                    style={{
                      borderColor: selectedColor === color
                        ? 'var(--color-primary-500)'
                        : 'var(--color-border-primary)',
                      backgroundColor: color.toLowerCase(),
                      opacity: color.toLowerCase() === 'white' ? 0.8 : 1,
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <h4
                className='text-sm font-medium mb-3'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Size: {selectedSize}
              </h4>
              <div className='grid grid-cols-6 gap-2'>
                {product.size.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      color:
                        selectedSize === size
                          ? 'var(--color-primary-700)'
                          : 'var(--color-text-secondary)',
                      borderColor:
                        selectedSize === size
                          ? 'var(--color-primary-500)'
                          : 'var(--color-border-primary)',
                      background:
                        selectedSize === size
                          ? 'var(--color-primary-50)'
                          : 'var(--color-bg-primary)',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4
                className='text-sm font-medium mb-3'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Quantity
              </h4>
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='w-10 h-10 rounded-lg border flex items-center justify-center transition-colors'
                  style={{
                    borderColor: 'var(--color-border-primary)',
                    background: 'var(--color-bg-primary)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  -
                </button>
                <span
                  className='w-16 text-center font-medium text-lg'
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='w-10 h-10 rounded-lg border flex items-center justify-center transition-colors'
                  style={{
                    borderColor: 'var(--color-border-primary)',
                    background: 'var(--color-bg-primary)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className='flex gap-4'>
              <button
                onClick={handleAddToCart}
                className='flex-1 py-4 px-8 rounded-lg font-medium transition-colors flex items-center justify-center gap-3 text-lg'
                style={{
                  background: 'var(--gradient-button)',
                  color: 'var(--color-text-primary)'
                }}
              >
                <FiShoppingCart className='w-6 h-6' />
                Add to Cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className='w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-colors'
                style={{
                  borderColor: isWishlisted
                    ? 'var(--color-accent-red)'
                    : 'var(--color-border-primary)',
                  background: isWishlisted
                    ? 'var(--color-accent-red)'
                    : 'var(--color-bg-primary)',
                  color: isWishlisted
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)'
                }}
              >
                <FiHeart
                  className={`w-7 h-7 ${isWishlisted ? 'fill-current' : ''}`}
                />
              </button>
            </div>

            {/* Features */}
            <div className='grid grid-cols-1 gap-4 pt-6 border-t' style={{ borderColor: 'var(--color-border-primary)' }}>
              <div className='flex items-center gap-3 text-sm' style={{ color: 'var(--color-text-secondary)' }}>
                <FiTruck className='w-5 h-5' style={{ color: 'var(--color-accent-green)' }} />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className='flex items-center gap-3 text-sm' style={{ color: 'var(--color-text-secondary)' }}>
                <FiShield className='w-5 h-5' style={{ color: 'var(--color-accent-blue)' }} />
                <span>30-day return policy</span>
              </div>
              <div className='flex items-center gap-3 text-sm' style={{ color: 'var(--color-text-secondary)' }}>
                <FiRefreshCw className='w-5 h-5' style={{ color: 'var(--color-primary-500)' }} />
                <span>Easy exchanges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className='mt-16'>
          <div className='flex items-center gap-3 mb-6'>
            <FiPackage className='w-6 h-6' style={{ color: 'var(--color-primary-600)' }} />
            <h2 className='text-2xl font-bold' style={{ color: 'var(--color-text-primary)' }}>
              Product Specifications
            </h2>
          </div>
          <div className='rounded-xl shadow-sm border overflow-hidden' style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)'
          }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
              {Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div
                    key={key}
                    className='p-6 border-b border-r'
                    style={{
                      borderColor: 'var(--color-border-primary)',
                      borderRightWidth: index % 2 === 0 ? '1px' : '0px',
                      borderBottomWidth: index >= Object.keys(product.specifications).length - (Object.keys(product.specifications).length % 2) ? '0px' : '1px'
                    }}
                  >
                    <div className='flex items-start gap-3'>
                      <div className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0' style={{ background: 'var(--color-primary-50)' }}>
                        {key === 'Material' && (
                          <FiPackage className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                        )}
                        {key === 'Weight' && (
                          <FiMinus className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                        )}
                        {key === 'Fit' && (
                          <FiUser className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                        )}
                        {key === 'Care' && (
                          <FiDroplet className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                        )}
                        {key === 'Origin' && (
                          <FiMapPin className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                        )}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h4 className='text-sm font-medium uppercase tracking-wide mb-1' style={{ color: 'var(--color-text-muted)' }}>
                          {key}
                        </h4>
                        <p className='text-lg font-semibold' style={{ color: 'var(--color-text-primary)' }}>
                          {value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div id='reviews' className='mt-16'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
            <div className='flex items-center gap-3'>
              <FiMessageCircle className='w-6 h-6' style={{ color: 'var(--color-primary-600)' }} />
              <h2 className='text-2xl font-bold' style={{ color: 'var(--color-text-primary)' }}>
                Customer Reviews
              </h2>
            </div>
            <div className='text-center sm:text-right'>
              <div className='text-3xl font-bold' style={{ color: 'var(--color-text-primary)' }}>
                {averageRating.toFixed(1)}
              </div>
              <div className='flex items-center justify-center sm:justify-end gap-1 mb-1'>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(averageRating) ? 'fill-current' : ''
                    }`}
                    style={{
                      color: i < Math.floor(averageRating)
                        ? 'var(--color-accent-yellow)'
                        : 'var(--color-text-muted)'
                    }}
                  />
                ))}
              </div>
              <div className='text-sm' style={{ color: 'var(--color-text-secondary)' }}>
                {reviews.length} reviews
              </div>
            </div>
          </div>

          {/* Rating breakdown */}
          <div className='rounded-xl shadow-sm border p-6 mb-8' style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)'
          }}>
            <div className='flex items-center gap-2 mb-6'>
              <FiTrendingUp className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
              <h3 className='text-lg font-semibold' style={{ color: 'var(--color-text-primary)' }}>
                Rating Breakdown
              </h3>
            </div>
            <div className='space-y-4'>
              {[5, 4, 3, 2, 1].map(rating => {
                const count = ratingCounts[rating] || 0;
                const percentage = (count / reviews.length) * 100;
                return (
                  <div key={rating} className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 w-20'>
                      <span className='text-sm font-medium' style={{ color: 'var(--color-text-primary)' }}>
                        {rating}
                      </span>
                      <FiStar className='w-4 h-4 fill-current' style={{ color: 'var(--color-accent-yellow)' }} />
                    </div>
                    <div className='flex-1 rounded-full h-3 overflow-hidden' style={{ background: 'var(--color-neutral-200)' }}>
                      <div
                        className='h-3 rounded-full transition-all duration-500'
                        style={{ 
                          width: `${percentage}%`,
                          background: 'var(--gradient-primary)'
                        }}
                      ></div>
                    </div>
                    <div className='w-16 text-right'>
                      <span className='text-sm font-medium' style={{ color: 'var(--color-text-primary)' }}>
                        {count}
                      </span>
                      <span className='text-xs ml-1' style={{ color: 'var(--color-text-muted)' }}>
                        ({percentage.toFixed(0)}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reviews list */}
          <div className='space-y-6'>
            {reviews.map(review => (
              <div
                key={review.id}
                className='rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow'
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-primary)'
                }}
              >
                <div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-4'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='w-10 h-10 rounded-full flex items-center justify-center' style={{ background: 'var(--color-primary-50)' }}>
                        <FiUser className='w-5 h-5' style={{ color: 'var(--color-primary-600)' }} />
                      </div>
                      <div>
                        <h4 className='font-semibold' style={{ color: 'var(--color-text-primary)' }}>
                          {review.user}
                        </h4>
                        <div className='flex items-center gap-2'>
                          {review.verified && (
                                                      <span className='px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1' style={{
                            background: 'var(--color-accent-green)',
                            color: 'var(--color-text-primary)'
                          }}>
                            <FiCheck className='w-3 h-3' />
                            Verified
                          </span>
                          )}
                          <span className='text-sm' style={{ color: 'var(--color-text-muted)' }}>
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-current' : ''
                          }`}
                          style={{
                            color: i < review.rating
                              ? 'var(--color-accent-yellow)'
                              : 'var(--color-text-muted)'
                          }}
                        />
                      ))}
                    </div>
                    <span className='text-sm font-medium ml-2' style={{ color: 'var(--color-text-primary)' }}>
                      {review.rating}/5
                    </span>
                  </div>
                </div>

                <h5 className='font-semibold mb-3 text-lg' style={{ color: 'var(--color-text-primary)' }}>
                  {review.title}
                </h5>
                <p className='leading-relaxed' style={{ color: 'var(--color-text-secondary)' }}>
                  {review.comment}
                </p>

                {/* Review actions */}
                <div className='flex items-center gap-4 mt-4 pt-4 border-t' style={{ borderColor: 'var(--color-border-primary)' }}>
                  <button className='flex items-center gap-2 text-sm transition-colors' style={{ color: 'var(--color-text-muted)' }}>
                    <FiThumbsUp className='w-4 h-4' />
                    Helpful
                  </button>
                  <button className='flex items-center gap-2 text-sm transition-colors' style={{ color: 'var(--color-text-muted)' }}>
                    <FiMessageCircle className='w-4 h-4' />
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
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            {/* Background overlay */}
            <div
              className='fixed inset-0 transition-opacity'
              style={{ background: 'var(--color-neutral-600)', opacity: 0.75 }}
              onClick={() => setShowModal(false)}
            ></div>

            {/* Modal */}
            <div className='inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full' style={{ background: 'var(--color-bg-card)' }}>
              <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4' style={{ background: 'var(--color-bg-card)' }}>
                <div className='flex justify-between items-start mb-4'>
                  <h2 className='text-2xl font-bold' style={{ color: 'var(--color-text-primary)' }}>
                    {product.name}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className='transition-colors'
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <FiX className='w-6 h-6' />
                  </button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {/* Left side - Images */}
                  <div className='space-y-4'>
                    {/* Main image */}
                    <div className='w-full max-w-md aspect-square rounded-lg overflow-hidden relative' style={{ background: 'var(--color-neutral-100)' }}>
                      <Image
                        src={product.images[selectedImage]}
                        alt={product.name}
                        fill
                        className='object-cover'
                        sizes='(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 400px'
                      />
                    </div>

                    {/* Thumbnail images */}
                    <div className='grid grid-cols-4 gap-2'>
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className='w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors relative'
                          style={{
                            background: 'var(--color-neutral-100)',
                            borderColor: selectedImage === index
                              ? 'var(--color-primary-500)'
                              : 'transparent'
                          }}
                        >
                          <Image
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            fill
                            className='object-cover'
                            sizes='64px'
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Product details */}
                  <div className='space-y-6'>
                    {/* Rating and reviews */}
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(averageRating) ? 'fill-current' : ''
                            }`}
                            style={{
                              color: i < Math.floor(averageRating)
                                ? 'var(--color-accent-yellow)'
                                : 'var(--color-text-muted)'
                            }}
                          />
                        ))}
                      </div>
                      <span className='text-sm' style={{ color: 'var(--color-text-secondary)' }}>
                        {averageRating.toFixed(1)} ({reviews.length} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className='flex items-center gap-3'>
                      <span className='text-3xl font-bold' style={{ color: 'var(--color-text-primary)' }}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className='text-lg line-through' style={{ color: 'var(--color-text-muted)' }}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className='leading-relaxed' style={{ color: 'var(--color-text-secondary)' }}>
                      {product.description}
                    </p>

                    {/* Color selection */}
                    <div>
                      <h4 className='text-sm font-medium mb-2' style={{ color: 'var(--color-text-primary)' }}>
                        Color: {selectedColor}
                      </h4>
                      <div className='flex gap-2'>
                        {product.colors.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              selectedColor === color ? 'scale-110' : ''
                            }`}
                            style={{
                              backgroundColor: color.toLowerCase(),
                              opacity: color.toLowerCase() === 'white' ? 0.8 : 1,
                              borderColor: selectedColor === color
                                ? 'var(--color-primary-500)'
                                : 'var(--color-border-primary)'
                            }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size selection */}
                    <div>
                      <h4 className='text-sm font-medium mb-2' style={{ color: 'var(--color-text-primary)' }}>
                        Size: {selectedSize}
                      </h4>
                      <div className='grid grid-cols-4 gap-2'>
                        {product.size.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className='px-3 py-2 text-sm font-medium rounded-lg border transition-colors'
                            style={{
                              color: selectedSize === size
                                ? 'var(--color-primary-700)'
                                : 'var(--color-text-secondary)',
                              borderColor: selectedSize === size
                                ? 'var(--color-primary-500)'
                                : 'var(--color-border-primary)',
                              background: selectedSize === size
                                ? 'var(--color-primary-50)'
                                : 'var(--color-bg-primary)'
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div>
                      <h4 className='text-sm font-medium mb-2' style={{ color: 'var(--color-text-primary)' }}>
                        Quantity
                      </h4>
                      <div className='flex items-center gap-3'>
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className='w-8 h-8 rounded-lg border flex items-center justify-center transition-colors'
                          style={{
                            borderColor: 'var(--color-border-primary)',
                            background: 'var(--color-bg-primary)',
                            color: 'var(--color-text-secondary)'
                          }}
                        >
                          -
                        </button>
                        <span className='w-12 text-center font-medium' style={{ color: 'var(--color-text-primary)' }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className='w-8 h-8 rounded-lg border flex items-center justify-center transition-colors'
                          style={{
                            borderColor: 'var(--color-border-primary)',
                            background: 'var(--color-bg-primary)',
                            color: 'var(--color-text-secondary)'
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className='flex gap-3'>
                      <button
                        onClick={() => {
                          handleAddToCart();
                          setShowModal(false);
                        }}
                        className='flex-1 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'
                        style={{
                          background: 'var(--gradient-button)',
                          color: 'var(--color-text-primary)'
                        }}
                      >
                        <FiShoppingCart className='w-5 h-5' />
                        Add to Cart
                      </button>
                      <button
                        onClick={handleWishlistToggle}
                        className='w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors'
                        style={{
                          borderColor: isWishlisted
                            ? 'var(--color-accent-red)'
                            : 'var(--color-border-primary)',
                          background: isWishlisted
                            ? 'var(--color-accent-red)'
                            : 'var(--color-bg-primary)',
                          color: isWishlisted
                            ? 'var(--color-text-primary)'
                            : 'var(--color-text-secondary)'
                        }}
                      >
                        <FiHeart
                          className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
                        />
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
  );
}
