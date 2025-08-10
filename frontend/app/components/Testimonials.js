export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      comment: "The quality of these t-shirts is incredible! I love how soft and comfortable they are. The designs are unique and the fit is perfect. Highly recommend!",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Software Engineer",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      comment: "Fast shipping and excellent customer service. The t-shirts exceeded my expectations. Great value for money and the material feels premium.",
      verified: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Student",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      comment: "I'm obsessed with their limited edition collection! The artwork is amazing and the fit is spot on. Will definitely be ordering more.",
      verified: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Manager",
      avatar: "/api/placeholder/60/60",
      rating: 4,
      comment: "Great selection of styles and colors. The customer service team was very helpful with sizing questions. Quality product overall.",
      verified: true
    }
  ]

  const stats = [
    { number: "4.9", label: "Average Rating", icon: "⭐" },
    { number: "50K+", label: "Happy Customers", icon: "😊" },
    { number: "98%", label: "Satisfaction Rate", icon: "❤️" },
    { number: "24/7", label: "Customer Support", icon: "🛟" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing customers 
            have to say about their VIbe experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {testimonial.verified && (
                  <span className="ml-2 text-sm text-green-600 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Purchase
                  </span>
                )}
              </div>

              {/* Comment */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            Join thousands of satisfied customers
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Ready to experience the VIbe difference?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Start Shopping
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 