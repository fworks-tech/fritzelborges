import type { Dictionary } from "@/i18n/types";

export const dictionary: Dictionary = {
  metadata: {
    title: "Fábio Ritzel Borges | Senior Full Stack Engineer",
    description:
      "Full-stack engineer focused on TypeScript, React, and Node.js — scalable architectures, GraphQL, and WCAG 2.1 AA–compliant user experiences.",
    keywords: [
      "Full Stack",
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "Next.js",
      "AWS",
      "Accessibility",
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
    tagline: "TypeScript, React, and Node.js — from federated GraphQL to accessible front ends.",
    repository: "Repository",
    rights: "All rights reserved.",
  },
  hero: {
    eyebrow: "Joinville, Brazil · remote",
    role: "Senior Full Stack Engineer",
    tagline:
      "I design and ship scalable web products with TypeScript, GraphQL integrations, and a focus on performance, observability, and WCAG 2.1 AA.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View work",
    highlights: [
      { label: "Focus", value: "Federated GraphQL, React, and APIs" },
      { label: "Stack", value: "TypeScript · Node.js · React · AWS" },
      { label: "Location", value: "Joinville · Brazil · remote" },
    ],
  },
  about: {
    title: "About",
    heading: "End-to-end full-stack engineering",
    paragraphs: [
      "Full-stack engineer with experience in high-traffic products, complex integrations, and federated architectures. I work from GraphQL subgraph design and OpenAPI contracts to performant, accessible React interfaces.",
      "I value clean code, observability (New Relic, CloudWatch), and foundations that evolve safely — automated testing, CI/CD, and WCAG 2.1 AA compliance are part of my daily practice.",
    ],
  },
  skills: {
    title: "Skills",
    heading: "Technologies and practices",
    items: [
      "TypeScript & JavaScript",
      "React, Next.js & Node.js",
      "GraphQL & REST APIs",
      "AWS, Docker & Terraform",
      "PostgreSQL, SQL & MongoDB",
      "Jest, Playwright & Cypress",
      "Tailwind CSS & design systems",
      "WCAG 2.1 AA & accessibility",
      "New Relic & observability",
      "LLMs & AI engineering",
    ],
  },
  experience: {
    title: "Experience",
    heading: "Professional journey",
    note: "Selected recent roles; full history on LinkedIn and résumé.",
    items: [
      {
        title: "Full-Stack TypeScript & Node Engineer",
        org: "BairesDev · remote (US)",
        period: "Dec 2025 — present",
        summary:
          "Designed and implemented GraphQL subgraphs for telecom integrations in a federated architecture. OpenAPI/WSDL analysis, resolvers, CI, schema validation, and New Relic instrumentation in production.",
      },
      {
        title: "Full-Stack React & Node Engineer",
        org: "BairesDev · remote (US)",
        period: "Jan 2025 — Sep 2025",
        summary:
          "React libraries with Storybook, Jest and Playwright tests, Redux Toolkit, and Core Web Vitals optimization (code splitting, lazy loading, memoization). Mobile-first UIs with Tailwind, MUI, and Styled Components, with strong a11y focus.",
      },
      {
        title: "Full Stack Engineer",
        org: "Present Technologies · remote (Portugal)",
        period: "Jan 2023 — Apr 2024",
        summary:
          "High-performance front end for a European e-commerce platform. Market data product rebuild and AI assistant for digital workflows. Testing with Jest, Enzyme, and Puppeteer; optimization with Lighthouse and React DevTools.",
      },
      {
        title: "Senior Frontend Developer (Lead)",
        org: "DBC Company · Brazil",
        period: "Aug 2021 — Sep 2022",
        summary:
          "Eight months leading front end: React architecture, Chart.js dashboards, WCAG compliance, and A/B testing to improve user experience.",
      },
      {
        title: "Senior Frontend Developer",
        org: "Gofind · Brazil",
        period: "Jul 2020 — Aug 2021",
        summary:
          "Store management platform and geolocation app; GitLab pipelines, code splitting, Context API, Zod validation, and i18n.",
      },
    ],
  },
  projects: {
    title: "Projects",
    heading: "Work and demos",
    items: [
      {
        name: "fworks.tech",
        description:
          "Official portfolio and full-stack showcase on Next.js — reference for stack and case studies.",
        stack: "Next.js · TypeScript · Tailwind",
        cta: "Visit fworks.tech",
        href: "https://fworks.tech/",
      },
      {
        name: "VeriHire",
        description:
          "GenAI demo with RAG and Streamlit to cross-check candidate documents in hiring workflows.",
        stack: "Python · Streamlit · RAG",
        cta: "Open demo",
        href: "https://verihire.streamlit.app/",
      },
      {
        name: "fritzelborges.com.br",
        description:
          "This site — bilingual personal portfolio (PT/EN) with App Router, i18n, and E2E tests.",
        stack: "Next.js 16 · Vitest · Playwright",
        cta: "View repository",
        href: "https://github.com/fworks-tech/fritzelborges",
      },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Let's talk",
    body: "Open to remote opportunities, consulting, and teams that care about technical quality. Send context, stack, and timelines on LinkedIn.",
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
