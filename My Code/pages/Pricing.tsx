import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Check, AlertCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const prices = [
    { item: "Consultation", price: "Free / AED 100" },
    { item: "Teeth Cleaning (Scaling & Polishing)", price: "AED 99" },
    { item: "Tooth Filling (White/Composite)", price: "From AED 75" },
    { item: "Braces (Upper & Lower)", price: "AED 399 (Special Offer)" },
    { item: "Root Canal Treatment", price: "From AED 750" },
    { item: "Dental Crown", price: "AED 800 - 4,000" },
    { item: "Simple Extraction", price: "Contact for Price" },
    { item: "Teeth Whitening", price: "Contact for Offer" },
  ];

  const insuranceProviders = [
    "Mednet", "Neuron", "ENAYA", "MSH International", "NAS", "Almadallah", "Inayah", "Aafiya", "AXA / GIG", "SAICO"
  ];

  return (
    <div className="min-h-screen bg-white">
       {/* Header */}
       <div className="bg-dental-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif">Pricing & Insurance</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Transparent pricing with no hidden surprises. We accept most major insurance cards.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Price List */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-serif">
              <span className="bg-dental-100 text-dental-600 p-2 rounded-lg mr-3"><Check className="w-5 h-5" /></span>
              Service Price List
            </h2>
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-4">Treatment</th>
                    <th className="px-6 py-4 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {prices.map((p, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-800 font-medium">{p.item}</td>
                      <td className="px-6 py-4 text-right text-dental-600 font-bold">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-gray-50 text-xs text-gray-500">
                * Prices are subject to change based on clinical evaluation. "From" indicates the starting price.
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="lg:w-1/2">
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-serif">
              <span className="bg-dental-100 text-dental-600 p-2 rounded-lg mr-3"><ShieldCheckIcon className="w-5 h-5" /></span>
              Insurance Partners
            </h2>
            <p className="text-gray-600 mb-6">
              We direct bill with many major insurance providers in the UAE. If you don't see your provider listed, please give us a call at <strong>+971 4 327 0888</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {insuranceProviders.map((ins, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 rounded-sm p-4 flex items-center justify-center text-center text-sm font-bold text-gray-700 hover:border-gold-300 hover:bg-white hover:shadow-md transition-all cursor-default">
                  {ins}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-sm p-6 border border-blue-100">
              <h3 className="text-blue-900 font-bold mb-2 flex items-center font-serif">
                <AlertCircle className="w-5 h-5 mr-2" /> Is Teeth Cleaning Covered?
              </h3>
              <p className="text-blue-800 text-sm mb-4">
                Many dental insurance plans in Dubai cover preventive cleaning (scaling & polishing). Coverage depends on your specific policy network and limits.
              </p>
              <p className="text-blue-800 text-sm font-medium">
                Not sure about your coverage? We can help!
              </p>
              <Link to="/contact" className="mt-4 inline-block text-blue-600 font-bold hover:underline uppercase text-xs tracking-wider">
                Check Eligibility Now &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

function ShieldCheckIcon({className}: {className?: string}) {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
}

export default Pricing;