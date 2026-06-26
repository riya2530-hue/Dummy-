import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Heart, Shield, Lightbulb, Smile, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const team = [
    { name: 'Emily Carter', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Michael Johnson', role: 'Product Development Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Sophia Williams', role: 'Customer Success Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Daniel Brown', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' },
  ];

  const values = [
    { title: 'Pet First', icon: Heart, desc: 'Every decision starts with the well-being of pets.' },
    { title: 'Quality', icon: Shield, desc: 'We carefully select products that meet high standards.' },
    { title: 'Innovation', icon: Lightbulb, desc: 'We continuously introduce modern and practical pet solutions.' },
    { title: 'Customer Satisfaction', icon: Smile, desc: 'Happy customers and happy pets are our greatest achievements.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Helmet>
        <title>About Us - PetParadise</title>
        <meta name="description" content="Learn more about PetParadise, our values, our team, and our commitment to bringing you the best accessories for your pets." />
        <link rel="canonical" href="https://petparadiseee.netlify.app/about" />
      </Helmet>
      {/* Header */}
      <section className="relative bg-rose-900 py-28 text-center text-white overflow-hidden border-b border-rose-400/30">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1600" alt="Pet friends" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-orange-500/80 to-rose-600/80 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 italic drop-shadow-sm">Heritage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto font-medium"
          >
            A legacy of devotion, curating the finest in luxury pet essentials to elevate the lives of our cherished companions.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white border-b border-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-rose-300"></span>
                <span className="text-rose-500 uppercase tracking-[0.2em] text-xs font-bold">The Genesis</span>
              </div>
              <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-6 leading-tight">A Commitment to <br /> Uncompromised Elegance</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  PetParadise was founded with a singular, unwavering mission: to elevate the standard of pet care through thoughtfully designed, premium essentials that harmonize with modern living spaces.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  As passionate connoisseurs of design and devoted animal lovers, we recognize that pets are distinguished members of the family. Our artisans and curators collaborate globally to bring you accessories that define comfort, durability, and sophisticated style.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 max-w-md mx-auto border border-rose-500/20 group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600" alt="Happy dogs and cats" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-10 -right-8 w-64 h-64 bg-rose-100 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="absolute -bottom-10 -left-8 w-72 h-72 bg-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-rose-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 shadow-sm border border-rose-100/80 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
              <h3 className="text-2xl font-sans font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle className="text-rose-500 w-6 h-6" /> Our Mission
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                To provide innovative, safe, and impeccably designed pet accessories that enhance the lives of pets and their families seamlessly.
              </p>
            </div>
            <div className="bg-white p-12 shadow-sm border border-rose-100/80 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              <h3 className="text-2xl font-sans font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle className="text-orange-500 w-6 h-6" /> Our Vision
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                To become the most trusted and elegant destination for luxury pet lifestyle accessories worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-rose-300"></span>
              <span className="text-rose-500 uppercase tracking-widest text-slate-900 font-bold text-xs">Pillars of Excellence</span>
              <span className="w-12 h-[2px] bg-rose-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <div key={i} className="text-center rounded-3xl p-8 bg-rose-50 border border-rose-100 group hover:bg-rose-500 hover:border-rose-500 transition-colors duration-500">
                <div className="inline-flex bg-white p-4 rounded-2xl text-rose-500 border border-rose-200 shadow-sm mb-6 group-hover:bg-rose-400/20 group-hover:border-rose-400 group-hover:text-rose-100 transition-colors duration-500">
                  <v.icon className="h-8 w-8 stroke-[2]" />
                </div>
                <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-500">{v.title}</h3>
                <p className="text-slate-500 font-medium group-hover:text-rose-100 transition-colors duration-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-gradient-to-b from-rose-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0,_transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-extrabold mb-4 tracking-tight">
              The Royal Curators
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-white/50"></span>
              <span className="text-white uppercase tracking-widest font-bold text-xs">Our Experts</span>
              <span className="w-12 h-[2px] bg-white/50"></span>
            </div>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">The passionate artisans and animal lovers orchestrating the PetParadise experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="text-center flex flex-col items-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-rose-200/50 scale-110 group-hover:scale-100 transition-all duration-500"></div>
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white/20 group-hover:border-rose-200/50 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-sans font-extrabold mb-2 text-white">{member.name}</h3>
                <p className="text-rose-200 text-sm uppercase tracking-widest font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
