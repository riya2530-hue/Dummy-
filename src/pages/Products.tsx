import toast from "react-hot-toast";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import feedingAccessoriesImg from '../assets/images/feeding_accessories_1781764184164.jpg';
import automaticFeederImg from '../assets/images/automatic_feeders_blog_1781764236095.jpg';
import groomingBrushImg from '../assets/images/grooming_essentials_1781764202423.jpg';
import nailClipperImg from '../assets/images/nail_clipper_1781764290341.jpg';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState("default");
  const { addToCart } = useCart();

  const categories = ['All', 'Dog Collection', 'Cat Collection', 'Feeding Accessories', 'Grooming Essentials'];

  const productsData = [
    { name: 'Premium Comfort Dog Bed', price: 49.99, category: 'Dog Collection',
      features: ['Soft memory foam cushioning', 'Machine washable cover', 'Available in 3 sizes'],
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Adjustable Reflective Collar', price: 14.99, category: 'Dog Collection',
      features: ['Reflective safety strip', 'Adjustable fit', 'Multiple colors'],
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Retractable Dog Leash', price: 29.99, category: 'Dog Collection',
      features: ['5-meter extension', 'Comfortable grip', 'Strong locking mechanism'],
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Interactive Cat Toy Ball', price: 19.99, category: 'Cat Collection',
      features: ['Motion activated', 'Rechargeable battery', 'Durable material'],
      image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Luxury Cat Scratching Post', price: 59.99, category: 'Cat Collection',
      features: ['Natural sisal rope', 'Stable base', 'Modern design'],
      image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Cozy Cat Cave Bed', price: 39.99, category: 'Cat Collection',
      features: ['Plush interior', 'Foldable design', 'Easy cleaning'],
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop'
    },
    { name: 'Stainless Steel Bowl Set', price: 24.99, category: 'Feeding Accessories',
      features: ['Non-slip base', 'Rust resistant', 'Dishwasher safe'],
      image: feedingAccessoriesImg
    },
    { name: 'Automatic Pet Feeder', price: 79.99, category: 'Feeding Accessories',
      features: ['Programmable feeding schedule', 'Portion control', 'Easy setup'],
      image: automaticFeederImg
    },
    { name: 'Pet Grooming Brush', price: 16.99, category: 'Grooming Essentials',
      features: ['Gentle on skin', 'Removes loose fur', 'Ergonomic handle'],
      image: groomingBrushImg
    },
    { name: 'Nail Clipper Kit', price: 12.99, category: 'Grooming Essentials',
      features: ['Safety guard included', 'Sharp stainless steel blades', 'Comfortable grip'],
      image: nailClipperImg
    }
  ];

  const filteredProducts = productsData.filter((product) => {
  const matchesCategory =
    activeCategory === "All" || product.category === activeCategory;

  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});
const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case "low-high":
      return a.price - b.price;

    case "high-low":
      return b.price - a.price;

    case "a-z":
      return a.name.localeCompare(b.name);

    case "z-a":
      return b.name.localeCompare(a.name);

    default:
      return 0;
  }
});

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Helmet>
        <title>Shop Collection - PetParadise</title>
        <meta name="description" content="Explore our exquisite curation of premium accessories designed for your distinguished companions." />
        <link rel="canonical" href="https://petparadiseee.netlify.app/products" />
      </Helmet>
      <section className="relative bg-rose-900 py-28 text-center text-white overflow-hidden border-b border-rose-400/30">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1600" alt="Pet background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-orange-500/80 to-rose-600/80 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6">Our <span className="text-white pb-2 inline-block drop-shadow-sm">Collection</span></h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium leading-relaxed mb-4">Explore our exquisite curation of premium accessories designed for your distinguished companions.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-white/80 font-medium text-sm tracking-widest uppercase">
            <h3>Dog Collars and Leashes</h3>
            <span className="hidden sm:inline">•</span>
            <h3>Comfortable Pet Beds</h3>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center mb-8">
  <input
    type="text"
    placeholder="🔍 Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
  />
</div>
<div className="flex justify-end mb-8">
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
  >
    <option value="default">Sort By</option>
    <option value="low-high">Price: Low to High</option>
    <option value="high-low">Price: High to Low</option>
    <option value="a-z">Name: A-Z</option>
    <option value="z-a">Name: Z-A</option>
  </select>
</div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 border-2 rounded-xl ${
                activeCategory === cat 
                ? 'bg-rose-500 text-white border-rose-500 shadow-xl shadow-rose-200/50' 
                : 'bg-white text-slate-500 border-rose-100 hover:border-rose-400 hover:text-rose-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <AnimatePresence>
           {sortedProducts.map((product) => (
              <motion.div 
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-2 border-rose-50 flex flex-col group hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 rounded-3xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative bg-rose-50/30">
                  <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 border border-rose-100 text-[10px] font-black text-rose-600 uppercase tracking-widest shadow-sm z-20 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-rose-50 -rotate-45 transform origin-top-right transition-transform group-hover:scale-150 duration-700 -z-10"></div>
                  <h3 className="font-sans font-extrabold text-xl text-slate-800 mb-4 group-hover:text-rose-500 transition-colors leading-snug">{product.name}</h3>
                  <ul className="text-sm text-slate-500 mb-8 space-y-2 flex-grow font-medium">
                    {product.features.map((f, i) => <li key={i} className="flex gap-2"><span className="text-orange-400">◆</span> {f}</li>)}
                  </ul>
                  <div className="flex justify-between items-center mt-auto border-t border-rose-100 pt-6">
                    <span className="text-xl font-black text-slate-700">${product.price}</span>
                    <button
                    onClick={() => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  }}
 
className="border-2 border-rose-200 text-rose-600 p-3 rounded-xl hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors flex items-center justify-center cursor-pointer" >
                      <ShoppingCart className="w-4 h-4 pointer-events-none" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
