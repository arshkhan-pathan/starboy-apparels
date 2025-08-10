'use client'
import { useState } from 'react'
import { FiCheck, FiStar, FiTruck, FiShield, FiRefreshCw, FiHeart, FiUsers, FiAward, FiPackage, FiTrendingUp } from 'react-icons/fi'

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      icon: FiStar,
      title: "Premium Quality",
      description: "100% organic cotton and sustainable materials for ultimate comfort and durability.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      stats: "99.9% Satisfaction"
    },
    {
      icon: FiPackage,
      title: "Unique Designs",
      description: "Exclusive artwork and limited edition prints you won't find anywhere else in the world.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      stats: "500+ Unique Designs"
    },
    {
      icon: FiTruck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50 with worldwide express delivery and real-time tracking.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      stats: "2-3 Day Delivery"
    },
    {
      icon: FiShield,
      title: "Easy Returns",
      description: "30-day hassle-free returns and exchanges for your complete peace of mind.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      stats: "30-Day Returns"
    },
    {
      icon: FiUsers,
      title: "Community First",
      description: "Join our vibrant community of fashion enthusiasts and get exclusive member benefits.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      stats: "50K+ Members"
    },
    {
      icon: FiTrendingUp,
      title: "Trending Styles",
      description: "Stay ahead of fashion trends with our curated collections and style recommendations.",
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      stats: "Weekly Updates"
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <FiAward className="w-4 h-4 mr-2" />
            Why Choose Venus Apparels?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experience Fashion
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to providing you with the best fashion shopping experience, 
            from premium quality materials to exceptional customer service and innovative features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${feature.bgColor} rounded-3xl border ${feature.borderColor} hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Background gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center">
                    <FiCheck className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Style?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already discovered their perfect style with Venus Apparels
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span className="flex items-center">
                  Start Shopping Now
                  <FiTrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
            <FiHeart className="w-4 h-4 mr-2 text-pink-500" />
            Coming Soon: AI Size Recommendations, Virtual Try-On, Custom Design Tool
          </div>
        </div>
      </div>
    </section>
  )
} 