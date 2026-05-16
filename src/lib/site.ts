export const siteConfig = {
  name: "Fabio RItzel Borges",
  role: "Engenheiro de Software Full Stack sênior",
  tagline:
    "Construo produtos web com foco em qualidade, performance e experiência do usuário.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fritzelborges.com.br",
  locale: "pt-BR",
  keywords: [
    "Full Stack",
    "Laravel",
    "React",
    "TypeScript",
    "Next.js",
    "APIs",
    "UX",
  ],
  nav: [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ] as const,
  social: {
    github: "https://github.com/fworks-tech",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:contato@fritzelborges.com.br",
  },
} as const;
