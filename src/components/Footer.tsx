import { Link } from 'react-router-dom';
import { PawPrint, Facebook, Instagram, Twitter, Youtube, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100 text-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white p-2 rounded-xl text-rose-500 border border-rose-200 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                <PawPrint className="h-5 w-5" />
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">PetParadise</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Curating the finest in luxury accessories for your cherished companions. Elevate every moment.
            </p>
          </div>
          
          <div>
            <h3 className="font-sans font-extrabold text-lg mb-6 text-slate-900 tracking-wide">Collections</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">About Us</Link></li>
              <li><Link to="/products" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Products</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Journal</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-extrabold text-lg mb-6 text-slate-900 tracking-wide">Legal & Care</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Privacy Policy</Link></li>
              <li><Link to="#" className="text-slate-500 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-bold">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-extrabold text-lg mb-6 text-slate-900 tracking-wide">Social Society</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl border border-rose-200 bg-white flex items-center justify-center text-rose-400 hover:text-rose-600 hover:border-rose-400 hover:bg-rose-50 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-rose-200 bg-white flex items-center justify-center text-rose-400 hover:text-rose-600 hover:border-rose-400 hover:bg-rose-50 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-rose-200 bg-white flex items-center justify-center text-rose-400 hover:text-rose-600 hover:border-rose-400 hover:bg-rose-50 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-rose-200 bg-white flex items-center justify-center text-rose-400 hover:text-rose-600 hover:border-rose-400 hover:bg-rose-50 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-rose-200 text-center text-xs tracking-widest uppercase font-bold text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright &copy; 2026 PetParadise. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-rose-300 fill-rose-300" />
            <span>Premium Quality Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
