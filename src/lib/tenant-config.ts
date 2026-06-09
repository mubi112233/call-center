/**
 * ═══════════════════════════════════════════════════════════════
 *  TENANT CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════
 *
 *  ✏️  CHANGE TENANT ID HERE → UPDATES ACROSS ALL 10 SITES
 *
 *  HOW TO USE:
 *  1. Set currentTenant below to your tenant ID
 *  2. Or add a new tenant preset to tenantPresets
 *  3. All API calls, content fetching, and site config will use this
 *
 *  This overrides any environment variables for consistent
tenant IDs across all deployments.
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
//  ACTIVE TENANT — CHANGE THIS ONE LINE
// ═══════════════════════════════════════════════════════════════

/**
 * Current active tenant ID
 * This determines which tenant's data is fetched from the API
 * Examples: "callcenter", "socialmedia", "seoagency", "webdesign", etc.
 */
export const currentTenant = "callcenter";

// ═══════════════════════════════════════════════════════════════
//  TENANT PRESETS — DEFINE ALL 10 SITES HERE
// ═══════════════════════════════════════════════════════════════

export interface TenantConfig {
  /** Unique tenant identifier used for API calls */
  id: string;
  /** Display name for the tenant */
  name: string;
  /** Brand name shown on site */
  brandName: string;
  /** Short brand mark/text for logo */
  brandMarkText: string;
  /** Default locale for this tenant */
  defaultLocale: "en" | "ge";
  /** Description for SEO/meta */
  description: string;
  /** Site URL (production) */
  siteUrl: string;
  /** Theme to use (matches theme-config.ts) */
  theme: "teal" | "blue" | "gold" | "purple" | "green" | "red";
  
  // ── API & Backend ──
  /** API base URL for this tenant */
  apiBase: string;
  
  // ── Contact & Communication ──
  /** WhatsApp number for contact (with country code, no +) */
  whatsappNumber?: string;
  /** Contact email address */
  contactEmail: string;
  /** Form submission handler (web3forms key) */
  web3formsKey: string;
  
  // ── Analytics & Tracking ──
  /** Google Analytics ID (G-XXXXXXXXXX) */
  googleAnalyticsId?: string;
  /** Google Search Console verification code */
  googleSearchConsoleId?: string;
  
  // ── Social Media ──
  /** LinkedIn company URL */
  linkedInUrl?: string;
  /** Twitter/X handle */
  twitterHandle?: string;
  
  // ── Feature Flags ──
  /** Enable blog section */
  features: {
    blog: boolean;
    caseStudies: boolean;
    testimonials: boolean;
    pricing: boolean;
    booking: boolean;
    whatsapp: boolean;
  };
}

/** All tenant configurations for your 10 sites */
export const tenantPresets: Record<string, TenantConfig> = {
  // ── Call Center / Virtual Assistant (Current) ──
  callcenter: {
    id: "callcenter",
    name: "Call Center",
    brandName: "Call Center",
    brandMarkText: "CC",
    defaultLocale: "en",
    description: "Professional call center services for inbound and outbound support. Scale your team quickly with qualified agents.",
    siteUrl: "https://callcenter.example.com",
    theme: "teal",
    apiBase: "https://api.don-va.com",
    whatsappNumber: "491234567890",
    contactEmail: "contact@callcenter.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-Q75404R5F8",
    googleSearchConsoleId: "l93HxOLqUBDjtuNfHM7OsWQd7i9MfSJo1fV_yaLAZrE",
    linkedInUrl: "https://linkedin.com/company/call-center",
    twitterHandle: "@call_center",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: true,
    },
  },

  // ── Social Media Management ──
  socialmedia: {
    id: "socialmedia",
    name: "Social Media Pro",
    brandName: "Social Media Pro",
    brandMarkText: "SM",
    defaultLocale: "en",
    description: "Expert social media management and content creation for businesses.",
    siteUrl: "https://socialmedia.example.com",
    theme: "blue",
    apiBase: "https://api.don-va.com",
    whatsappNumber: "491234567891",
    contactEmail: "hello@socialmedia.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/socialmediapro",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: true,
    },
  },

  // ── SEO Agency ──
  seoagency: {
    id: "seoagency",
    name: "SEO Masters",
    brandName: "SEO Masters",
    brandMarkText: "SEO",
    defaultLocale: "en",
    description: "Professional SEO services to rank higher and grow your organic traffic.",
    siteUrl: "https://seo.example.com",
    theme: "blue",
    apiBase: "https://api.don-va.com",
    contactEmail: "team@seo.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/seomasters",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── Web Design ──
  webdesign: {
    id: "webdesign",
    name: "Web Design Studio",
    brandName: "Web Design Studio",
    brandMarkText: "WD",
    defaultLocale: "en",
    description: "Beautiful, conversion-focused websites that drive results.",
    siteUrl: "https://webdesign.example.com",
    theme: "purple",
    apiBase: "https://api.don-va.com",
    contactEmail: "hello@webdesign.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/webdesignstudio",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── Digital Marketing ──
  digitalmarketing: {
    id: "digitalmarketing",
    name: "Digital Growth",
    brandName: "Digital Growth",
    brandMarkText: "DG",
    defaultLocale: "en",
    description: "Full-service digital marketing to grow your business online.",
    siteUrl: "https://digital.example.com",
    theme: "gold",
    apiBase: "https://api.don-va.com",
    contactEmail: "growth@digital.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/digitalgrowth",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── E-commerce Solutions ──
  ecommerce: {
    id: "ecommerce",
    name: "E-Commerce Pro",
    brandName: "E-Commerce Pro",
    brandMarkText: "EC",
    defaultLocale: "en",
    description: "Build and scale your online store with expert e-commerce solutions.",
    siteUrl: "https://ecommerce.example.com",
    theme: "green",
    apiBase: "https://api.don-va.com",
    contactEmail: "sales@ecommerce.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/ecommercepro",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: true,
    },
  },

  // ── Content Writing ──
  contentwriting: {
    id: "contentwriting",
    name: "Content Kings",
    brandName: "Content Kings",
    brandMarkText: "CK",
    defaultLocale: "en",
    description: "High-quality content writing that engages and converts your audience.",
    siteUrl: "https://content.example.com",
    theme: "teal",
    apiBase: "https://api.don-va.com",
    contactEmail: "writers@content.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/contentkings",
    features: {
      blog: true,
      caseStudies: false,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── PPC Advertising ──
  ppcagency: {
    id: "ppcagency",
    name: "PPC Experts",
    brandName: "PPC Experts",
    brandMarkText: "PPC",
    defaultLocale: "en",
    description: "Results-driven pay-per-click advertising that maximizes your ROI.",
    siteUrl: "https://ppc.example.com",
    theme: "red",
    apiBase: "https://api.don-va.com",
    contactEmail: "ads@ppc.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/ppcexperts",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── Email Marketing ──
  emailmarketing: {
    id: "emailmarketing",
    name: "Email Masters",
    brandName: "Email Masters",
    brandMarkText: "EM",
    defaultLocale: "en",
    description: "Email marketing campaigns that nurture leads and drive conversions.",
    siteUrl: "https://email.example.com",
    theme: "gold",
    apiBase: "https://api.don-va.com",
    contactEmail: "campaigns@email.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/emailmasters",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },

  // ── Branding Agency ──
  branding: {
    id: "branding",
    name: "Brand Studio",
    brandName: "Brand Studio",
    brandMarkText: "BS",
    defaultLocale: "en",
    description: "Strategic branding and identity design that sets you apart.",
    siteUrl: "https://branding.example.com",
    theme: "purple",
    apiBase: "https://api.don-va.com",
    contactEmail: "design@branding.example.com",
    web3formsKey: "8aff1902-6795-4608-ad79-be6702aa7f3a",
    googleAnalyticsId: "G-XXXXXXXXXX",
    linkedInUrl: "https://linkedin.com/company/brandstudio",
    features: {
      blog: true,
      caseStudies: true,
      testimonials: true,
      pricing: true,
      booking: true,
      whatsapp: false,
    },
  },
};

// ═══════════════════════════════════════════════════════════════
//  GET CURRENT TENANT CONFIG
// ═══════════════════════════════════════════════════════════════

/** Get the full configuration for the current tenant */
export const getCurrentTenant = (): TenantConfig => {
  const tenant = tenantPresets[currentTenant];
  if (!tenant) {
    console.warn(`⚠️ Tenant "${currentTenant}" not found. Using default.`);
    return tenantPresets.callcenter;
  }
  return tenant;
};

/** Quick access to current tenant ID */
export const getTenantId = (): string => getCurrentTenant().id;

/** Quick access to current brand name */
export const getBrandName = (): string => getCurrentTenant().brandName;

/** Quick access to current brand mark */
export const getBrandMark = (): string => getCurrentTenant().brandMarkText;

/** Quick access to current theme */
export const getTenantTheme = (): string => getCurrentTenant().theme;

// ═══════════════════════════════════════════════════════════════
//  ENVIRONMENT OVERRIDE (Optional)
// ═══════════════════════════════════════════════════════════════

/**
 * Allow environment variable to override (for CI/CD flexibility)
 * Set NEXT_PUBLIC_TENANT_ID in .env to override this file
 */
export const getEffectiveTenantId = (): string => {
  const envTenant = process.env.NEXT_PUBLIC_TENANT_ID;
  if (envTenant && tenantPresets[envTenant]) {
    return envTenant;
  }
  return currentTenant;
};

// Default export for convenience
export default {
  currentTenant,
  tenantPresets,
  getCurrentTenant,
  getTenantId,
  getBrandName,
  getBrandMark,
  getTenantTheme,
  getEffectiveTenantId,
};
