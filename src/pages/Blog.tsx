import { CalendarDays, ChevronRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import groomingTipsImg from '../assets/images/grooming_tips_blog_1781764220140.jpg';
import automaticFeedersImg from '../assets/images/automatic_feeders_blog_1781764236095.jpg';

export default function Blog() {
  const articles = [
    {
      title: 'Top 10 Must-Have Accessories for New Pet Owners',
      date: 'March 12, 2026',
      excerpt: 'Bringing home a new pet is exciting, but preparation is essential. From comfortable bedding to feeding accessories, discover the top items every pet owner should have.',
      category: 'Product Guides',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'How to Choose the Perfect Dog Bed',
      date: 'March 20, 2026',
      excerpt: 'Learn how factors such as size, material, and sleeping habits influence the best bed choice for your dog.',
      category: 'Dog Tips',
      image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Keeping Indoor Cats Active and Happy',
      date: 'April 5, 2026',
      excerpt: 'Interactive toys, climbing structures, and play sessions help maintain your cat\'s physical and mental health.',
      category: 'Cat Care',
      image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Pet Grooming Tips for Every Season',
      date: 'April 18, 2026',
      excerpt: 'Seasonal grooming routines can improve coat health and keep your pet comfortable year-round.',
      category: 'Grooming',
      image: groomingTipsImg
    },
    {
      title: 'Benefits of Using Automatic Feeders',
      date: 'May 2, 2026',
      excerpt: 'Automatic feeders help maintain consistent meal schedules and reduce stress for busy pet owners.',
      category: 'Pet Care',
      image: automaticFeedersImg
    }
  ];

  const categories = ['Pet Care', 'Dog Tips', 'Cat Care', 'Grooming', 'Nutrition', 'Product Guides'];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Helmet>
        <title>Blog - PetParadise</title>
        <meta name="description" content="Read the PetParadise journal for expert care insights, product guides, and tips to enrich the life you share with your pets." />
        <link rel="canonical" href="https://petparadiseee.netlify.app/blog" />
      </Helmet>
      <section className="relative bg-rose-900 py-28 text-center text-white overflow-hidden border-b border-rose-400/30">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544568100-847a9ec5d728?auto=format&fit=crop&q=80&w=1600" alt="Dog background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-orange-500/80 to-rose-600/80 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 -translate-x-1/4 pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6">The Royal <span className="text-white drop-shadow-sm pb-2 inline-block">Journal</span></h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Curated narratives, expert care insights, and elegant guides to enrich the life you share with your cherished companions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 w-full">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-12">
          {articles.map((article, i) => (
            <article key={i} className="bg-white overflow-hidden shadow-sm border-2 border-rose-50 rounded-3xl flex flex-col md:flex-row group hover:shadow-xl transition-all duration-500">
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden relative border-b md:border-b-0 md:border-r border-rose-50">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 border border-rose-100 text-xs font-black text-rose-600 rounded-full uppercase tracking-widest shadow-sm z-20">
                  {article.category}
                </div>
              </div>
              <div className="p-10 md:w-3/5 flex flex-col justify-center bg-white relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-rose-50 -rotate-45 transform origin-top-right transition-transform group-hover:scale-150 duration-700 -z-10"></div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
                  <CalendarDays className="h-4 w-4 text-orange-400" />
                  <time>{article.date}</time>
                </div>
                <h2 className="text-2xl font-sans font-extrabold text-slate-900 mb-4 group-hover:text-rose-500 transition-colors tracking-tight leading-snug">
                  <Link to="#">{article.title}</Link>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link to="#" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-rose-600 hover:text-orange-500 transition border-b-2 border-rose-200 hover:border-orange-500 pb-1 w-max">
                    Read Narrative <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-28 space-y-10">
            <div className="bg-white p-10 border-2 border-rose-50 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-orange-400"></div>
              <h3 className="text-2xl font-sans font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                <Tag className="h-5 w-5 text-rose-500" /> Compendium
              </h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li key={i} className="border-b border-rose-50 last:border-0 pb-3 last:pb-0">
                    <Link to="#" className="flex justify-between items-center text-slate-500 hover:text-rose-500 transition group py-1">
                      <span className="font-bold group-hover:translate-x-2 transition-transform duration-300">{cat}</span>
                      <ChevronRight className="w-4 h-4 text-rose-300 group-hover:text-rose-500 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-rose-500 via-orange-500 to-rose-600 p-10 shadow-xl rounded-3xl border border-rose-400/30 text-center relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=300" alt="Puppy" className="w-24 h-24 rounded-full mx-auto object-cover mb-6 border-4 border-white/20 shadow-md relative z-10" />
              <h3 className="text-2xl font-sans font-extrabold text-white mb-2 relative z-10">Join the Pack</h3>
              <p className="text-white/80 mb-8 font-medium text-sm relative z-10">Subscribe for exclusive insights.</p>
              <form className="space-y-4 relative z-10 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-xl focus:outline-none focus:border-white transition-colors placeholder-white/50 font-medium text-sm rounded-xl" />
                <button className="w-full bg-white hover:bg-rose-50 text-rose-600 text-xs uppercase tracking-widest rounded-xl font-bold py-4 px-4 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
