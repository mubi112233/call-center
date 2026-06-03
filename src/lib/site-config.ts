import { getCurrentTenant, getEffectiveTenantId } from "./tenant-config";

export type SiteLocale = "en" | "ge";

export interface SiteConfig {
  brandName: string;
  brandMarkText: string;
  defaultLocale: SiteLocale;
  apiBase: string;
  tenantId: string;
  routes: {
    bookMeeting: string;
    contact: string;
    blog: string;
  };
  external: {
    whatsappNumber?: string;
    contactEmail: string;
  };
  seo: {
    googleAnalyticsId?: string;
    googleSearchConsoleId?: string;
  };
  features: {
    blog: boolean;
    caseStudies: boolean;
    testimonials: boolean;
    pricing: boolean;
    booking: boolean;
    whatsapp: boolean;
  };
}

/** Get tenant configuration from centralized tenant-config.ts */
const tenant = getCurrentTenant();

export const siteConfig: SiteConfig = {
  brandName: tenant.brandName,
  brandMarkText: tenant.brandMarkText,
  defaultLocale: tenant.defaultLocale,
  apiBase: tenant.apiBase,
  tenantId: getEffectiveTenantId(),
  routes: {
    bookMeeting: "/book-meeting",
    contact: "/contact",
    blog: "/blog",
  },
  external: {
    whatsappNumber: tenant.whatsappNumber,
    contactEmail: tenant.contactEmail,
  },
  seo: {
    googleAnalyticsId: tenant.googleAnalyticsId,
    googleSearchConsoleId: tenant.googleSearchConsoleId,
  },
  features: tenant.features,
};

export const normalizeLocale = (locale: string): SiteLocale => {
  const raw = (locale || "").toLowerCase();
  if (raw.startsWith("ge") || raw.startsWith("de")) return "ge";
  return "en";
};

/** URL path segment for public links (`de` for German locale, not `ge`). */
export function localeUrlPrefix(locale: SiteLocale): "en" | "de" {
  return locale === "ge" ? "de" : "en";
}

export const localizedPath = (locale: SiteLocale, pathname: string): string => {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${localeUrlPrefix(locale)}${clean}`;
};

/** Ensure internal paths like `/book-meeting` get `/en/...` or `/de/...`. */
export function withLocalePrefix(href: string, locale: SiteLocale): string {
  const h = href.trim();
  if (!h || /^[a-z][a-z0-9+.-]*:/i.test(h)) return h;
  if (/^\/(en|ge|de)(\/|$)/i.test(h)) return h;
  const clean = h.startsWith("/") ? h : `/${h}`;
  return localizedPath(locale, clean);
}

export const getWhatsAppUrl = (number?: string): string | null => {
  if (!number) return null;
  const digits = number.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
};
