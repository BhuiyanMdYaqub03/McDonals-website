/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MapPin, Smartphone, Star, Clock, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center transform -rotate-6 shadow-md">
              <span className="font-display text-brand-yellow text-2xl font-bold tracking-tighter">M</span>
            </div>
            <span className="font-display text-2xl tracking-tight text-brand-dark hidden sm:block">MCFOOD</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Our Menu</a>
            <a href="#" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Rewards</a>
            <a href="#" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Locations</a>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 px-4 py-2 text-brand-dark bg-gray-50 hover:bg-gray-100 rounded-full font-semibold transition-colors">
              <MapPin className="w-4 h-4 text-brand-red" />
              Find Near You
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold rounded-full transition-all shadow-sm hover:shadow active:scale-95">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button className="p-2 rounded-full bg-brand-yellow text-brand-dark font-bold shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand-red">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Our Menu</a>
              <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Rewards</a>
              <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Locations</a>
              <button className="mt-4 w-full flex justify-center items-center gap-2 px-4 py-3 border border-gray-200 text-brand-dark bg-white rounded-full font-semibold">
                <MapPin className="w-5 h-5 text-brand-red" />
                Find Restaurant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative bg-[#f5f5f0] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-yellow/20 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-brand-red font-bold text-sm uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              100% Fresh Beef
            </div>
            
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-brand-dark leading-[0.9] mb-6">
              HOT. <span className="text-brand-red">FRESH.</span><br /> FAST.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg mb-8 font-medium">
              Your favorite iconic meals, delivered right to your door in minutes or ready for pickup.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 active:scale-95 group">
                Order Delivery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 text-brand-dark font-bold text-lg rounded-full transition-all flex items-center justify-center gap-2 active:scale-95">
                <MapPin className="w-5 h-5 text-gray-400" />
                Find Store
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#f5f5f0] bg-gray-200`} />
                ))}
              </div>
              <p>Loved by 1M+ hungry customers</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-yellow/30 rounded-full blur-3xl transform scale-75" />
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500&auto=format&fit=crop" 
              alt="Delicious Burger" 
              className="relative z-10 w-full max-w-[500px] object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] origin-bottom"
              style={{ clipPath: 'circle(48%)' }}
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Delivery time</p>
                <p className="text-brand-dark font-bold text-lg leading-none mt-1">15-20 Min</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MenuSection() {
  const items = [
    { name: "Big Classic Burger", price: "$5.99", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", badge: "Best Seller" },
    { name: "Golden Fries", price: "$2.49", img: "https://images.unsplash.com/photo-1576107232684-1279f3908589", badge: "" },
    { name: "Crispy Chicken Sandwich", price: "$4.99", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086", badge: "New" },
    { name: "Vanilla Swirl Cone", price: "$1.99", img: "https://images.unsplash.com/photo-1563805042-7684c8e9e533", badge: "" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-dark mb-4">FAVORITES <span className="text-brand-red">ON THE MENU</span></h2>
            <p className="text-gray-600 font-medium max-w-2xl">Freshly made, packed with flavor, and ready for you to enjoy. Firing up the grill just for you.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 w-max">
            View Full Menu
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-4 transition-all hover:shadow-xl border border-gray-100 group relative flex flex-col h-full"
            >
              {item.badge && (
                <div className="absolute top-6 left-6 z-10 bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {item.badge}
                </div>
              )}
              <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img src={`${item.img}?q=80&w=600&auto=format&fit=crop`} alt={item.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-brand-dark leading-tight mb-2">{item.name}</h3>
                <p className="text-gray-500 font-medium text-sm mb-6 flex-grow">A delicious classic made perfectly to your taste.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-2xl text-brand-dark">{item.price}</span>
                  <button className="w-10 h-10 bg-brand-red hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors active:scale-95 shadow-md shadow-red-500/20">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="py-12 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFC72C 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-red rounded-[2.5rem] p-8 sm:p-12 l flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
          {/* Background shapes inside banner */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
          
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              <Clock className="w-4 h-4" /> Limited Time
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-white mb-6 uppercase tracking-tight">The Family<br/>Feast Combo</h2>
            <p className="text-red-100 text-lg sm:text-xl font-medium mb-8 max-w-md">2 Classic Burgers, 2 Crispy Fries, and 2 Refreshing Drinks for one unbelievable price.</p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-red-200 text-sm font-medium line-through decoration-red-400">Regular $24.99</span>
                <span className="font-display text-5xl text-brand-yellow">$14.99</span>
              </div>
              <button className="px-8 py-4 bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg rounded-full transition-transform active:scale-95 shadow-lg">
                Claim Offer Now
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative z-10 hidden sm:block">
            <img src="https://images.unsplash.com/photo-1610614819515-6804155b9e07?q=80&w=1200&auto=format&fit=crop" alt="Combo Offer" className="rounded-2xl shadow-2xl transform rotate-3 border-4 border-white/20" />
            {/* 20% OFF Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full flex flex-col items-center justify-center text-brand-dark transform rotate-12 shadow-xl border-4 border-white">
              <span className="font-display text-4xl leading-none">20%</span>
              <span className="font-bold uppercase tracking-wider">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section className="py-24 bg-[#FFC72C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl transform scale-110" />
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" alt="Mobile App" className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-brand-dark/10 transform -rotate-3" />
              <div className="absolute top-1/4 -left-12 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 font-bold text-brand-dark transform rotate-3">
                🎯 Earn Points!
              </div>
              <div className="absolute bottom-1/3 -right-8 bg-brand-red text-white px-6 py-4 rounded-2xl shadow-xl z-20 font-bold transform -rotate-6">
                🍟 Free Fries Friday
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-6 mt-8 lg:mt-0 uppercase tracking-tight">Get the app.<br/><span className="text-white drop-shadow-md">Get more.</span></h2>
            <p className="text-yellow-900 text-lg sm:text-xl font-medium mb-10 max-w-lg">Order ahead, score exclusive deals, and earn reward points for every dollar you spend. It's the smartest way to enjoy your favorites.</p>
            
            <div className="space-y-6 mb-10">
              {['Exclusive app-only deals and offers', 'Order ahead and skip the line', 'Earn points towards free food'].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-yellow flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-brand-dark font-bold text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-brand-dark hover:bg-gray-900 text-white rounded-xl transition-colors min-w-[200px]">
                <Smartphone className="w-8 h-8" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-gray-400">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-brand-dark hover:bg-gray-900 text-white rounded-xl transition-colors min-w-[200px]">
                <Smartphone className="w-8 h-8" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-gray-400">GET IT ON</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const reviews = [
    { name: "Sarah L.", text: "The app makes ordering so convenient. Food is always hot and fresh! Exactly what I needed after a long day.", stars: 5 },
    { name: "Mark T.", text: "Best fries in town. The curbside pickup is incredibly fast. I'm there at least twice a week.", stars: 5 },
    { name: "Emily R.", text: "Love the new combo deals. The rewards program actually gives you good stuff quickly. Highly recommend!", stars: 4 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-brand-dark mb-4">LOVED BY <span className="text-brand-red">MILLIONS</span></h2>
        <p className="text-gray-600 font-medium max-w-2xl mx-auto mb-16">Serving up smiles in over 100+ countries. Here is what some of our favorite customers have to say.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#f5f5f0] rounded-3xl p-8 border border-gray-100 relative">
              <div className="text-4xl text-gray-300 font-serif absolute top-6 right-8">"</div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-5 h-5 ${idx < review.stars ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="font-bold text-brand-dark">{review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center transform -rotate-6">
                <span className="font-display text-brand-yellow text-2xl font-bold tracking-tighter">M</span>
              </div>
              <span className="font-display text-2xl tracking-tight text-white mt-1 inline-block ml-3">MCFOOD</span>
            </div>
            <p className="text-gray-400 font-medium max-w-sm mb-6">
              Quality ingredients, delicious meals, and fast service. We're dedicated to bringing you the best food experience possible.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-red flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Our Menu</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Burgers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Chicken & Sandwiches</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Fries & Sides</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Desserts</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">McCafe</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Nutrition Info</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Newsroom</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} McFood. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar />
      <Hero />
      <MenuSection />
      <OffersSection />
      <AppSection />
      <SocialProof />
      <Footer />
    </div>
  );
}
