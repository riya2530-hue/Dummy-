import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Bone, Cat, Bird, Rabbit, ShieldCheck, Tag, Truck, Headphones, Star } from 'lucide-react';
import dogAccessoriesImg from '../assets/images/dog_accessories_1781764146320.jpg';
import smallPetCareImg from '../assets/images/small_pet_care_1781764165318.jpg';

export default function Home() {
  const categories = [
    { name: 'Dog Accessories', icon: Bone, image: dogAccessoriesImg, desc: 'Durable leashes, stylish collars, cozy beds, and interactive toys.' },
    { name: 'Cat Essentials', icon: Cat, image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=400&auto=format&fit=crop', desc: 'Scratchers, tunnels, feeding bowls, and comfortable resting spaces.' },
    { name: 'Bird Supplies', icon: Bird, image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=400&auto=format&fit=crop', desc: 'Perches, feeders, toys, and cage accessories.' },
    { name: 'Small Pet Care', icon: Rabbit, image: smallPetCareImg, desc: 'Habitat accessories, chew toys, and feeding solutions.' },
  ];

  const bestSellers = [
    { name: 'Premium Comfort Dog Bed', price: 49.99, image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop' },
    { name: 'Adjustable Reflective Collar', price: 14.99, image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop' },
    { name: 'Interactive Cat Toy Ball', price: 19.99, image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=600&auto=format&fit=crop' },
    { name: 'Stainless Steel Pet Bowl Set', price: 24.99, image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=600&auto=format&fit=crop' },
  ];

  const whyChooseUs = [
    { title: 'High Quality Products', icon: ShieldCheck, desc: 'Carefully tested accessories designed for safety and durability.' },
    { title: 'Affordable Pricing', icon: Tag, desc: 'Premium products at pet-friendly prices.' },
    { title: 'Fast Shipping', icon: Truck, desc: 'Quick delivery across the country.' },
    { title: 'Customer Support', icon: Headphones, desc: 'Dedicated team ready to help pet parents.' },
  ];

  const testimonials = [
    { text: "My dog absolutely loves the comfort bed from PetParadise!", author: "Sarah M.", rating: 5 },
    { text: "Excellent quality and fast shipping. Highly recommended.", author: "David R.", rating: 5 },
    { text: "The cat toys keep my kitten entertained for hours.", author: "Jessica L.", rating: 5 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Premium Pet Accessories for Dogs & Cats | PetParadise</title>
        <meta name="description" content="Shop premium dog and cat accessories including collars, beds, toys, grooming supplies, and feeding essentials. Quality products at affordable prices." />
        <link rel="canonical" href="https://petparadise-seven.vercel.app/" />
        <meta property="og:type" content="website" />

<meta
  property="og:title"
  content="Premium Pet Accessories for Dogs & Cats | PetParadise"
/>

<meta
  property="og:description"
  content="Shop premium dog and cat accessories including collars, beds, toys, grooming supplies, and feeding essentials. Quality products at affordable prices."
/>

<meta
  property="og:url"
  content="https://petparadise-seven.vercel.app/"
/>

<meta
  property="og:image"
  content="https://petparadise-seven.vercel.app/og-image.jpg"
/>
<meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="Premium Pet Accessories for Dogs & Cats | PetParadise"
/>

<meta
  name="twitter:description"
  content="Shop premium dog and cat accessories including collars, beds, toys, grooming supplies, and feeding essentials. Quality products at affordable prices."
/>

<meta
  name="twitter:image"
  content="https://petparadise-seven.vercel.app/og-image.jpg"
/>
      <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PetParadise",
  "url": "https://petparadise-seven.vercel.app/",
  "description": "PetParadise is an online pet store offering premium accessories for dogs and cats.",
  "publisher": {
    "@type": "Organization",
    "name": "PetParadise"
  }
}
`}
</script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-500 to-rose-600 overflow-hidden border-b border-rose-400/30">
        {/* Subtle sophisticated background: glowing radial gradient and dark elegant texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-5 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs uppercase tracking-[0.2em] mb-6 border border-white/30 shadow-sm backdrop-blur-md font-bold">
                  <Star className="w-4 h-4 fill-white text-white" />
                  Premium Pet Boutique
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                  Everything Your Pet Needs,All in One Place
                 <br />
                  <span className="text-white pb-2 inline-block drop-shadow-sm">Pet Accessories</span>
                </h1>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg font-medium">
                   Discover premium accessories for dogs and cats, including cozy beds, stylish collars, fun toys, grooming products, and feeding essentials—all in one place.
                  <span className="block mt-4 text-white/80 hidden sm:block font-medium text-sm">
                    At PetParadise, we treat pets like family. That's why we curate only the finest accessories, from plush artisan beds to resilient, luxurious collars.
                  </span>
                </p>
                <div className="flex flex-wrap gap-6 mt-8 text-sm font-medium text-white">
                  <span>🐶 5,000+ Happy Pets</span>
                  <span>🚚 Free Shipping</span>
                 <span>⭐ 4.9/5 Customer Rating</span>
                 </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link to="/products" className="inline-flex justify-center items-center px-8 py-4 text-sm uppercase tracking-wider font-bold rounded-xl shadow-lg shadow-black/10 text-rose-600 bg-white hover:bg-rose-50 hover:-translate-y-0.5 transition-all duration-300">
                    SHOP NOW
                  </Link>
                  <Link to="/products" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/50 text-sm uppercase tracking-wider font-bold rounded-xl text-white hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  EXPLORE COLLECTIONS
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Photo Collage */}
            <div className="lg:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="grid grid-cols-12 gap-4 lg:gap-6 items-center"
              >
                {/* Left column (2 smaller images) */}
                <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-6 sm:translate-y-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square sm:aspect-[4/5] border-4 border-white/20 transform transition hover:scale-[1.02] duration-500 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" 
                      alt="Cute sleeping kitten" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square sm:aspect-[4/5] border-4 border-white/20 transform transition hover:scale-[1.02] duration-500 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop" 
                      alt="Comfortable dog bed" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Right column (1 large main image) */}
                <div className="col-span-12 sm:col-span-7 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/40 aspect-[4/5] lg:aspect-[3/4] border-4 border-white/30 z-10 relative transform transition hover:scale-[1.02] duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop" 
                      alt="Happy golden retriever puppy" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-rose-100 text-slate-900">
                    <div className="bg-rose-100 p-3 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 fill-rose-500 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-black text-rose-600 leading-none">10,000+</p>
                      <p className="text-sm text-slate-500 tracking-wide mt-1 uppercase text-[10px] font-bold">Happy Pets</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-slate-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">Shop Premium Dog Accessories</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-rose-200"></span>
              <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="w-12 h-[2px] bg-rose-200"></span>
            </div>
            <p className="mt-4 text-slate-500 uppercase tracking-widest text-xs font-bold">Discover our collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-rose-100 flex flex-col text-center group cursor-pointer relative overflow-hidden rounded-3xl"
              >
                <div className="h-48 overflow-hidden relative border-b border-rose-100">
                  <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full shadow-md -mt-14 mb-4 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500 z-20 border border-rose-100 transform group-hover:rotate-12 group-hover:scale-110">
                    <cat.icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-slate-900 mb-3">{cat.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">Best Cat Accessories for Every Need</h2>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-rose-200"></span>
                <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
            </div>
            <Link to="/products" className="text-sm uppercase tracking-widest text-rose-600 font-bold hover:text-orange-500 transition-colors border-b-2 border-rose-200 hover:border-orange-500 pb-1">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {bestSellers.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-rose-50 hover:shadow-2xl hover:border-rose-100 transition-all duration-500 pb-4"
              >
                <div className="h-64 overflow-hidden relative bg-rose-50/50 mb-6 m-2 rounded-xl">
                <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
  Best Seller
</div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition duration-700 ease-out" />
                  <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
                <div className="px-6">
                  <h3 className="font-sans font-bold text-lg text-slate-800 mb-2 truncate group-hover:text-rose-500 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-2 mb-3">
  {[...Array(5)].map((_, i) => (
    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  ))}
  <span className="text-sm text-slate-500 ml-2">(4.9)</span>
</div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
  <span className="text-xl font-black text-rose-600">
    ${product.price}
  </span>

  <span className="text-sm text-slate-400 line-through">
    $39.99
  </span>
</div>
                    <button className="text-[10px] uppercase tracking-widest font-bold border-2 border-rose-200 text-rose-600 rounded-xl px-4 py-2 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                  <p className="text-green-600 text-xs font-semibold mt-2">
  ✓ Free Shipping
</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-rose-50 border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-4xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">Why Choose PetParadise?</h4>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-rose-200"></span>
              <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="w-12 h-[2px] bg-rose-200"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-3xl border border-rose-200 bg-white flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:border-rose-400 group-hover:bg-rose-100 transition-all duration-500 shadow-sm relative transform group-hover:rotate-6">
                  <div className="absolute inset-2 border border-rose-100 rounded-2xl"></div>
                  <feature.icon className="h-8 w-8 stroke-[2] relative z-10" />
                </div>
                <h3 className="text-xl font-sans font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-24 bg-gradient-to-br from-rose-500 via-orange-500 to-orange-600 relative overflow-hidden">     
     {/* Subtle royal pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0,_transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-extrabold text-white mb-4 tracking-tight">Happy Pet Parents</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-white/50"></span>
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="w-12 h-[2px] bg-white/50"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:border-white/50 transition-colors duration-300">
                <div className="flex gap-1 mb-6 text-white">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-white drop-shadow-sm italic mb-8 font-sans leading-relaxed text-lg font-medium">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-white/50"></div>
                  <div className="font-bold text-white tracking-wider text-sm uppercase">{test.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white text-center border-t border-rose-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Star className="w-10 h-10 text-rose-500 fill-rose-500 mx-auto mb-6" />
          <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-6">Join the Pack</h2>
          <p className="text-slate-500 mb-10 text-lg font-medium">Subscribe for exclusive curations, elegant pet care insights, and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-0 justify-center max-w-xl mx-auto border-2 border-slate-200 rounded-2xl overflow-hidden focus-within:border-rose-500 transition-colors shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 text-slate-900 flex-grow focus:outline-none bg-transparent font-medium"
              required
            />
            <button type="submit" className="px-10 py-4 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold uppercase tracking-widest transition whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
