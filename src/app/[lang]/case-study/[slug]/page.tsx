import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";
import { generateCaseStudySchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { fetchCaseStudiesServer } from "@/lib/api";
import CaseStudyClient from "./CaseStudyClient";

interface CaseStudyData {
  caseStudyId: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{ metric: string; value: string; description: string }>;
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: { costSaved: string; timeframe: string; vaCount: string };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const slug = resolvedParams.slug;
  const currentLang = lang === "de" || lang === "ge" ? "ge" : "en";
  const urlSeg = publicLocalePathSegment(lang);

  const caseId = slug.split("-").pop();
  const caseStudyId = Number(caseId);
  
  if (!caseId || Number.isNaN(caseStudyId)) return {};

  const data = await fetchCaseStudiesServer(currentLang);
  const caseStudies = Array.isArray((data as any)?.caseStudies) ? (data as any).caseStudies : [];
  const caseStudy = caseStudies.find((cs: CaseStudyData) => cs.caseStudyId === caseStudyId);

  if (!caseStudy) return {};

  const title = `${caseStudy.company} - ${caseStudy.title} | Call Center`;
  const description = caseStudy.challenge.substring(0, 160);
  const pathAfterLocale = `case-study/${slug}`;
  const canonical = absoluteUrl(`/${urlSeg}/${pathAfterLocale}`);
  const { languages } = hreflangAlternates(pathAfterLocale);

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: caseStudy.image ? [{ url: caseStudy.image, width: 1200, height: 630, alt: caseStudy.company }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: caseStudy.image ? [caseStudy.image] : [],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang === "de" || rawLang === "ge" ? "ge" : "en";

  return <CaseStudyClient lang={lang} slug={slug} />;
}
