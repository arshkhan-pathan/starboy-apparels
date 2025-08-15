'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section
      className='hero-section py-16 sm:py-20'
      style={{ background: 'var(--gradient-primary)' }}
    >
      <div className='max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center'>
        {/* Background Pattern */}
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className='absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-multiply filter blur-xl animate-blob'
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          ></div>
          <div
            className='absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          ></div>
        </div>

        <div className='relative z-10'>
          {/* Icon */}
          <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8'>
            <svg
              className='w-10 h-10 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </div>

          {/* Content */}
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Stay in the Loop
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto text-white/90'>
            Be the first to know about new collections, exclusive offers, and
            fashion tips. Join our community of style enthusiasts!
          </p>

          {/* Benefits */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
            <div className='flex items-center justify-center space-x-2 text-white/90'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>Early Access</span>
            </div>
            <div className='flex items-center justify-center space-x-2 text-white/90'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                />
              </svg>
              <span>Exclusive Deals</span>
            </div>
            <div className='flex items-center justify-center space-x-2 text-white/90'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
              <span>Style Tips</span>
            </div>
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  required
                  className='flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-600'
                />
                <button
                  type='submit'
                  className='px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'
                >
                  Subscribe
                </button>
              </div>
              <p className='text-sm text-purple-200 mt-3'>
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className='max-w-md mx-auto'>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30'>
                <div className='flex items-center justify-center space-x-2 text-white'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='font-semibold'>
                    Successfully subscribed!
                  </span>
                </div>
                <p className='text-purple-100 text-center mt-2'>
                  Welcome to the VIbe family! 🎉
                </p>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className='mt-12'>
            <p className='text-purple-200 text-sm mb-4'>
              Join 25,000+ fashion enthusiasts
            </p>
            <div className='flex justify-center space-x-6 text-purple-200'>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-sm'>Free shipping</span>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-sm'>Easy returns</span>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-sm'>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
