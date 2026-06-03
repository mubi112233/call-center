/**
 * Central site URL used for metadata, OG images, sitemap, etc.
 * Now centralized in tenant-config.ts
 * Set the siteUrl in tenant-config.ts for each tenant.
 */
import { getCurrentTenant } from "./tenant-config";

/** Get site URL from centralized tenant-config.ts */
export const SITE_URL = getCurrentTenant().siteUrl;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Path segment for canonical / OG URLs: `de` for German (valid hreflang), `en` for English. */
export function publicLocalePathSegment(lang: string): "en" | "de" {
  return lang === "ge" || lang === "de" ? "de" : "en";
}

/**
 * Path after locale, e.g. "" for home, "contact", "blog/post-slug"
 * (no leading slash on segments).
 */
export function hreflangAlternates(pathAfterLocale: string): {
  canonicalEn: string;
  canonicalDe: string;
  languages: Record<string, string>;
} {
  const tail = pathAfterLocale ? `/${pathAfterLocale.replace(/^\//, "")}` : "";
  return {
    canonicalEn: absoluteUrl(`/en${tail}`),
    canonicalDe: absoluteUrl(`/de${tail}`),
    languages: {
      en: absoluteUrl(`/en${tail}`),
      de: absoluteUrl(`/de${tail}`),
      "x-default": absoluteUrl(`/en${tail}`),
    },
  };
}
