import React, { useState } from 'react';
import Button from '../components/Button';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'General Inquiry'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us! We will call you shortly to confirm your appointment.');
    setFormData({ name: '', phone: '', email: '', message: '', service: 'General Inquiry' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-dental-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif">Contact Us</h1>
          <p className="text-dental-100">We are here to help. Reach out to book your appointment or ask a question.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Visit us in Al Rigga, call our front desk, or fill out the form. We accept walk-ins for emergencies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-100 p-3 rounded-full mr-4 text-dental-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">Office 416, Al Salmiya Building,<br/>Al Rigga Rd, Al Muraqqabat, Deira, Dubai</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Best+Dental+Clinic+Al+Salmiya+Building+Al+Rigga+Dubai" 
                    target="_blank" 
                    className="text-gold-600 text-sm font-bold mt-1 inline-block hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-100 p-3 rounded-full mr-4 text-dental-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600 text-lg font-medium">
                    <a href="tel:+97143270888" className="hover:text-gold-600 transition-colors">+971 4 327 0888</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-100 p-3 rounded-full mr-4 text-dental-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Daily: 09:00 AM – 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-100 p-3 rounded-full mr-4 text-dental-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@bestdentalclinic.ae</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden relative shadow-lg mt-8 border-4 border-white">
              <iframe 
                title="Best Dental Clinic Location"
                src="https://maps.google.com/maps?q=Best+Dental+Clinic+Al+Salmiya+Building+Al+Rigga+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-gold-500 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                    placeholder="+971 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interested Service</label>
                <select 
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>General Inquiry / Checkup</option>
                  <option>Teeth Cleaning (AED 99)</option>
                  <option>Tooth Pain / Emergency</option>
                  <option>Braces (Offer AED 399)</option>
                  <option>Fillings (From AED 75)</option>
                  <option>Root Canal</option>
                  <option>Crowns & Bridges</option>
                  <option>Insurance Query</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  placeholder="Tell us about your concern or preferred timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <Button type="submit" className="w-full shadow-md" size="lg" variant="gold">
                Request Appointment
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted by our clinic staff.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;