import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/settings";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  return (
    <main id="conteudo-principal">
      <HeroSection hero={dict.hero} />
      <AboutSection about={dict.about} />
      <SkillsSection skills={dict.skills} />
      <ExperienceSection experience={dict.experience} />
      <ProjectsSection projects={dict.projects} />
      <ContactSection contact={dict.contact} />
    </main>
  );
}
