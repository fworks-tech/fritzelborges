import Link from "next/link";
import type { Dictionary } from "@/i18n/types";
import { siteConfig } from "@/lib/site";

type ContactSectionProps = {
  contact: Dictionary["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contato"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          {contact.title}
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {contact.heading}
        </p>
        <p className="mt-4 max-w-2xl text-base text-zinc-400">{contact.body}</p>
        <div className="mt-10">
          <Link
            href={siteConfig.social.linkedin}
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#05070d] shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            {contact.linkedinCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
