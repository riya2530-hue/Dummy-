/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
