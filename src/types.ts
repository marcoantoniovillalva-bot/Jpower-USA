export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface ValuePoint {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface Content {
  nav: {
    services: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    highlights: string[];
    metrics: {
      value: string;
      label: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    stats: Stat[];
    values: ValuePoint[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: HowItWorksStep[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    items: TestimonialItem[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    success: string;
    availability: string;
  };
}
