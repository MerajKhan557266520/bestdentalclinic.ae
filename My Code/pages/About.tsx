import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
       {/* Header */}
       <div className="bg-dental-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold text-dental-900 mb-4">Our Legacy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">Dedicated to creating healthy, beautiful smiles in Dubai since 2009.</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-dental-100 rounded-sm z-0"></div>
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" alt="Luxury dental clinic interior" className="relative z-10 rounded-sm shadow-xl w-full" />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl font-serif font-bold text-dental-900">Our Mission</h2>
              <div className="h-1 w-20 bg-gold-500"></div>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Founded in 2009, Best Dental Clinic was established with a simple yet powerful mission: to provide high-quality dental care that is accessible and affordable for everyone in Dubai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Deira on Al Rigga Road, we have grown to become a trusted name for thousands of patients. We believe that financial constraints should never prevent someone from having a healthy smile. That's why we offer transparent pricing and work with a wide range of insurance providers.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="font-serif font-bold text-4xl text-dental-900">15+</h4>
                  <p className="text-gold-600 text-sm uppercase tracking-wider">Years of Service</p>
                </div>
                 <div>
                  <h4 className="font-serif font-bold text-4xl text-dental-900">10k+</h4>
                  <p className="text-gold-600 text-sm uppercase tracking-wider">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-dental-900 text-white py-24">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-serif font-bold text-center mb-16">Core Values</h2>
           <div className="grid md:grid-cols-3 gap-10">
             <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors">
               <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">Patient-Centered</h3>
               <p className="text-gray-400 font-light leading-relaxed">We treat people, not just teeth. Your comfort and peace of mind are our top priorities from the moment you walk in.</p>
             </div>
             <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors">
               <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">Integrity</h3>
               <p className="text-gray-400 font-light leading-relaxed">No hidden fees. Honest advice. We only recommend treatments that are necessary for your well-being and longevity.</p>
             </div>
             <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors">
               <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">Excellence</h3>
               <p className="text-gray-400 font-light leading-relaxed">Continuous learning and modern technology ensure that we deliver the highest standard of clinical care available.</p>
             </div>
           </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 text-center bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-dental-900 mb-6">Experience the Difference</h2>
          <p className="text-gray-600 mb-10 text-lg font-light">We look forward to welcoming you to our dental family.</p>
          <Link to="/contact">
            <Button size="lg" variant="gold">Schedule a Visit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;