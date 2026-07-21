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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
               <Route path="/terms-conditions" element={<TermsConditions />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/checkout" element={<Checkout />} />
               <Route path="/order-success" element={<OrderSuccess />} />

            </Routes>
          </main>
          <Footer />
        </div>
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
