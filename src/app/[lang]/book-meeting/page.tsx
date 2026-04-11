import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookMeetingClient from "./BookMeetingClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

const SUPPORTED_LANGS = ["en", "ge", "de"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const isDE = seg === "de";
  const title = isDE ? "Termin buchen — Kostenlose Beratung | Call Center" : "Book a Meeting — Free Consultation | Call Center";
  const description = isDE
    ? "Vereinbaren Sie ein kostenloses 15-minütiges Erstgespräch mit unserem Call Center-Team. Wir beraten Sie zu Inbound/Outbound-Support und Agent-Lösungen."
    : "Schedule a free 15-minute discovery call with our Call Center team. We advise on inbound/outbound support and agent solutions.";
  const { languages } = hreflangAlternates("book-meeting");
  const canonical = absoluteUrl(`/${seg}/book-meeting`);

  return {
    title,
    description,
    keywords: isDE
      ? ["call center beratung", "erstgespräch", "inbound support termin", "outbound beratung", "agent lösungen"]
      : ["call center consultation", "discovery call", "inbound support booking", "outbound advisory", "agent solutions"],
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

export default async function BookMeetingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  return <BookMeetingClient />;
}
