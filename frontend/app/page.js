import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

export default function Home() {
  return (
    <main className='min-h-screen overflow-hidden'>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
      <ShoppingCart />
    </main>
  );
}
