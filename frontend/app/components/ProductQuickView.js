'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  FiX,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCw,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductQuickView({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || 'Black'
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = isInWishlist(product.id);

  // Generate additional product images (using the same image for demo)
  const productImages = [
    product.image,
    product.image, // In real app, these would be different angles
    product.image,
    product.image,
  ];

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay */}
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='flex justify-between items-start mb-4'>
              <h2 className='text-2xl font-bold text-gray-900'>
                {product.name}
              </h2>
              <button
                onClick={onClose}
                className='text-gray-400 hover:text-gray-600 transition-colors'
              >
                <FiX className='w-6 h-6' />
              </button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Left side - Images */}
              <div className='space-y-4'>
                {/* Main image */}
                <div className='aspect-square bg-gray-100 rounded-lg overflow-hidden relative'>
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 50vw'
                  />
                </div>

                {/* Thumbnail images */}
                <div className='grid grid-cols-4 gap-2'>
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? 'border-purple-500'
                          : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className='object-cover'
                        sizes='(max-width: 1024px) 25vw, 12.5vw'
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
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-gray-600'>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className='flex items-center gap-3'>
                  <span className='text-3xl font-bold text-gray-900'>
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className='text-lg text-gray-500 line-through'>
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.badge === 'Bestseller'
                          ? 'bg-yellow-500 text-white'
                          : product.badge === 'New'
                            ? 'bg-green-500 text-white'
                            : product.badge === 'Sale'
                              ? 'bg-red-500 text-white'
                              : product.badge === 'Limited'
                                ? 'bg-purple-500 text-white'
                                : 'bg-gray-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed'>
                  {product.description}
                </p>

                {/* Color selection */}
                <div>
                  <h4 className='text-sm font-medium text-gray-900 mb-2'>
                    Color: {selectedColor}
                  </h4>
                  <div className='flex gap-2'>
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? 'border-purple-500 scale-110'
                            : 'border-gray-300'
                        }`}
                        style={{
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
                  <h4 className='text-sm font-medium text-gray-900 mb-2'>
                    Size: {selectedSize}
                  </h4>
                  <div className='grid grid-cols-4 gap-2'>
                    {product.size.map(size => (
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
                  <h4 className='text-sm font-medium text-gray-900 mb-2'>
                    Quantity
                  </h4>
                  <div className='flex items-center gap-3'>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50'
                    >
                      -
                    </button>
                    <span className='w-12 text-center font-medium'>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className='w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50'
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={handleAddToCart}
                    className='flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2'
                  >
                    <FiShoppingCart className='w-5 h-5' />
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
                    <FiHeart
                      className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
                    />
                  </button>
                </div>

                {/* Features */}
                <div className='grid grid-cols-1 gap-3 pt-4 border-t border-gray-200'>
                  <div className='flex items-center gap-3 text-sm text-gray-600'>
                    <FiTruck className='w-5 h-5 text-green-500' />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm text-gray-600'>
                    <FiShield className='w-5 h-5 text-blue-500' />
                    <span>30-day return policy</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm text-gray-600'>
                    <FiRefreshCw className='w-5 h-5 text-purple-500' />
                    <span>Easy exchanges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
