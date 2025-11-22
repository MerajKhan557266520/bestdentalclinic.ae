import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Star, Shield, Clock, Wallet, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    { title: 'Teeth Cleaning', price: 'AED 99', desc: 'Professional ultrasonic scaling & polishing.', icon: '✨' },
    { title: 'Esthetic Fillings', price: 'AED 75', desc: 'Invisible composite restorations.', icon: '🦷' },
    { title: 'Braces', price: 'AED 399', desc: 'Upper & Lower Metal Braces Offer.', icon: '😬' },
    { title: 'Root Canal', price: 'AED 750', desc: 'Microscopic endodontics for saving teeth.', icon: '🛡️' },
  ];

  const team = [
    { name: 'Dr. Rejuna', role: 'Senior Dentist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Husna', role: 'Orthodontist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Anjali', role: 'Cosmetic Specialist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Jai', role: 'General Dentist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Renjitha', role: 'Dental Surgeon', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-dental-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dental-900 via-dental-900/90 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-gold-400 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 animate-pulse"></span>
                Best Dental Clinic in Dubai
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
                Crafting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Perfect Smile</span>
              </h1>
              <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed">
                Experience world-class dentistry in Al Rigga. Where luxury meets affordability, and every treatment is a masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto min-w-[180px]">Book Appointment</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-gray-500 hover:bg-white/10 hover:text-white hover:border-white">Our Services</Button>
                </Link>
              </div>
              
              <div className="pt-8 flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                  <span>Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                  <span>Open Until 10 PM</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80" 
                  alt="Woman with perfect white smile" 
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Floating Glass Card */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-sm shadow-xl border-l-4 border-gold-500 max-w-xs">
                  <p className="font-serif text-xl text-dental-900 italic mb-2">"The attention to detail is simply unmatched."</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Verified Patient</span>
                    <div className="flex text-gold-500">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-dental-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-6 flex items-center justify-center gap-4 text-dental-900">
               <div className="bg-white p-3 rounded-full shadow-sm text-gold-600"><Shield className="w-6 h-6" /></div>
               <div className="text-left">
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Hygiene</p>
                 <p className="font-serif text-lg font-semibold">Cleaning AED 99</p>
               </div>
            </div>
            <div className="py-6 flex items-center justify-center gap-4 text-dental-900">
               <div className="bg-white p-3 rounded-full shadow-sm text-gold-600"><Wallet className="w-6 h-6" /></div>
               <div className="text-left">
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Restoration</p>
                 <p className="font-serif text-lg font-semibold">Filling from AED 75</p>
               </div>
            </div>
            <div className="py-6 flex items-center justify-center gap-4 text-dental-900">
               <div className="bg-white p-3 rounded-full shadow-sm text-gold-600"><Clock className="w-6 h-6" /></div>
               <div className="text-left">
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Availability</p>
                 <p className="font-serif text-lg font-semibold">Daily 09:00 - 22:00</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-200 rounded-sm z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80" 
                  alt="Precision dental tools" 
                  className="relative z-10 rounded-sm shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h4 className="text-gold-600 font-bold text-sm uppercase tracking-widest">About Us</h4>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dental-900 leading-tight">
                Redefining Dental Excellence in Dubai
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Situated in the heart of Deira at Al Salmiya Building, Best Dental Clinic combines the precision of modern technology with the warmth of genuine care. We don't just treat teeth; we curate confident smiles using state-of-the-art materials and techniques.
              </p>
              <div className="space-y-4 pt-4">
                 {[
                  "Expert specialists for every dental need",
                  "Transparent, affordable pricing structure",
                  "Latest technology for painless treatments",
                  "Luxury environment with patient comfort focus"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                     <span className="text-dental-800 font-medium">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="pt-6">
                <Link to="/about" className="group inline-flex items-center text-dental-900 font-bold border-b-2 border-gold-400 pb-1 hover:text-gold-600 transition-colors">
                  Our Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-dental-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-4xl font-serif font-bold text-dental-900 mb-6">Signature Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">Comprehensive care designed for longevity and aesthetics.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 group border-t-4 border-transparent hover:border-gold-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-dental-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-gold-50 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-dental-900 mb-2">{service.title}</h3>
                  <p className="text-gold-600 font-bold text-sm mb-4 tracking-wide">{service.price}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-xs font-bold text-dental-900 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                    View Details <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services">
              <Button variant="primary" size="lg">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dental-900 mb-2">Meet The Experts</h2>
              <p className="text-gray-500 font-light">Dedicated professionals committed to your oral health.</p>
            </div>
            <Link to="/contact" className="hidden md:block text-gold-600 hover:text-gold-700 font-medium">Join our family &rarr;</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-6 overflow-hidden rounded-sm shadow-sm">
                  <div className="absolute inset-0 bg-dental-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-top filter contrast-100 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="border-l-2 border-gold-500 pl-4">
                  <h3 className="text-lg font-serif font-bold text-dental-900">{member.name}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dental-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Sparkles className="w-12 h-12 text-gold-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">Ready for your transformation?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
            Your journey to a flawless smile begins here. Book your consultation today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/contact">
                <Button variant="gold" size="lg" className="shadow-2xl shadow-gold-900/20">Book Consultation</Button>
             </Link>
             <a href="tel:+97143270888">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-dental-900" size="lg">Call +971 4 327 0888</Button>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;