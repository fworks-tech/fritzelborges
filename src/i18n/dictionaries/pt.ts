import type { Dictionary } from "@/i18n/types";

export const dictionary: Dictionary = {
  metadata: {
    title: "Fabio RItzel Borges | Engenheiro de Software Full Stack sênior",
    description:
      "Construo produtos web com foco em qualidade, performance e experiência do usuário.",
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
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ],
  header: {
    navAria: "Principal",
    mobileNavAria: "Mobile",
    openMenu: "Abrir menu",
  },
  footer: {
    tagline: "Site pessoal — Laravel, React e TypeScript no dia a dia.",
    repository: "Repositório",
    rights: "Todos os direitos reservados.",
  },
  hero: {
    eyebrow: "Portfolio profissional",
    role: "Engenheiro de Software Full Stack sênior",
    tagline:
      "Construo produtos web com foco em qualidade, performance e experiência do usuário.",
    ctaPrimary: "Falar sobre um projeto",
    ctaSecondary: "Ver trabalhos",
    highlights: [
      { label: "Foco", value: "APIs, front-end e entrega contínua" },
      { label: "Stack", value: "Laravel · React · TypeScript" },
      { label: "Local", value: "Brasil · trabalho remoto" },
    ],
  },
  about: {
    title: "Sobre",
    heading: "Engenharia de software com visão de produto",
    paragraphs: [
      "Atuo no ciclo completo de desenvolvimento: arquitetura, implementação, testes e operação. Gosto de equilibrar pragmatismo técnico com clareza para o time e para o negócio — do desenho de APIs ao refinamento de interfaces em React.",
      "Valorizo código legível, contratos de API bem definidos e bases que facilitam evolução. Quando faz sentido, uso TypeScript ponta a ponta para reduzir regressões e melhorar a experiência de desenvolvimento.",
    ],
  },
  skills: {
    title: "Habilidades",
    heading: "O que costumo levar para o time",
    items: [
      "Laravel & PHP",
      "React & Next.js",
      "TypeScript & JavaScript",
      "REST & integrações",
      "PostgreSQL / MySQL",
      "Git, CI/CD",
      "UI responsiva & acessibilidade",
      "Observabilidade básica",
    ],
  },
  experience: {
    title: "Experiência",
    heading: "Trajetória resumida",
    note: "Substitua pelos cargos reais — estes blocos são placeholders para estrutura e tom (issue #12).",
    items: [
      {
        title: "Engenheiro de software sênior",
        org: "Empresa / consultoria — exemplo",
        period: "20XX — presente",
        summary:
          "Liderança técnica em squads ágeis, definição de padrões de API e revisão de arquitetura. Entrega de features críticas com Laravel e front-end em React.",
      },
      {
        title: "Engenheiro de software",
        org: "Produto digital — exemplo",
        period: "20XX — 20XX",
        summary:
          "Desenvolvimento full stack, integrações com terceiros, melhoria de performance e redução de débito técnico em bases legadas.",
      },
      {
        title: "Desenvolvedor",
        org: "Agência / startup — exemplo",
        period: "20XX — 20XX",
        summary:
          "Construção de MVPs, landing pages e painéis administrativos; foco em time-to-market e qualidade perceptível pelo usuário.",
      },
    ],
  },
  projects: {
    title: "Projetos",
    heading: "Seleção de trabalhos",
    items: [
      {
        name: "Plataforma interna de operações",
        description:
          "Painel administrativo com permissões granulares, filas e relatórios. API Laravel + SPA React.",
        stack: "Laravel · React · TS · PostgreSQL",
        cta: "Detalhes em breve",
      },
      {
        name: "API pública com documentação viva",
        description:
          "Contratos versionados, validação estrita e observabilidade para integradores.",
        stack: "Laravel · OpenAPI · Redis",
        cta: "Detalhes em breve",
      },
      {
        name: "Site institucional performático",
        description:
          "Conteúdo estático com ótimo Lighthouse; formulários com proteção anti-spam.",
        stack: "Next.js · Vercel",
        cta: "Detalhes em breve",
      },
    ],
  },
  contact: {
    title: "Contato",
    heading: "Vamos conversar",
    body: "Aberto a oportunidades, consultorias pontuais e projetos com time alinhado a boas práticas. Envie uma mensagem com contexto e prazos.",
    emailCta: "Enviar e-mail",
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
