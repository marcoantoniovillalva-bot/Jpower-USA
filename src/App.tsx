/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'motion/react';
import { 
  Zap, Power, Cable, Wrench, Cpu, Wind, PlusCircle, Lightbulb, Home, 
  BatteryCharging, ToggleRight, Phone, Mail, MapPin, ChevronDown, 
  Menu, X, Globe, ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { EN, ES, CONTACT_INFO } from './constants';
import { Content } from './types';

// --- Image Generation Helper ---
const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ parts: [{ text: prompt }] }],
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};

// --- Components ---

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 120, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[110px]"
      />
    </div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }} 
      />
      <div 
        className="custom-cursor-follower" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
          opacity: isHovering ? 0.5 : 1
        }} 
      />
    </>
  );
};

const Navbar = ({ lang, setLang, content }: { lang: 'EN' | 'ES', setLang: (l: 'EN' | 'ES') => void, content: Content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.services, href: "#services" },
    { name: content.nav.about, href: "#about" },
    { name: content.nav.faq, href: "#faq" },
    { name: content.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-bold text-dark flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Zap className="text-primary fill-primary" />
          <span>JPower<span className="text-primary">Electric</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-dark font-medium animated-underline hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 hover:bg-dark/10 transition-colors font-medium"
          >
            <Globe size={18} />
            {lang}
          </button>
          <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary py-3 px-6 text-sm">
            {content.hero.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-medium text-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-dark/10">
              <button 
                onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
                className="flex items-center gap-2 font-medium"
              >
                <Globe size={20} />
                {lang === 'EN' ? 'English' : 'Español'}
              </button>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary font-bold flex items-center gap-2">
                <Phone size={20} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count}{suffix}
    </div>
  );
};

const ServiceIcon = ({ name }: { name: string }) => {
  const icons: Record<string, any> = {
    Zap, Power, Cable, Wrench, Cpu, Wind, PlusCircle, Lightbulb, Home, BatteryCharging, ToggleRight
  };
  const Icon = icons[name] || Zap;
  return <Icon className="w-8 h-8 text-primary" />;
};

export default function App() {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');
  const [images, setImages] = useState<{ 
    hero: string[], 
    about: string | null,
    services: Record<string, string>
  }>({ 
    hero: [], 
    about: null,
    services: {}
  });
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true);
  const content = lang === 'EN' ? EN : ES;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoadingImages(true);
      const [h1, h2, h3, aboutImg, s1, s2, s3] = await Promise.all([
        generateImage("A professional electrician working on a modern, clean electrical panel in a high-end Miami home. Cinematic lighting, professional, high quality, 16:9 aspect ratio."),
        generateImage("Close up of modern smart home electrical wiring and high-tech components. Professional, clean, technical, high quality, 16:9 aspect ratio."),
        generateImage("A professional electrician installing a modern EV charging station in a luxury garage. Professional, high quality, 16:9 aspect ratio."),
        generateImage("A modern luxury house in Miami at night with beautiful architectural lighting. Professional photography, high quality, 4:3 aspect ratio."),
        generateImage("Industrial electrical installation with complex wiring and panels. Professional, high quality, 1:1 aspect ratio."),
        generateImage("Modern backup generator installed outside a luxury home. Professional, high quality, 1:1 aspect ratio."),
        generateImage("High-end indoor designer lighting installation in a modern living room. Professional, high quality, 1:1 aspect ratio.")
      ]);

      setImages({ 
        hero: [h1, h2, h3].filter(Boolean) as string[], 
        about: aboutImg,
        services: {
          "Emergency": s1 || '',
          "Generators": s2 || '',
          "Lighting Installations": s3 || ''
        }
      });
      setLoadingImages(false);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.hero.length > 1) {
      const interval = setInterval(() => {
        setCurrentHeroIndex((prev) => (prev + 1) % images.hero.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [images.hero]);

  return (
    <div className="relative">
      <CustomCursor />
      <DynamicBackground />
      <Navbar lang={lang} setLang={setLang} content={content} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {images.hero.length > 0 ? (
              <motion.img 
                key={currentHeroIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                src={images.hero[currentHeroIndex]} 
                alt="Professional Electrical Work" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              loadingImages && <div className="w-full h-full bg-dark/50 animate-pulse" />
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
          
          {/* Slideshow Indicators */}
          {images.hero.length > 1 && (
            <div className="absolute bottom-12 left-6 flex gap-3 z-20">
              {images.hero.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === currentHeroIndex ? 'w-8 bg-primary' : 'w-4 bg-white/20'}`}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0090C6_0%,transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white font-display font-bold leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
            >
              {content.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/70 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed"
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-6"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary text-lg px-10 py-5 flex items-center gap-3">
                <Phone size={24} />
                {content.hero.cta}
              </a>
              <a href="#services" className="btn-outline border-white/30 text-white hover:bg-white hover:text-dark px-10 py-5 text-lg">
                {content.nav.services}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          style={{ y: y2 }}
          className="absolute right-[-10%] bottom-[-10%] w-[60%] aspect-square opacity-10 pointer-events-none"
        >
          <Zap className="w-full h-full text-primary" strokeWidth={0.5} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title text-dark">{content.about.title}</h2>
              <p className="text-dark/70 text-xl leading-relaxed mb-12">
                {content.about.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12 lg:mb-0">
                {content.about.stats.map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-dark/5 border border-dark/5 hover:border-primary/20 transition-colors">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <div className="text-dark/60 font-medium mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
              >
                {images.about ? (
                  <img 
                    src={images.about} 
                    alt="Modern Miami Home" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-dark/5 animate-pulse flex items-center justify-center">
                    <Zap className="text-primary/20 w-20 h-20 animate-bounce" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-dark/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <div className="font-bold text-dark">Certified Experts</div>
                    <div className="text-dark/60 text-sm">State of Florida</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-8">
            {content.about.values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 p-8 rounded-3xl bg-dark/5 border border-dark/5"
              >
                <div className="text-primary font-display font-bold text-3xl">0{i + 1}.</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-dark text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-white"
            >
              {content.services.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl"
            >
              {content.services.subtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group overflow-hidden relative"
              >
                {/* Service Image Background (Optional) */}
                {images.services[service.title] && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src={images.services[service.title]} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title text-center mb-16">{content.faq.title}</h2>
          <div className="space-y-4">
            {content.faq.items.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark text-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title text-white">{content.contact.title}</h2>
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Phone</div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-bold hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-2xl font-bold hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Address</div>
                    <div className="text-2xl font-bold">{CONTACT_INFO.address}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-16">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#"
                    whileHover={{ y: -5, backgroundColor: '#0090C6' }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">{content.contact.name}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">{content.contact.email}</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/50 uppercase tracking-wider">{content.contact.message}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>
                <button className="btn-primary w-full py-5 text-lg">
                  {content.contact.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark border-t border-white/5 text-white/40">
        <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold text-white flex items-center gap-2">
            <Zap className="text-primary fill-primary" size={20} />
            <span>JPower<span className="text-primary">Electric</span></span>
          </div>
          <p>© {new Date().getFullYear()} JPower Electric. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <motion.a 
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-40"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-dark/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="text-xl font-bold">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-dark/60 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
