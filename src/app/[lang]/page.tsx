import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchApiData, API_ENDPOINTS, normalizeLanguage } from "@/lib/api";
import { SITE_URL, absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";
import { HomeBelowFold } from "@/components/HomeBelowFold.hybrid";

export const revalidate = 3600;

const SUPPORTED_LANGS = ['en', 'ge', 'de'];

async function getHeroMeta(lang: string) {
  try {
    const data = await fetchApiData<any>(API_ENDPOINTS.HERO, normalizeLanguage(lang));
    return data?.hero ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'de' || rawLang === 'ge' ? 'ge' : 'en';
  const hero = await getHeroMeta(lang);

  const title =
    hero?.metaTitle ||
    (lang === "ge"
      ? "Call Center — Inbound & Outbound Support | Professionelle Agenten"
      : "Call Center — Inbound & Outbound Support | Professional Agents");
  const description =
    hero?.metaDescription ||
    (lang === "ge"
      ? "Professioneller Call Center-Service für Inbound- und Outbound-Support. Skalieren Sie Ihr Team schnell mit qualifizierten Agents — ideal für DACH."
      : "Professional call center services for inbound and outbound support. Scale your team quickly with qualified agents — perfect for DACH region.");
  const keywordsFromHero = hero?.metaKeywords
    ? hero.metaKeywords.split(",").map((k: string) => k.trim())
    : null;
  const defaultDeKeywords = [
    "call center",
    "inbound support",
    "outbound calling",
    "kundenservice",
    "telefon support",
    "call center deutschland",
    "agent service",
  ];
  const defaultEnKeywords = [
    "call center",
    "inbound support",
    "outbound calling",
    "customer service",
    "phone support",
    "call center agents",
    "DACH support",
  ];
  const keywords = keywordsFromHero ?? (lang === "ge" ? defaultDeKeywords : defaultEnKeywords);
  const pathSeg = publicLocalePathSegment(lang);
  const canonical = absoluteUrl(`/${pathSeg}`);
  const { languages } = hreflangAlternates("");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Call Center",
      locale: lang === "ge" ? "de_DE" : "en_US",
      alternateLocale: lang === "ge" ? "en_US" : "de_DE",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: lang === "ge" ? "Call Center — Inbound & Outbound Support" : "Call Center — Inbound & Outbound Support",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

const pageJsonLd = (baseUrl: string) => ({
  en: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Call Center Inbound & Outbound Support Services",
    provider: { "@type": "Organization", name: "Call Center" },
    description:
      "Professional call center services for inbound and outbound support. Scale your team quickly with qualified agents — perfect for DACH region.",
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
    ],
    availableLanguage: ["English", "German"],
    url: `${baseUrl}/en`,
    inLanguage: "en-US",
  },
  ge: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Call Center Inbound- & Outbound-Support",
    provider: { "@type": "Organization", name: "Call Center" },
    description:
      "Professioneller Call Center-Service für Inbound- und Outbound-Support. Skalieren Sie Ihr Team schnell mit qualifizierten Agents — ideal für DACH.",
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
    ],
    availableLanguage: ["Deutsch", "Englisch"],
    url: `${baseUrl}/de`,
    inLanguage: "de-DE",
  },
});

export default async function HomeLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLangValue } = await params;
  const rawLang = rawLangValue?.toLowerCase();

  if (!SUPPORTED_LANGS.includes(rawLang)) {
    notFound();
  }

  const lang = rawLang === 'de' || rawLang === 'ge' ? 'ge' : 'en';
  const jsonLd = pageJsonLd(SITE_URL)[lang];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <HomeBelowFold lang={lang} />
      </main>
    </div>
  );
}
