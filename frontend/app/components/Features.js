'use client';
import {
  FiCheck,
  FiStar,
  FiTruck,
  FiShield,
  FiHeart,
  FiUsers,
  FiAward,
  FiPackage,
  FiTrendingUp,
} from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: FiStar,
      title: 'Premium Quality',
      description:
        '100% organic cotton and sustainable materials for ultimate comfort and durability.',
      color: 'var(--color-accent-yellow)',
      bgColor: 'rgba(251, 191, 36, 0.1)',
      borderColor: 'rgba(251, 191, 36, 0.3)',
      stats: '99.9% Satisfaction',
    },
    {
      icon: FiPackage,
      title: 'Unique Designs',
      description:
        "Exclusive artwork and limited edition prints you won't find anywhere else in the world.",
      color: 'var(--color-primary-400)',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      stats: '500+ Unique Designs',
    },
    {
      icon: FiTruck,
      title: 'Fast Shipping',
      description:
        'Free shipping on orders over $50 with worldwide express delivery and real-time tracking.',
      color: 'var(--color-accent-blue)',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      stats: '2-3 Day Delivery',
    },
    {
      icon: FiShield,
      title: 'Easy Returns',
      description:
        '30-day hassle-free returns and exchanges for your complete peace of mind.',
      color: 'var(--color-accent-green)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      stats: '30-Day Returns',
    },
    {
      icon: FiUsers,
      title: 'Community First',
      description:
        'Join our vibrant community of fashion enthusiasts and get exclusive member benefits.',
      color: 'var(--color-secondary-400)',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      stats: '50K+ Members',
    },
    {
      icon: FiTrendingUp,
      title: 'Trending Styles',
      description:
        'Stay ahead of fashion trends with our curated collections and style recommendations.',
      color: 'var(--color-accent-red)',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      stats: 'Weekly Updates',
    },
  ];

  return (
    <section
      className='hero-section relative py-16 sm:py-24 overflow-hidden'
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full filter blur-3xl'
          style={{ background: 'var(--color-primary-200)' }}
        ></div>
        <div
          className='absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full filter blur-3xl'
          style={{ background: 'var(--color-secondary-200)' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full filter blur-3xl'
          style={{
            background: 'var(--gradient-secondary)',
          }}
        ></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <div
            className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 theme-badge'
            style={{
              background: 'var(--color-primary-100)',
              color: 'var(--color-primary-800)',
            }}
          >
            <FiAward className='w-4 h-4 mr-2' />
            Why Choose Starboy Apparels?
          </div>

          <h2
            className='text-4xl md:text-5xl font-bold mb-6 leading-tight'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Experience Fashion
            <span className='block text-gradient'>Like Never Before</span>
          </h2>

          <p
            className='text-xl max-w-3xl mx-auto leading-relaxed'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            We&apos;re committed to providing you with the best fashion shopping
            experience, from premium quality materials to exceptional customer
            service and innovative features.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group relative p-8 rounded-3xl border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden'
              style={{
                background: feature.bgColor,
                borderColor: feature.borderColor,
              }}
            >
              {/* Background gradient overlay on hover */}
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500'
                style={{
                  background: feature.color,
                }}
              ></div>

              {/* Icon */}
              <div
                className='relative w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg'
                style={{
                  background: feature.color,
                }}
              >
                <feature.icon className='w-8 h-8' />
              </div>

              {/* Content */}
              <div className='relative'>
                <h3
                  className='text-xl font-bold mb-4 transition-colors'
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className='leading-relaxed mb-6'
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {feature.description}
                </p>

                {/* Stats */}
                <div className='flex items-center justify-between'>
                  <span
                    className='text-sm font-semibold px-3 py-1 rounded-full'
                    style={{
                      color: 'var(--color-text-muted)',
                      background: 'var(--color-bg-card)',
                    }}
                  >
                    {feature.stats}
                  </span>
                  <div
                    className='w-8 h-8 rounded-full flex items-center justify-center'
                    style={{ background: 'var(--color-bg-card)' }}
                  >
                    <FiCheck
                      className='w-4 h-4'
                      style={{ color: 'var(--color-accent-green)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className='absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500'
                style={{
                  background: feature.color,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className='relative rounded-3xl p-12 text-center overflow-hidden'
          style={{ background: 'var(--gradient-primary)' }}
        >
          {/* Background pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-full h-full theme-pattern'></div>
          </div>

          <div className='relative z-10'>
            <h3
              className='text-3xl md:text-4xl font-bold mb-6'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ready to Transform Your Style?
            </h3>
            <p
              className='text-xl mb-8 max-w-2xl mx-auto'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Join thousands of satisfied customers who have already discovered
              their perfect style with Starboy Apparels
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button
                className='group px-8 py-4 font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl'
                style={{
                  background: 'var(--color-bg-primary)',
                  color: 'var(--color-primary-600)',
                }}
              >
                <span className='flex items-center'>
                  Start Shopping Now
                  <FiTrendingUp className='ml-2 group-hover:translate-x-1 transition-transform' />
                </span>
              </button>

              <button
                className='px-8 py-4 border-2 font-semibold rounded-2xl transition-all duration-300'
                style={{
                  borderColor: 'var(--color-border-primary)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className='text-center mt-20'>
          <div
            className='inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border'
            style={{
              background: 'var(--color-primary-100)',
              color: 'var(--color-primary-800)',
              borderColor: 'var(--color-primary-200)',
            }}
          >
            <FiHeart
              className='w-4 h-4 mr-2'
              style={{ color: 'var(--color-secondary-500)' }}
            />
            Coming Soon: AI Size Recommendations, Virtual Try-On, Custom Design
            Tool
          </div>
        </div>
      </div>
    </section>
  );
}
