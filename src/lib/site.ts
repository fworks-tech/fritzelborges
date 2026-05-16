export const siteConfig = {
  name: "Fabio RItzel Borges",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fritzelborges.com.br",
  social: {
    github: "https://github.com/fworks-tech",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:contato@fritzelborges.com.br",
  },
  repoUrl: "https://github.com/fworks-tech/fritzelborges",
} as const;
