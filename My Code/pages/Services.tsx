import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Activity, Heart, Smile, PenTool, ShieldCheck, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Emergency Dental Care",
      icon: <Zap className="w-6 h-6" />,
      description: "Immediate relief for toothaches, broken teeth, and accidents. We prioritize urgent cases.",
      items: ["Toothache Relief", "Broken Tooth Repair", "Emergency Root Canal", "Accident Trauma Care"]
    },
    {
      title: "Preventive & Hygiene",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Keep your gums healthy and breath fresh with our routine cleaning and checkups.",
      items: ["Scaling & Polishing (AED 99)", "Fluoride Treatment", "Gum Disease Treatment", "Routine Checkups"]
    },
    {
      title: "Orthodontics",
      icon: <Activity className="w-6 h-6" />,
      description: "Straighten your teeth with modern braces and aligners. Solutions for all ages.",
      items: ["Metal Braces (from AED 399)", "Ceramic Braces", "Invisalign / Clear Aligners", "Retainers"]
    },
    {
      title: "Cosmetic Dentistry",
      icon: <Smile className="w-6 h-6" />,
      description: "Enhance your smile with our aesthetic treatments designed to boost your confidence.",
      items: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding & Contouring"]
    },
    {
      title: "Restorative Dentistry",
      icon: <PenTool className="w-6 h-6" />,
      description: "Restore function and appearance to damaged or missing teeth.",
      items: ["Dental Implants", "Crowns & Bridges", "Dentures", "Full Mouth Reconstruction"]
    },
    {
      title: "General Treatments",
      icon: <Heart className="w-6 h-6" />,
      description: "Everyday dental procedures performed with care and precision.",
      items: ["White Fillings (from AED 75)", "Root Canal Treatment", "Tooth Extractions", "Wisdom Tooth Removal"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative bg-dental-900 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1588776813186-6f46678119da?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-serif font-bold mb-6">Curated Dental Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">Comprehensive dental care solutions under one roof. From routine hygiene to complex surgeries, our experts handle it all.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-sm hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1">
              <div className="text-gold-500 bg-dental-50 p-4 rounded-sm w-fit mb-6 group-hover:bg-dental-900 group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-dental-900 mb-3">{category.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">{category.description}</p>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Special Highlight */}
      <div className="bg-dental-50 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-sm p-8 lg:p-0 shadow-lg flex flex-col lg:flex-row items-stretch overflow-hidden">
            <div className="lg:w-1/2 relative min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1445527697940-6172974add8d?auto=format&fit=crop&w=1000&q=80" alt="Dental tools and filling material" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-2">Signature Treatment</span>
              <h2 className="text-3xl font-serif font-bold text-dental-900 mb-4">Aesthetic Restorations</h2>
              <p className="text-gray-600 text-lg mb-6 font-light">
                We use high-quality white composite fillings that match the natural color of your teeth. 
                Starting at just <strong className="text-dental-900">AED 75</strong>, our fillings are durable, aesthetic, and mercury-free.
              </p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li className="flex items-center"><span className="text-gold-500 mr-2">✓</span> Matches natural tooth color</li>
                <li className="flex items-center"><span className="text-gold-500 mr-2">✓</span> Preserves natural tooth structure</li>
                <li className="flex items-center"><span className="text-gold-500 mr-2">✓</span> Completed in a single visit</li>
              </ul>
              <Link to="/contact">
                <Button variant="gold">Book a Filling</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;