'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiHeart,
  FiUsers,
  FiAward,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
} from 'react-icons/fi';

export default function AboutContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>About Us</h1>
          <p className='text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto'>
            Discover our story, mission, and get in touch with our team
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left side - Content */}
            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                  Our Story
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                  Founded in 2020, Starboy Apparels began with a simple mission:
                  to create fashion that empowers individuals to express their
                  unique style while maintaining the highest standards of
                  quality and sustainability.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  What started as a small boutique in downtown has grown into a
                  beloved destination for fashion-forward individuals who
                  appreciate both style and substance. Our collections blend
                  contemporary trends with timeless elegance, ensuring every
                  piece tells a story.
                </p>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-600 mb-2'>
                    10K+
                  </div>
                  <div className='text-sm text-gray-600'>Happy Customers</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-600 mb-2'>
                    500+
                  </div>
                  <div className='text-sm text-gray-600'>Products</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-600 mb-2'>
                    4.9
                  </div>
                  <div className='text-sm text-gray-600'>Rating</div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className='relative'>
              <div className='aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center'>
                  <div className='text-center'>
                    <FiHeart className='w-24 h-24 text-purple-500 mx-auto mb-4' />
                    <p className='text-purple-600 font-semibold text-lg'>
                      Fashion with Heart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Our Values
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The principles that guide everything we do
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-8 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FiHeart className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Passion for Fashion
              </h3>
              <p className='text-gray-600'>
                We pour our hearts into every design, ensuring each piece
                reflects our love for fashion and creativity.
              </p>
            </div>

            <div className='text-center p-8 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FiAward className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Quality First
              </h3>
              <p className='text-gray-600'>
                We never compromise on quality, using only the finest materials
                and craftsmanship for every garment.
              </p>
            </div>

            <div className='text-center p-8 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FiUsers className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Community Focus
              </h3>
              <p className='text-gray-600'>
                We believe in building lasting relationships with our customers
                and supporting our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Meet Our Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The passionate individuals behind Starboy Apparels
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & Creative Director',
                bio: 'Former fashion editor with 15+ years in the industry. Passionate about sustainable fashion and empowering women through style.',
                image: '👩‍💼',
              },
              {
                name: 'Michael Chen',
                role: 'Head of Design',
                bio: 'Graduate of Parsons School of Design. Specializes in contemporary streetwear and sustainable materials.',
                image: '👨‍🎨',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Marketing Director',
                bio: 'Digital marketing expert with a love for storytelling. Believes every brand has a unique story to tell.',
                image: '👩‍💻',
              },
              {
                name: 'David Kim',
                role: 'Operations Manager',
                bio: 'Ensures smooth operations and exceptional customer service. Detail-oriented and customer-focused.',
                image: '👨‍💼',
              },
              {
                name: 'Lisa Thompson',
                role: 'Customer Experience',
                bio: 'Dedicated to creating memorable shopping experiences. Believes in going above and beyond for every customer.',
                image: '👩‍💬',
              },
              {
                name: 'Alex Morgan',
                role: 'Sustainability Lead',
                bio: 'Environmental advocate working to make fashion more sustainable. Oversees our eco-friendly initiatives.',
                image: '🌱',
              },
            ].map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow'
              >
                <div className='text-center mb-4'>
                  <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl'>
                    {member.image}
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-purple-600 font-medium mb-3'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Left side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                    placeholder='How can we help?'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none'
                    placeholder='Tell us more about your inquiry...'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-purple-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-purple-700 transition-colors text-lg'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Contact Info */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Contact Information
                </h3>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <FiMapPin className='w-6 h-6 text-purple-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        Address
                      </h4>
                      <p className='text-gray-600'>
                        123 Fashion Street
                        <br />
                        Downtown District
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <FiPhone className='w-6 h-6 text-purple-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        Phone
                      </h4>
                      <p className='text-gray-600'>
                        +1 (555) 123-4567
                        <br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <FiMail className='w-6 h-6 text-purple-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        Email
                      </h4>
                      <p className='text-gray-600'>
                        hello@Starboyapparels.com
                        <br />
                        support@Starboyapparels.com
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <FiClock className='w-6 h-6 text-purple-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        Business Hours
                      </h4>
                      <p className='text-gray-600'>
                        Monday - Friday: 9:00 AM - 8:00 PM
                        <br />
                        Saturday: 10:00 AM - 6:00 PM
                        <br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Follow Us
                </h3>
                <div className='flex space-x-4'>
                  {[
                    { icon: FiInstagram, href: '#', label: 'Instagram' },
                    { icon: FiTwitter, href: '#', label: 'Twitter' },
                    { icon: FiFacebook, href: '#', label: 'Facebook' },
                    { icon: FiYoutube, href: '#', label: 'YouTube' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors'
                      aria-label={social.label}
                    >
                      <social.icon className='w-6 h-6' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Start Shopping?
          </h2>
          <p className='text-xl text-purple-100 mb-8 max-w-2xl mx-auto'>
            Explore our latest collections and discover your perfect style
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/shop'
              className='bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg'
            >
              Shop Now
            </Link>
            <Link
              href='/wishlist'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors text-lg'
            >
              View Wishlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
