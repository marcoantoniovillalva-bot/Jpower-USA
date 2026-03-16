
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  ChevronDown,
  Clock3,
  Cpu,
  Facebook,
  Globe,
  Home,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlusCircle,
  Power,
  ShieldCheck,
  ToggleRight,
  Wind,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { CONTACT_INFO, EN, ES } from './constants';
import type { Content } from './types';

type SectionImages = {
  hero: string[];
  about: string;
  services: Record<string, string>;
};

type LightboxState = {
  src: string;
  alt: string;
} | null;

const ICONS = {
  Zap,
  Power,
  Cable,
  Wrench,
  Cpu,
  Wind,
  PlusCircle,
  Lightbulb,
  Home,
  BatteryCharging,
  ToggleRight,
};

const BRAND_LOGO = '/brand/jpower-square.png';

const createPlaceholderDataUrl = (title: string, subtitle: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 840">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#00072B"/>
          <stop offset="55%" stop-color="#004F8F"/>
          <stop offset="100%" stop-color="#0090C6"/>
        </linearGradient>
        <radialGradient id="glow" cx="0.85" cy="0.2" r="0.8">
          <stop offset="0%" stop-color="rgba(134,236,255,0.95)"/>
          <stop offset="100%" stop-color="rgba(134,236,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="1280" height="840" rx="42" fill="url(#bg)"/>
      <rect x="56" y="56" width="1168" height="728" rx="36" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)"/>
      <circle cx="1040" cy="160" r="260" fill="url(#glow)"/>
      <path d="M318 160h144l-94 174h108L338 612l56-186H286l32-92h100z" fill="rgba(255,255,255,0.92)"/>
      <text x="92" y="650" fill="white" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700">${title}</text>
      <text x="92" y="716" fill="rgba(255,255,255,0.72)" font-family="Inter, Arial, sans-serif" font-size="32">${subtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const getFallbackImages = (): SectionImages => ({
  hero: [
    '/generated/hero-1.png',
    '/generated/hero-2.png',
    '/generated/hero-3.png',
  ],
  about: '/generated/about.png',
  services: {
    emergency: '/generated/service-emergency.png',
    generators: '/generated/service-generators.png',
    wiring: '/generated/service-wiring.png',
    panels: '/generated/service-panels.png',
    lighting: '/generated/service-lighting.png',
    'ev-charging': '/generated/service-ev-charging.png',
  },
});

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2.4 + 0.8,
      speedX: (Math.random() - 0.5) * 0.0012,
      speedY: (Math.random() - 0.5) * 0.0012,
      alpha: Math.random() * 0.45 + 0.18,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0) particle.x = 1;
        if (particle.x > 1) particle.x = 0;
        if (particle.y < 0) particle.y = 1;
        if (particle.y > 1) particle.y = 0;

        const x = particle.x * canvas.offsetWidth;
        const y = particle.y * canvas.offsetHeight;
        const pulse = 0.3 + Math.sin((frame + index * 11) * 0.03) * 0.12;
        const radius = particle.size + pulse;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 6);
        gradient.addColorStop(0, `rgba(134,236,255,${particle.alpha})`);
        gradient.addColorStop(1, 'rgba(134,236,255,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const ax = particles[i].x * canvas.offsetWidth;
          const ay = particles[i].y * canvas.offsetHeight;
          const bx = particles[j].x * canvas.offsetWidth;
          const by = particles[j].y * canvas.offsetHeight;
          const distance = Math.hypot(ax - bx, ay - by);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(0,144,198,${(1 - distance / 120) * 0.14})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [reduceMotion]);

  if (reduceMotion) return null;
  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />;
};

const TechLines = ({ soft = false }: { soft?: boolean }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${soft ? 'opacity-50' : 'opacity-90'}`}>
    <div className="absolute left-0 right-0 top-[18%] h-px bg-[linear-gradient(90deg,transparent,rgba(134,236,255,0.45),transparent)]" />
    <div className="absolute left-0 right-0 top-[62%] h-px bg-[linear-gradient(90deg,transparent,rgba(0,144,198,0.3),transparent)]" />
    <div className="absolute bottom-10 left-10 h-24 w-24 border-b border-l border-primary/25" />
    <div className="absolute right-10 top-10 h-24 w-24 border-r border-t border-[#86ECFF]/25" />
    <motion.div
      animate={{ x: ['-8%', '108%'] }}
      transition={{ duration: soft ? 8 : 6, repeat: Infinity, ease: 'linear' }}
      className="absolute top-[30%] h-px w-36 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]"
    />
  </div>
);

const Lightbox = ({ item, onClose }: { item: LightboxState; onClose: () => void }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00072B]/92 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 210 }}
          className="relative w-full max-w-5xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button onClick={onClose} className="absolute -top-12 right-0 text-white/70 transition hover:text-white" aria-label="Close preview">
            <X size={28} />
          </button>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <img src={item.src} alt={item.alt} className="max-h-[82vh] w-full object-cover" />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
const Brand = ({ dark = false, lang = 'EN' }: { dark?: boolean; lang?: 'EN' | 'ES' }) => (
  <div className="flex items-center gap-3">
    <div className={`relative flex h-[4.35rem] w-[4.35rem] shrink-0 items-center justify-center overflow-hidden rounded-[1.5rem] border p-1 ${dark ? 'border-dark/10 bg-white shadow-[0_16px_40px_rgba(0,7,43,0.12)]' : 'border-white/20 bg-white/12 shadow-[0_20px_45px_rgba(0,144,198,0.22)] backdrop-blur-md'}`}>
      <img src={BRAND_LOGO} alt="JPower Electric logo" className="h-full w-full object-contain object-center" />
    </div>
    <div>
      <div className={`font-display text-xl font-bold tracking-[-0.04em] md:text-2xl ${dark ? 'text-dark' : 'text-white'}`}>JPower Electric</div>
      <div className={`${dark ? 'text-dark/50' : 'text-white/58'} text-xs uppercase tracking-[0.24em]`}>
        {lang === 'EN' ? 'Miami Electrical Services' : 'Servicios Electricos en Miami'}
      </div>
    </div>
  </div>
);

const Navbar = ({ lang, setLang, content }: { lang: 'EN' | 'ES'; setLang: (lang: 'EN' | 'ES') => void; content: Content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.services, href: '#services' },
    { label: content.nav.faq, href: '#faq' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border px-4 py-3 transition-all duration-300 md:px-6 ${isScrolled ? 'border-white/20 bg-[#00072B]/80 shadow-[0_20px_70px_rgba(0,7,43,0.32)] backdrop-blur-xl' : 'border-white/10 bg-[#00072B]/36 backdrop-blur-md'}`}>
        <a href="#" aria-label="JPower Electric home">
          <Brand lang={lang} />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="animated-underline text-sm font-medium text-white/82 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <button onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/14">
            <Globe size={16} />
            {lang}
          </button>
          <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary px-6 py-3 text-sm">
            {content.hero.cta}
          </a>
        </div>

        <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/15 bg-[#00072B]/94 p-6 shadow-[0_24px_80px_rgba(0,7,43,0.35)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-5">
                <button onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')} className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  <Globe size={18} />
                  {lang === 'EN' ? 'English' : 'Espanol'}
                </button>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-semibold text-[#86ECFF]">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 72;
    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  }, [value]);

  return <div className="font-display text-4xl font-bold tracking-[-0.05em] text-primary md:text-5xl">{count}{suffix}</div>;
};

const ServiceIcon = ({ name }: { name: string }) => {
  const Icon = ICONS[name as keyof typeof ICONS] || Zap;
  return <Icon className="h-6 w-6 text-primary" />;
};

const HeroSection = ({ content, images, currentHeroIndex, lang }: { content: Content; images: SectionImages; currentHeroIndex: number; lang: 'EN' | 'ES' }) => {
  const reduceMotion = useReducedMotion();
  const ui = lang === 'EN'
    ? {
        certifiedTitle: 'Certified work',
        certifiedBody: 'Panels, circuits, lighting, and high-priority repairs handled with code-first discipline.',
        contactTitle: 'Fast contact',
        contactBody: 'Clear next steps, quick scheduling, and emergency availability when the issue cannot wait.',
      }
    : {
        certifiedTitle: 'Trabajo certificado',
        certifiedBody: 'Paneles, circuitos, iluminacion y reparaciones prioritarias ejecutadas con criterio de codigo.',
        contactTitle: 'Contacto rapido',
        contactBody: 'Pasos claros, agenda rapida y disponibilidad para emergencias cuando el problema no puede esperar.',
      };

  return (
    <section className="relative overflow-hidden bg-dark px-4 pb-18 pt-32 text-white md:px-6 md:pb-24 md:pt-36">
      <div className="absolute inset-0">
        <ParticleBackground />
        <AnimatePresence mode="wait">
          <motion.img key={currentHeroIndex} src={images.hero[currentHeroIndex]} alt="Electrical service showcase" className="h-full w-full object-cover opacity-[0.34]" initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }} animate={{ opacity: 0.34, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0.1 : 1.2, ease: 'easeOut' }} />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(0,7,43,0.96)_0%,rgba(0,7,43,0.86)_42%,rgba(0,7,43,0.32)_100%)]" />
        <TechLines />
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(134,236,255,0.24),transparent_68%)]" />
        <motion.div animate={{ x: ['-10%', '110%'] }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} className="absolute top-[14%] h-24 w-52 -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-end">
        <div className="max-w-3xl">
          <span className="eyebrow border-white/14 bg-white/8 text-[#86ECFF]">{content.hero.eyebrow}</span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,6.6rem)] font-bold leading-[0.9] tracking-[-0.055em]">
            {content.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
            {content.hero.subtitle}
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.hero.highlights.map((highlight) => (
              <div key={highlight} className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white/82 backdrop-blur-sm">{highlight}</div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary px-8 py-4 text-base md:text-lg"><Phone size={20} />{content.hero.cta}</a>
            <a href="#services" className="btn-outline border-white/20 bg-white/7 px-8 py-4 text-base text-white hover:border-white hover:bg-white hover:text-dark md:text-lg">{content.hero.secondaryCta}</a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {content.hero.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.8rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                <div className="font-display text-3xl font-bold tracking-[-0.05em] text-[#86ECFF]">{metric.value}</div>
                <div className="mt-2 text-sm text-white/68">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:pb-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3 text-[#86ECFF]"><ShieldCheck size={20} /><span className="text-sm font-semibold uppercase tracking-[0.2em]">{ui.certifiedTitle}</span></div>
              <p className="text-sm leading-7 text-white/72">{ui.certifiedBody}</p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3 text-[#86ECFF]"><Clock3 size={20} /><span className="text-sm font-semibold uppercase tracking-[0.2em]">{ui.contactTitle}</span></div>
              <p className="text-sm leading-7 text-white/72">{ui.contactBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const AboutSection = ({ content, image, lang }: { content: Content; image: string; lang: 'EN' | 'ES' }) => (
  <section id="about" className="relative px-4 py-20 md:px-6 md:py-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,144,198,0.08),transparent_26%)]" />
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_1.05fr] lg:items-center">
      <div className="space-y-6">
        <span className="eyebrow">{content.about.eyebrow}</span>
        <h2 className="section-title max-w-3xl text-dark">{content.about.title}</h2>
        <p className="max-w-2xl text-lg leading-8 text-dark/68">{content.about.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.about.stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -4 }} className="panel p-6">
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-dark/48">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="panel overflow-hidden p-3">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            <img src={image} alt="JPower Electric work example" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,7,43,0.04)_0%,rgba(0,7,43,0.58)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 text-white">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#86ECFF]">{lang === 'EN' ? 'Service standard' : 'Estandar de servicio'}</div>
                <div className="mt-2 text-2xl font-semibold">{lang === 'EN' ? 'Clean installs, safe execution, and code-compliant results.' : 'Instalaciones limpias, ejecucion segura y resultados conforme al codigo.'}</div>
              </div>
              <div className="hidden rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:block">Miami, FL</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.about.values.map((value, index) => (
            <motion.div key={value.title} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-dark/8 bg-[#F8FCFF] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">0{index + 1}</div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-dark">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-dark/68">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = ({ content, images, lang, onPreview }: { content: Content; images: Record<string, string>; lang: 'EN' | 'ES'; onPreview: (item: LightboxState) => void }) => {
  const featured = content.services.items.filter((item) => item.featured);
  const remaining = content.services.items.filter((item) => !item.featured);

  return (
    <section id="services" className="relative overflow-hidden bg-dark px-4 py-20 text-white md:px-6 md:py-24">
      <TechLines soft />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(0,144,198,0.18),transparent_70%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="eyebrow border-white/12 bg-white/8 text-[#86ECFF]">{content.services.eyebrow}</span>
          <h2 className="section-title mt-6 text-white">{content.services.title}</h2>
          <p className="max-w-2xl text-lg leading-8 text-white/66">{content.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((service) => (
            <motion.button key={service.id} type="button" whileHover={{ y: -8 }} onClick={() => onPreview({ src: images[service.id], alt: service.title })} className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 text-left shadow-[0_24px_70px_rgba(0,7,43,0.22)]">
              <div className="relative">
                <img src={images[service.id]} alt={service.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,7,43,0.04)_5%,rgba(0,7,43,0.88)_100%)]" />
                <motion.div animate={{ x: ['-120%', '120%'] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'linear', delay: 0.4 }} className="absolute top-0 h-full w-24 rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] blur-md" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 backdrop-blur-md"><ServiceIcon name={service.icon} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86ECFF]">{lang === 'EN' ? 'Featured' : 'Destacado'}</div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/86"><ArrowRight size={15} />{lang === 'EN' ? 'Click to expand image' : 'Haz clic para ampliar la imagen'}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {remaining.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-primary/40 hover:bg-white/8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/14"><ServiceIcon name={service.icon} /></div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[1.7rem] border border-dark/8 bg-white px-6 py-2 shadow-[0_18px_50px_rgba(0,7,43,0.06)]">
      <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setIsOpen((open) => !open)}>
        <span className="text-lg font-semibold text-dark md:text-xl">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="text-primary" /></motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-5 pr-8 text-base leading-7 text-dark/68">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = ({ content, heroImage, lang }: { content: Content; heroImage: string; lang: 'EN' | 'ES' }) => (
  <section id="contact" className="relative overflow-hidden bg-[#031137] px-4 py-20 text-white md:px-6 md:py-24">
    <TechLines soft />
    <div className="absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_bottom,rgba(134,236,255,0.14),transparent_72%)]" />
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-6">
        <span className="eyebrow border-white/14 bg-white/8 text-[#86ECFF]">{content.contact.eyebrow}</span>
        <h2 className="section-title text-white">{content.contact.title}</h2>
        <p className="max-w-xl text-lg leading-8 text-white/68">{content.contact.description}</p>

        <div className="space-y-4">
          {[
            { icon: Phone, label: lang === 'EN' ? 'Phone' : 'Telefono', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
            { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
            { icon: MapPin, label: lang === 'EN' ? 'Address' : 'Direccion', value: CONTACT_INFO.address, href: '#' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition hover:bg-white/9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/18"><item.icon className="text-[#86ECFF]" size={20} /></div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/46">{item.label}</div>
                <div className="mt-1 text-lg font-semibold text-white">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img src={heroImage} alt="JPower Electric visual" className="aspect-[5/4] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,7,43,0.08)_0%,rgba(0,7,43,0.74)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-[#86ECFF]">{content.contact.availability}</div>
              <div className="mt-2 text-2xl font-semibold">{lang === 'EN' ? 'Ready for quotes, upgrades, and urgent calls.' : 'Listos para cotizaciones, mejoras y llamadas urgentes.'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2.2rem] border border-white/10 bg-white/7 p-7 shadow-[0_28px_80px_rgba(0,7,43,0.28)] backdrop-blur-xl md:p-10">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/46">{content.contact.name}</span><input type="text" className="w-full rounded-2xl border border-white/12 bg-white/7 px-5 py-4 text-white placeholder:text-white/28" /></label>
          <label className="space-y-2"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/46">{content.contact.email}</span><input type="email" className="w-full rounded-2xl border border-white/12 bg-white/7 px-5 py-4 text-white placeholder:text-white/28" /></label>
        </div>
        <div className="mt-5"><label className="space-y-2"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/46">{content.contact.phone}</span><input type="tel" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/7 px-5 py-4 text-white placeholder:text-white/28" /></label></div>
        <div className="mt-5"><label className="space-y-2"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/46">{content.contact.message}</span><textarea rows={7} className="mt-2 w-full rounded-2xl border border-white/12 bg-white/7 px-5 py-4 text-white placeholder:text-white/28" /></label></div>
        <button className="btn-primary mt-8 w-full py-5 text-base md:text-lg"><ArrowRight size={20} />{content.contact.send}</button>
        <div className="mt-7 flex flex-wrap items-center gap-3">{[Facebook, Instagram, Linkedin].map((Icon, index) => (<a key={index} href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/7 text-white/78 transition hover:bg-primary hover:text-white"><Icon size={18} /></a>))}</div>
      </div>
    </div>
  </section>
);
export default function App() {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [images, setImages] = useState<SectionImages>(getFallbackImages);
  const [lightboxItem, setLightboxItem] = useState<LightboxState>(null);

  const content = useMemo(() => (lang === 'EN' ? EN : ES), [lang]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHeroIndex((index) => (index + 1) % images.hero.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [images.hero.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxItem(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar lang={lang} setLang={setLang} content={content} />
      <HeroSection content={content} images={images} currentHeroIndex={currentHeroIndex} lang={lang} />

      <AboutSection content={content} image={images.about} lang={lang} />
      <ServicesSection content={content} images={images.services} lang={lang} onPreview={setLightboxItem} />

      <section id="faq" className="px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="eyebrow">{content.faq.title}</span>
            <h2 className="section-title mt-6 text-dark">{lang === 'EN' ? 'Answers before the call.' : 'Respuestas antes de llamar.'}</h2>
          </div>
          <div className="mt-12 space-y-4">
            {content.faq.items.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection content={content} heroImage={images.hero[0]} lang={lang} />

      <footer className="border-t border-white/8 bg-dark px-4 py-10 text-white/48 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Brand lang={lang} />
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#about" className="transition hover:text-white">{content.nav.about}</a>
            <a href="#services" className="transition hover:text-white">{content.nav.services}</a>
            <a href="#contact" className="transition hover:text-white">{content.nav.contact}</a>
          </div>
        </div>
      </footer>

      <motion.a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_45px_rgba(37,211,102,0.4)]" aria-label="Open WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}

