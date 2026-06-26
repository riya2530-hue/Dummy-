import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-rose-100 shadow-sm shadow-rose-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-rose-50 p-2 rounded-xl text-rose-500 border border-rose-100 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                <PawPrint className="h-6 w-6" />
              </div>
              <span className="font-sans font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">PetParadise</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide font-bold transition-all duration-300 hover:text-rose-500 ${
                  isActive(link.path) ? 'text-rose-500' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-rose-500 focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-rose-100 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-rose-500 bg-rose-50 border-l-4 border-rose-500'
                      : 'text-slate-600 hover:text-rose-500 hover:bg-rose-50/50 hover:border-l-4 hover:border-rose-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
