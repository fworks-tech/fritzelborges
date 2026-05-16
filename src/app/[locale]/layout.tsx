import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  isLocale,
  localeToHtmlLang,
  localeToOpenGraphLocale,
  locales,
  type Locale,
} from "@/i18n/settings";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const dict = await getDictionary(raw);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.metadata.description,
    keywords: [...dict.metadata.keywords],
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: `/${raw}`,
      languages: {
        en: "/en",
        pt: "/pt",
        "x-default": "/pt",
      },
    },
    openGraph: {
      type: "website",
      locale: localeToOpenGraphLocale(raw),
      url: new URL(`/${raw}`, siteConfig.url).toString(),
      siteName: siteConfig.name,
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={localeToHtmlLang(locale)}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#070a12] font-sans text-zinc-200">
        <SiteHeader
          locale={locale}
          nav={dict.nav}
          header={dict.header}
          languageSwitcher={dict.languageSwitcher}
        />
        {children}
        <SiteFooter footer={dict.footer} />
      </body>
    </html>
  );
}
