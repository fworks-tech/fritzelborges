import type { Dictionary } from "@/i18n/types";

export const dictionary: Dictionary = {
  metadata: {
    title: "Fabio RItzel Borges | Senior Full Stack Software Engineer",
    description:
      "I build web products focused on quality, performance, and user experience.",
    keywords: [
      "Full Stack",
      "Laravel",
      "React",
      "TypeScript",
      "Next.js",
      "APIs",
      "UX",
    ],
  },
  nav: [
    { href: "#inicio", label: "Home" },
    { href: "#sobre", label: "About" },
    { href: "#habilidades", label: "Skills" },
    { href: "#experiencia", label: "Experience" },
    { href: "#projetos", label: "Projects" },
    { href: "#contato", label: "Contact" },
  ],
  header: {
    navAria: "Main",
    mobileNavAria: "Mobile",
    openMenu: "Open menu",
  },
  footer: {
    tagline: "Personal site — Laravel, React, and TypeScript day to day.",
    repository: "Repository",
    rights: "All rights reserved.",
  },
  hero: {
    eyebrow: "Professional portfolio",
    role: "Senior Full Stack Software Engineer",
    tagline:
      "I build web products focused on quality, performance, and user experience.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View work",
    highlights: [
      { label: "Focus", value: "APIs, front-end, and continuous delivery" },
      { label: "Stack", value: "Laravel · React · TypeScript" },
      { label: "Location", value: "Brazil · remote-friendly" },
    ],
  },
  about: {
    title: "About",
    heading: "Software engineering with a product mindset",
    paragraphs: [
      "I work across the full development cycle: architecture, implementation, testing, and operations. I balance technical pragmatism with clarity for the team and the business — from API design to polished React interfaces.",
      "I value readable code, well-defined API contracts, and foundations that evolve smoothly. When it makes sense, I use TypeScript end to end to reduce regressions and improve the developer experience.",
    ],
  },
  skills: {
    title: "Skills",
    heading: "What I usually bring to the team",
    items: [
      "Laravel & PHP",
      "React & Next.js",
      "TypeScript & JavaScript",
      "REST & integrations",
      "PostgreSQL / MySQL",
      "Git, CI/CD",
      "Responsive UI & accessibility",
      "Basic observability",
    ],
  },
  experience: {
    title: "Experience",
    heading: "Career snapshot",
    note: "Replace with real roles — these blocks are placeholders for structure and tone (issue #12).",
    items: [
      {
        title: "Senior software engineer",
        org: "Company / consultancy — example",
        period: "20XX — present",
        summary:
          "Technical leadership in agile squads, API standards, and architecture reviews. Delivery of critical features with Laravel and a React front end.",
      },
      {
        title: "Software engineer",
        org: "Digital product — example",
        period: "20XX — 20XX",
        summary:
          "Full-stack development, third-party integrations, performance improvements, and technical debt reduction in legacy codebases.",
      },
      {
        title: "Developer",
        org: "Agency / startup — example",
        period: "20XX — 20XX",
        summary:
          "MVPs, landing pages, and admin dashboards with a focus on time to market and user-perceived quality.",
      },
    ],
  },
  projects: {
    title: "Projects",
    heading: "Selected work",
    items: [
      {
        name: "Internal operations platform",
        description:
          "Admin panel with granular permissions, queues, and reporting. Laravel API + React SPA.",
        stack: "Laravel · React · TS · PostgreSQL",
        cta: "Details coming soon",
      },
      {
        name: "Public API with living documentation",
        description:
          "Versioned contracts, strict validation, and observability for integrators.",
        stack: "Laravel · OpenAPI · Redis",
        cta: "Details coming soon",
      },
      {
        name: "High-performance marketing site",
        description:
          "Static content with strong Lighthouse scores; forms with anti-spam protection.",
        stack: "Next.js · Vercel",
        cta: "Details coming soon",
      },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Let's talk",
    body: "Open to opportunities, focused consulting, and projects with teams that care about good practices. Send context and timelines.",
    emailCta: "Send email",
    linkedinCta: "LinkedIn",
  },
  notFound: {
    metadataTitle: "Page not found",
    metadataDescription: "This address does not exist or has moved.",
    code: "Error 404",
    heading: "Page not found",
    body: "Check the URL or return to the home page to keep browsing.",
    homeCta: "Go to home",
  },
  languageSwitcher: {
    label: "Language",
    en: "English",
    pt: "Português",
  },
};
