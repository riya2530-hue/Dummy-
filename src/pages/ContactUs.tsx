import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function ContactUs() {
  const faqs = [
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to select countries worldwide.' },
    { question: 'What is your return policy?', answer: 'Returns are accepted within 30 days of purchase.' },
    { question: 'How can I track my order?', answer: 'Tracking information is sent via email once your order ships.' },
    { question: 'How do I contact customer support?', answer: 'Email us at support@petparadise.com or call our support number during business hours.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Helmet>
        <title>Contact Us - PetParadise</title>
        <meta name="description" content="Reach out to the PetParadise team for support, inquiries, and assistance." />
        <link rel="canonical" href="https://petparadiseee.netlify.app/contact" />
      </Helmet>
      {/* Header */}
      <section className="relative bg-rose-900 py-28 text-center text-white overflow-hidden border-b border-rose-400/30">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=1600" alt="Cat background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-orange-500/80 to-rose-600/80 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6"
          >
            <span className="text-white drop-shadow-sm">Connect</span> With Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We welcome inquiries from our discerning clientele. Whether seeking advice on curated collections or requiring support, our devoted team is at your service.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-rose-300"></span>
                  <span className="text-rose-500 uppercase tracking-widest text-slate-900 font-bold text-xs">At Your Service</span>
                </div>
                <h2 className="text-3xl font-sans font-extrabold text-slate-900 mb-8">Contact Our <br/> Concierge</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="bg-rose-50 p-4 rounded-2xl text-rose-600 shadow-sm border-2 border-rose-100 flex-shrink-0 group-hover:-rotate-12 transition-transform">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-900 mb-1">Maison</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">PetParadise Headquarters<br/>123 Elegance Boulevard<br/>Austin, TX 78701</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="bg-rose-50 p-4 rounded-2xl text-rose-600 shadow-sm border-2 border-rose-100 flex-shrink-0 group-hover:rotate-12 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-900 mb-1">Direct Line</h3>
                      <p className="text-slate-500 font-medium text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="bg-rose-50 p-4 rounded-2xl text-rose-600 shadow-sm border-2 border-rose-100 flex-shrink-0 group-hover:-rotate-12 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-900 mb-1">Electronic Mail</h3>
                      <p className="text-slate-500 font-medium text-sm">concierge@petparadise.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="bg-rose-50 p-4 rounded-2xl text-rose-600 shadow-sm border-2 border-rose-100 flex-shrink-0 group-hover:rotate-12 transition-transform">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-900 mb-1">Visiting Hours</h3>
                      <ul className="text-slate-500 font-medium text-sm space-y-2">
                        <li className="flex justify-between w-48"><span className="text-slate-900 font-bold">Mon - Fri:</span> <span>9:00 AM – 6:00 PM</span></li>
                        <li className="flex justify-between w-48"><span className="text-slate-900 font-bold">Saturday:</span> <span>10:00 AM – 4:00 PM</span></li>
                        <li className="flex justify-between w-48"><span className="text-slate-900 font-bold">Sunday:</span> <span>Closed</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-12 shadow-xl border-2 border-rose-50 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-orange-400"></div>
                <h3 className="text-3xl font-sans font-extrabold text-slate-900 mb-8">Send an Inquiry</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Full Name</label>
                      <input type="text" id="name" className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-500 focus:bg-rose-50/50 transition-colors placeholder-slate-300 font-medium" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Email Address</label>
                      <input type="email" id="email" className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-500 focus:bg-rose-50/50 transition-colors placeholder-slate-300 font-medium" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-500 focus:bg-rose-50/50 transition-colors placeholder-slate-300 font-medium" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Subject</label>
                      <input type="text" id="subject" className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-500 focus:bg-rose-50/50 transition-colors placeholder-slate-300 font-medium" placeholder="Nature of inquiry" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-500 focus:bg-rose-50/50 transition-colors resize-none placeholder-slate-300 font-medium" placeholder="How may we assist you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 rounded-xl text-white font-bold py-4 px-6 transition duration-300 shadow-sm text-sm uppercase tracking-widest">
                    Dispatch Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-rose-50 border-t border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">Common Inquiries</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-rose-300"></span>
              <span className="text-rose-500 uppercase tracking-widest text-slate-900 font-bold text-xs">Knowledge Base</span>
              <span className="w-12 h-[2px] bg-rose-300"></span>
            </div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-rose-100 rounded-2xl group hover:border-rose-300 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-sans font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">{faq.question}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
