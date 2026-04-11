import type { Metadata } from "next";
import { BlogListingClient } from "./BlogListingClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const { languages } = hreflangAlternates("blog");
  const canonical = absoluteUrl(`/${seg}/blog`);

  const isDe = seg === "de";
  const title = isDe
    ? "Blog — Call Center Insights & Kundenservice-Tipps | Support-Lösungen"
    : "Blog — Call Center Insights & Customer Support Tips | Service Solutions";
  const description = isDe
    ? "Praxisnahe Tipps und Best Practices für Call Center, Kundenservice, Inbound/Outbound-Support und Kundenbindung — auf Deutsch."
    : "Actionable tips and best practices for call centers, customer support, inbound/outbound calling, and client retention.";

  return {
    title,
    description,
    keywords: isDe
      ? [
          "call center blog",
          "kundenservice tipps",
          "inbound support deutsch",
          "outbound calling",
          "call center best practices",
        ]
      : [
          "call center blog",
          "customer support tips",
          "inbound calling guide",
          "outbound sales calling",
          "call center best practices",
        ],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDe ? "de_DE" : "en_US",
      alternateLocale: isDe ? "en_US" : "de_DE",
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

export default function BlogPage() {
  return <BlogListingClient />;
}
