export const siteConfig = {
  name: "Fábio Ritzel Borges",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fritzelborges.com.br",
  social: {
    github: "https://github.com/fworks-tech",
    linkedin: "https://www.linkedin.com/in/fabiorborges",
    portfolio: "https://fworks.tech/",
  },
  repoUrl: "https://github.com/fworks-tech/fritzelborges",
} as const;
