import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, MapPin } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-gold-600 font-semibold' : 'text-gray-600 hover:text-gold-600';
  };

  // Custom Logo Component
  const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 fill-current text-gold-500">
      <path d="M50 2 C30 2 20 15 20 35 C20 60 35 75 50 98 C65 75 80 60 80 35 C80 15 70 2 50 2 Z M50 15 C55 15 60 20 60 30 C60 40 50 50 50 50 C50 50 40 40 40 30 C40 20 45 15 50 15 Z" fillOpacity="0.9" />
      <path d="M35 25 L42 10 L50 20 L58 10 L65 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="bg-dental-900 text-white py-3 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs uppercase tracking-widest font-light">
          <div className="flex items-center space-x-8">
            <a href="tel:+97143270888" className="flex items-center hover:text-gold-400 transition-colors"><Phone className="w-3 h-3 mr-2 text-gold-500" /> +971 4 327 0888</a>
            <span className="flex items-center"><Calendar className="w-3 h-3 mr-2 text-gold-500" /> 09:00 AM – 10:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 hidden lg:inline">Office 416, Al Salmiya Bldg, Al Rigga Rd, Dubai</span>
            <div className="h-3 w-px bg-gray-700 hidden lg:block"></div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Best+Dental+Clinic+Al+Salmiya+Building+Al+Rigga+Dubai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-gold-400 transition-colors cursor-pointer"
            >
              <MapPin className="w-3 h-3 mr-1 text-gold-500" /> Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-dental-900 p-2 rounded-sm group-hover:bg-gold-500 transition-colors duration-300 shadow-lg">
              <div className="text-gold-500 group-hover:text-white transition-colors duration-300">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" className="fill-current" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C12 22 18 18 18 10V6L12 3L6 6V10C6 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
                 </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-dental-900 leading-none tracking-tight">Best Dental</h1>
              <p className="text-[10px] text-gold-600 uppercase tracking-[0.3em] mt-1 font-medium">Clinic Dubai</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" variant="gold">Book Visit</Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-dental-900 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-6 shadow-2xl absolute w-full h-screen z-50 animate-fade-in top-[72px]">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-serif font-medium ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 mt-4">
              <div className="flex flex-col space-y-3 text-sm text-gray-500 mb-6">
                <a href="tel:+97143270888" className="flex items-center"><Phone className="w-4 h-4 mr-3 text-gold-500" /> +971 4 327 0888</a>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-3 text-gold-500" /> 09:00 AM – 10:00 PM</span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Best+Dental+Clinic+Al+Salmiya+Building+Al+Rigga+Dubai"
                  target="_blank"
                  className="flex items-center text-gold-600"
                >
                  <MapPin className="w-4 h-4 mr-3" /> Get Directions
                </a>
              </div>
              <Link to="/contact" className="block w-full">
                <Button className="w-full" variant="gold">Book Appointment</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;