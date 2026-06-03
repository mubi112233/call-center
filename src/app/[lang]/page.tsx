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
      ? "Call Center DACH | Inbound & Outbound Support"
      : "Call Center DACH | Inbound & Outbound Support");
  const description =
    hero?.metaDescription ||
    (lang === "ge"
      ? "Professioneller Call-Center-Service für DACH-Unternehmen. Skalieren Sie mit deutschsprachigen Agents für Inbound & Outbound. Jetzt starten."
      : "Professional call center services for DACH businesses. Scale your team with German-speaking agents for inbound & outbound support.");
  const keywordsFromHero = hero?.metaKeywords
    ? hero.metaKeywords.split(",").map((k: string) => k.trim())
    : null;
  const defaultDeKeywords = [
    "call center DACH",
    "deutscher call center",
    "inbound support deutschland",
    "outbound calling DACH",
    "kundenservice österreich",
    "telefon support schweiz",
    "call center agents",
    "DACH support",
    "deutschsprachige agents",
  ];
  const defaultEnKeywords = [
    "call center DACH",
    "German call center",
    "inbound support Germany",
    "outbound calling DACH",
    "customer service Austria",
    "phone support Switzerland",
    "call center agents",
    "DACH support",
    "German-speaking agents",
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
          alt: lang === "ge" ? "Call Center — DACH Inbound & Outbound Support" : "Call Center — DACH Inbound & Outbound Support",
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

const serviceJsonLd = (baseUrl: string, lang: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: lang === "ge" ? "Call Center Inbound- & Outbound-Support" : "Call Center Inbound & Outbound Support Services",
  provider: { "@type": "Organization", name: "Call Center" },
  description:
    lang === "ge"
      ? "Professioneller Call-Center-Service für DACH-Unternehmen. Skalieren Sie mit deutschsprachigen Agents für Inbound & Outbound."
      : "Professional call center services for DACH businesses. Scale your team with German-speaking agents for inbound & outbound support.",
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
  ],
  availableLanguage: lang === "ge" ? ["Deutsch", "Englisch"] : ["English", "German"],
  url: `${baseUrl}/${lang === "ge" ? "de" : "en"}`,
  inLanguage: lang === "ge" ? "de-DE" : "en-US",
});

const faqPageJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const pricingJsonLd = (lang: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: lang === "ge" ? "Call Center-Agent-Pakete" : "Call Center Agent Packages",
  description:
    lang === "ge"
      ? "Flexible Call-Center-Agent-Pakete für DACH-Unternehmen. Wählen Sie zwischen Starter, Professional und Enterprise."
      : "Flexible call center agent packages for DACH businesses. Choose Starter, Professional, or Enterprise.",
  brand: { "@type": "Organization", name: "Call Center" },
  offers: [
    {
      "@type": "Offer",
      name: lang === "ge" ? "Starter" : "Starter",
      description: lang === "ge" ? "10h / Woche" : "10h / week",
      price: "369",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${lang === "ge" ? "de" : "en"}#pricing`,
    },
    {
      "@type": "Offer",
      name: lang === "ge" ? "Professional" : "Professional",
      description: lang === "ge" ? "20h / Woche" : "20h / week",
      price: "629",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${lang === "ge" ? "de" : "en"}#pricing`,
    },
    {
      "@type": "Offer",
      name: lang === "ge" ? "Enterprise" : "Enterprise",
      description: lang === "ge" ? "40h / Woche" : "40h / week",
      price: "1169",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${lang === "ge" ? "de" : "en"}#pricing`,
    },
  ],
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
  const [serviceLd, rawFaqData] = await Promise.all([
    Promise.resolve(serviceJsonLd(SITE_URL, lang)),
    fetchApiData<{ faqs: { question: string; answer: string }[] }>(API_ENDPOINTS.FAQ, normalizeLanguage(lang)).catch(() => null),
  ]);
  const faqLd = rawFaqData?.faqs?.length ? faqPageJsonLd(rawFaqData.faqs) : null;
  const priceLd = pricingJsonLd(lang);

  const schemas: any[] = [serviceLd, priceLd];
  if (faqLd) schemas.push(faqLd);

  return (
    <div className="min-h-screen bg-background">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <HomeBelowFold lang={lang} />
      </main>
    </div>
  );
}
