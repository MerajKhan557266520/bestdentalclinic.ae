import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const insuranceProviders = [
    "Mednet", "Neuron", "ENAYA", "MSH International", "NAS", "Almadallah", "Inayah", "Aafiya", "AXA / GIG", "SAICO"
  ];

  return (
    <footer className="bg-dental-900 text-gray-300 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/5 p-2 rounded-sm text-gold-500 border border-white/10">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" className="fill-current" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C12 22 18 18 18 10V6L12 3L6 6V10C6 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
                 </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white block leading-none">Best Dental</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500">Clinic Dubai</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Dubai’s trusted dental clinic since 2009. We are dedicated to providing world-class dental care that is both high-quality and affordable.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-500 transition-colors">Pricing & Insurance</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Our Clinic</Link></li>
              <li><Link to="/blog" className="hover:text-gold-500 transition-colors">Dental Insights</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-gold-500 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Best+Dental+Clinic+Al+Salmiya+Building+Al+Rigga+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  Office 416, Al Salmiya Building,<br />Al Rigga Rd, Deira, Dubai, UAE
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-gold-500 shrink-0" />
                <a href="tel:+97143270888" className="hover:text-gold-500 transition-colors">+971 4 327 0888</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-gold-500 shrink-0" />
                <a href="mailto:info@bestdentalclinic.ae" className="hover:text-gold-500 transition-colors">info@bestdentalclinic.ae</a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-4 text-gold-500 shrink-0" />
                <span>Daily: 09:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Insurance Partners</h3>
            <div className="flex flex-wrap gap-2">
              {insuranceProviders.map((provider, idx) => (
                <span key={idx} className="inline-block bg-white/5 text-xs px-3 py-1.5 text-gray-400 border border-white/10 hover:border-gold-500 transition-colors cursor-default">
                  {provider}
                </span>
              ))}
            </div>
            <div className="mt-8">
               <Link to="/pricing" className="text-gold-500 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-gold-500 pb-1">Check your eligibility</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Best Dental Clinic Dubai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;