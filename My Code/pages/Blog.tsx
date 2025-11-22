import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Types of Dental Fillings Available in Dubai",
      summary: "Amalgam vs Composite? Understand the differences between filling materials and find out which is best for your oral health and budget.",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Is Teeth Cleaning Covered by Insurance?",
      summary: "A guide to understanding dental insurance coverage in the UAE. Learn about routine checkups, scaling limits, and direct billing.",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How Much Does a Root Canal Cost?",
      summary: "Breaking down the costs of root canal therapy in Deira. Why does the price vary, and how can you get affordable treatment?",
      date: "Sep 15, 2023",
      image: "https://images.unsplash.com/photo-1445527697940-6172974add8d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Dental Crown Costs Explained",
      summary: "From porcelain to zirconia, learn about the different types of crowns available and their respective price ranges.",
      date: "Aug 30, 2023",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Affordable Tooth Fillings in Al Rigga",
      summary: "Why we offer some of the most competitive prices for quality tooth fillings in the Al Rigga and Deira area.",
      date: "Aug 10, 2023",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Typical Dental Services in Dubai Clinics",
      summary: "An overview of what to expect when visiting a general dental clinic, from hygiene to cosmetic procedures.",
      date: "Jul 22, 2023",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-dental-900 py-20 border-b border-dental-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Dental Journal</h1>
          <p className="text-gray-400 font-light text-lg">Expert insights, tips, and clinic news.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white group flex flex-col h-full border-b border-gray-100 pb-8">
              <div className="h-56 overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-xs text-gold-600 font-bold uppercase tracking-widest mb-3">{post.date}</div>
                <h2 className="text-2xl font-serif font-bold text-dental-900 mb-3 group-hover:text-gold-600 transition-colors cursor-pointer leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">
                  {post.summary}
                </p>
                <a href="#" className="text-dental-900 font-bold text-xs uppercase tracking-widest hover:text-gold-600 mt-auto border-b-2 border-dental-100 hover:border-gold-500 w-fit pb-1 transition-all">Read Article</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;