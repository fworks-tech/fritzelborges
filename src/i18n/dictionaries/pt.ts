import type { Dictionary } from "@/i18n/types";

export const dictionary: Dictionary = {
  metadata: {
    title: "Fábio Ritzel Borges | Engenheiro Full Stack sênior",
    description:
      "Engenheiro full stack com foco em TypeScript, React e Node.js — arquiteturas escaláveis, GraphQL e experiência do usuário com acessibilidade WCAG 2.1 AA.",
    keywords: [
      "Full Stack",
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "Next.js",
      "AWS",
      "Acessibilidade",
    ],
  },
  nav: [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#formacao", label: "Formação" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ],
  header: {
    navAria: "Principal",
    mobileNavAria: "Mobile",
    openMenu: "Abrir menu",
  },
  footer: {
    tagline: "TypeScript, React e Node.js — do subgraph GraphQL ao front-end acessível.",
    repository: "Repositório",
    rights: "Todos os direitos reservados.",
  },
  hero: {
    eyebrow: "Joinville, Brasil · remoto",
    role: "Engenheiro Full Stack sênior",
    tagline:
      "Projeto e entrego produtos web escaláveis com TypeScript, integrações GraphQL e foco em performance, observabilidade e WCAG 2.1 AA.",
    ctaPrimary: "Falar sobre um projeto",
    ctaSecondary: "Ver trabalhos",
    highlights: [
      { label: "Foco", value: "GraphQL federado, React e APIs" },
      { label: "Stack", value: "TypeScript · Node.js · React · AWS" },
      { label: "Local", value: "Joinville · Brasil · remoto" },
    ],
  },
  about: {
    title: "Sobre",
    heading: "Engenharia full stack de ponta a ponta",
    paragraphs: [
      "Engenheiro full stack com trajetória em produtos de alto tráfego, integrações complexas e arquiteturas federadas. Atuo do desenho de subgraphs GraphQL e contratos OpenAPI à entrega de interfaces React performantes e acessíveis.",
      "Valorizo código limpo, observabilidade (New Relic, CloudWatch) e bases que evoluem com segurança — testes automatizados, CI/CD e conformidade WCAG 2.1 AA fazem parte do dia a dia.",
    ],
  },
  skills: {
    title: "Habilidades",
    heading: "Tecnologias e práticas",
    items: [
      "TypeScript & JavaScript",
      "React, Next.js & Node.js",
      "GraphQL & APIs REST",
      "AWS, Docker & Terraform",
      "PostgreSQL, SQL & MongoDB",
      "Jest, Playwright & Cypress",
      "Tailwind CSS & design systems",
      "WCAG 2.1 AA & a11y",
      "New Relic & observabilidade",
      "LLMs & engenharia de IA",
    ],
  },
  experience: {
    title: "Experiência",
    heading: "Trajetória profissional",
    note: "Cargos recentes abaixo; posições anteriores (SoftExpert, TOTVS) ao final. Histórico completo no LinkedIn e currículo.",
    items: [
      {
        title: "Full-Stack TypeScript & Node Engineer",
        org: "BairesDev · remoto (EUA)",
        period: "dez/2025 — presente",
        summary:
          "Design e implementação de subgraphs GraphQL para integrações de telecom em arquitetura federada. Análise OpenAPI/WSDL, resolvers, CI, validação de schema e instrumentação New Relic em produção.",
      },
      {
        title: "Full-Stack React & Node Engineer",
        org: "BairesDev · remoto (EUA)",
        period: "jan/2025 — set/2025",
        summary:
          "Bibliotecas React com Storybook, testes Jest e Playwright, Redux Toolkit e otimização de Core Web Vitals (code splitting, lazy loading, memoização). Interfaces mobile-first com Tailwind, MUI e Styled Components, com foco em a11y.",
      },
      {
        title: "Full Stack Engineer",
        org: "Present Technologies · remoto (Portugal)",
        period: "jan/2023 — abr/2024",
        summary:
          "Front-end de alta performance para plataforma de e-commerce europeia. Rebuild de produto de dados de mercado e assistente com IA para fluxos digitais. Testes com Jest, Enzyme e Puppeteer; otimização com Lighthouse e React DevTools.",
      },
      {
        title: "Senior Frontend Developer (Lead)",
        org: "DBC Company · Brasil",
        period: "ago/2021 — set/2022",
        summary:
          "Liderança de front-end por 8 meses: arquitetura React, dashboards com Chart.js, conformidade WCAG e testes A/B para melhorar a experiência do usuário.",
      },
      {
        title: "Senior Frontend Developer",
        org: "Gofind · Brasil",
        period: "jul/2020 — ago/2021",
        summary:
          "Plataforma de gestão de lojas e app de geolocalização; pipelines GitLab, code splitting, Context API, validação com Zod e i18n.",
      },
      {
        title: "Senior Frontend Developer",
        org: "SoftExpert · Brasil",
        period: "jun/2019 — jul/2020",
        summary:
          "Interfaces web corporativas com React e legado; bibliotecas de componentes, performance e entrega com times multidisciplinares.",
      },
      {
        title: "Engenheiro de P&D I · Técnico de QA · Estagiário",
        org: "TOTVS · Brasil",
        period: "2016 — 2019",
        summary:
          "Trajetória de estágio a P&D: testes automatizados, qualidade de APIs e produtos, protótipos de front-end para plataformas internas.",
      },
    ],
  },
  education: {
    title: "Formação",
    heading: "Trajetória acadêmica",
    items: [
      {
        degree: "Pós-graduação em Arquitetura de Software, Ciência de Dados e Cibersegurança",
        institution: "PUCPR — Pontifícia Universidade Católica do Paraná",
        period: "abr/2025 — abr/2027",
        href: "https://www.pucpr.br/",
      },
      {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "UNINTER",
        period: "jan/2018 — dez/2021",
        href: "https://www.uninter.com/",
      },
    ],
  },
  projects: {
    title: "Projetos",
    heading: "Trabalhos e demos",
    items: [
      {
        name: "fworks.tech",
        description:
          "Portfolio oficial e vitrine full stack em Next.js — ponto de referência para stack e cases.",
        stack: "Next.js · TypeScript · Tailwind",
        cta: "Visitar fworks.tech",
        href: "https://fworks.tech/",
      },
      {
        name: "VeriHire",
        description:
          "Demo GenAI com RAG e Streamlit para cruzar documentos de candidatos em processos seletivos.",
        stack: "Python · Streamlit · RAG",
        cta: "Abrir demo",
        href: "https://verihire.streamlit.app/",
      },
      {
        name: "Jupyter-Crypto-Wizard",
        description:
          "Notebook Streamlit interativo para explorar dados de mercado cripto e fluxos leves de análise.",
        stack: "Python · Streamlit · Jupyter",
        cta: "Abrir demo",
        href: "https://jupyter-crypto-wizard.streamlit.app/",
      },
      {
        name: "fritzelborges.vercel.app",
        description:
          "Este site — portfolio pessoal bilíngue (PT/EN) com App Router, i18n e testes E2E. Código no GitHub.",
        stack: "Next.js 16 · Vitest · Playwright",
        cta: "Visitar site",
        href: "https://fritzelborges.vercel.app/",
      },
    ],
  },
  contact: {
    title: "Contato",
    heading: "Vamos conversar",
    body: "Aberto a oportunidades remotas, consultorias e projetos com times que valorizam qualidade técnica. Envie contexto, stack e prazos pelo LinkedIn.",
    linkedinCta: "LinkedIn",
  },
  notFound: {
    metadataTitle: "Página não encontrada",
    metadataDescription: "O endereço não existe ou foi movido.",
    code: "Erro 404",
    heading: "Página não encontrada",
    body: "Verifique o URL ou volte para a página inicial para continuar navegando.",
    homeCta: "Ir para o início",
  },
  languageSwitcher: {
    label: "Idioma",
    en: "English",
    pt: "Português",
  },
};
