import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment, SITE_URL } from "@/lib/site-url";
import { generateLocalBusinessStructuredData, generateBreadcrumbSchema } from "@/lib/structured-data";

const SUPPORTED_LANGS = ["en", "ge", "de"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const isDE = seg === "de";
  const title = isDE ? "Kontakt — Call Center | Inbound & Outbound Support" : "Contact — Call Center | Inbound & Outbound Support";
  const description = isDE
    ? "Kontaktieren Sie unser Call Center für maßgeschneiderte Kundenbetreuung, Inbound/Outbound-Support und professionelle Telefonie-Lösungen."
    : "Contact our Call Center for customized customer support, inbound/outbound calling, and professional telephony solutions.";
  const { languages } = hreflangAlternates("contact");
  const canonical = absoluteUrl(`/${seg}/contact`);

  return {
    title,
    description,
    keywords: isDE
      ? ["call center kontakt", "kundenbetreuung anfrage", "outbound support", "inbound service", "telefon support deutschland"]
      : ["call center contact", "customer support inquiry", "outbound calling", "inbound support", "telephony solutions"],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      siteName: "Call Center",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Call Center — Inbound & Outbound Support" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  const lang = rawLang === "ge" || rawLang === "de" ? "ge" : "en";
  const isDE = lang === "ge";

  const localBusinessSchema = generateLocalBusinessStructuredData({
    name: "Call Center",
    description: isDE
      ? "Professioneller Call Center-Service für Inbound- und Outbound-Support."
      : "Professional call center services for inbound and outbound support.",
    url: SITE_URL,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: isDE ? "Startseite" : "Home", href: `/${lang}` },
    { label: isDE ? "Kontakt" : "Contact", href: `/${lang}/contact` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactClient lang={lang} />
    </>
  );
}
