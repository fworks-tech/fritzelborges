export type NavItem = {
  href: string;
  label: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  summary: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  href?: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string;
  cta: string;
  href?: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: NavItem[];
  header: {
    navAria: string;
    mobileNavAria: string;
    openMenu: string;
  };
  footer: {
    tagline: string;
    repository: string;
    rights: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: HeroHighlight[];
  };
  about: {
    title: string;
    heading: string;
    paragraphs: [string, string];
  };
  skills: {
    title: string;
    heading: string;
    items: string[];
  };
  experience: {
    title: string;
    heading: string;
    note: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    heading: string;
    items: EducationItem[];
  };
  projects: {
    title: string;
    heading: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    heading: string;
    body: string;
    linkedinCta: string;
  };
  notFound: {
    metadataTitle: string;
    metadataDescription: string;
    code: string;
    heading: string;
    body: string;
    homeCta: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    pt: string;
  };
};
