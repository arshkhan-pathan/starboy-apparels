'use client';
import { FiX, FiShoppingCart, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function ShoppingCart() {
  const {
    items,
    isOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        {/* Background overlay */}
        <div
          className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          onClick={toggleCart}
        ></div>

        {/* Cart sidebar */}
        <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
          <div className='w-screen max-w-md'>
            <div className='h-full flex flex-col bg-white shadow-xl'>
              {/* Header */}
              <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h2 className='text-lg font-medium text-gray-900'>
                    Shopping Cart
                  </h2>
                  <button
                    onClick={toggleCart}
                    className='text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    <FiX className='w-6 h-6' />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className='text-center py-12'>
                    <FiShoppingCart className='mx-auto h-12 w-12 text-gray-400' />
                    <h3 className='mt-2 text-sm font-medium text-gray-900'>
                      Your cart is empty
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      Start shopping to add items to your cart
                    </p>
                    <div className='mt-6'>
                      <Link
                        href='/shop'
                        onClick={toggleCart}
                        className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700'
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className='flow-root'>
                    <ul className='-my-6 divide-y divide-gray-200'>
                      {items.map(item => (
                        <li key={item.cartId} className='py-6 flex'>
                          <div className='flex-shrink-0 w-24 h-24 relative'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className='object-cover rounded-md'
                              sizes='96px'
                            />
                          </div>

                          <div className='ml-4 flex-1 flex flex-col'>
                            <div>
                              <div className='flex justify-between text-base font-medium text-gray-900'>
                                <h3 className='text-sm'>{item.name}</h3>
                                <p className='ml-4'>
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                              <p className='mt-1 text-sm text-gray-500'>
                                {item.selectedColor} • {item.selectedSize}
                              </p>
                            </div>
                            <div className='flex-1 flex items-end justify-between text-sm'>
                              <div className='flex items-center gap-2'>
                                <span className='text-gray-500'>Qty:</span>
                                <div className='flex items-center border border-gray-300 rounded-md'>
                                  <button
                                    onClick={() =>
                                      updateQuantity(
                                        item.cartId,
                                        item.quantity - 1
                                      )
                                    }
                                    className='p-1 hover:bg-gray-100'
                                  >
                                    <FiMinus className='w-3 h-3' />
                                  </button>
                                  <span className='px-2 py-1 min-w-[2rem] text-center'>
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(
                                        item.cartId,
                                        item.quantity + 1
                                      )
                                    }
                                    className='p-1 hover:bg-gray-100'
                                  >
                                    <FiPlus className='w-3 h-3' />
                                  </button>
                                </div>
                              </div>

                              <button
                                type='button'
                                onClick={() => removeFromCart(item.cartId)}
                                className='text-purple-600 hover:text-purple-500 flex items-center gap-1'
                              >
                                <FiTrash2 className='w-4 h-4' />
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                  <div className='flex justify-between text-base font-medium text-gray-900 mb-4'>
                    <p>Subtotal</p>
                    <p>${getCartTotal().toFixed(2)}</p>
                  </div>
                  <p className='mt-0.5 text-sm text-gray-500'>
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className='mt-6 space-y-3'>
                    <button className='w-full bg-purple-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-purple-700 transition-colors'>
                      Checkout
                    </button>
                    <Link
                      href='/shop'
                      onClick={toggleCart}
                      className='w-full bg-gray-100 border border-transparent rounded-md py-3 px-4 text-base font-medium text-gray-900 hover:bg-gray-200 transition-colors text-center block'
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
