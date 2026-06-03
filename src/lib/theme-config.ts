/**
 * ═══════════════════════════════════════════════════════════════
 *  GLOBAL THEME CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════
 *
 *  ✏️  CHANGE COLORS HERE → THEY UPDATE ACROSS ALL 10 SITES
 *
 *  HOW TO USE:
 *  1. Change `currentTheme` below to switch the active theme
 *  2. Or edit any color value inside a theme to customize it
 *  3. Run: npm run theme:generate
 *  4. Restart dev server
 *
 *  ALL CSS variables used in globals.css, tailwind.config.ts,
 *  and every component are generated from THIS file.
 * ═══════════════════════════════════════════════════════════════
 */

export interface ThemeColors {
  // ── Brand / Primary ──
  primary: string;
  primaryDark: string;
  primaryLight: string;

  // ── Accent / Secondary brand ──
  accent: string;
  accentDark: string;
  accentLight: string;

  // ── Backgrounds ──
  background: string;
  card: string;

  // ── Text ──
  foreground: string;
  muted: string;
  mutedForeground: string;

  // ── Borders & Inputs ──
  border: string;
  input: string;

  // ── Headings ──
  heading: string;
  subheading: string;

  // ── CTA / Call-to-action ──
  cta: string;
  ctaForeground: string;

  // ── Status ──
  destructive: string;
  success: string;
  warning: string;

  // ── Ring / Focus ──
  ring: string;
}

export interface DarkModeOverrides {
  background: string;
  foreground: string;
  card: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  heading: string;
  subheading: string;
  accent: string;
  ring: string;
}

export interface ColorScheme {
  name: string;
  description: string;
  colors: ThemeColors;
  dark: DarkModeOverrides;
}

// ───────────────────────────────────────────────────────────────
//  DEFINE YOUR COLOR SCHEMES HERE
//  All values use HSL format: "H S% L%"  (no hsl() wrapper)
// ───────────────────────────────────────────────────────────────
export const colorSchemes: Record<string, ColorScheme> = {
  // ── Teal/Green Call Center Theme (Current) ──
  teal: {
    name: "Teal Call Center",
    description: "Professional teal-green for call center / VA sites",
    colors: {
      primary: "158 64% 52%",
      primaryDark: "158 64% 42%",
      primaryLight: "158 64% 65%",
      accent: "174 72% 56%",
      accentDark: "174 72% 40%",
      accentLight: "174 72% 68%",
      background: "160 20% 97%",
      card: "0 0% 100%",
      foreground: "160 20% 10%",
      muted: "160 20% 95%",
      mutedForeground: "160 15% 40%",
      border: "160 25% 88%",
      input: "160 20% 92%",
      heading: "160 20% 10%",
      subheading: "160 15% 40%",
      cta: "24 100% 50%",
      ctaForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      success: "158 64% 52%",
      warning: "48 100% 50%",
      ring: "158 64% 52%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "160 20% 25%",
      input: "160 20% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "158 64% 52%",
      ring: "158 64% 52%",
    },
  },

  // ── Blue SEO Agency Theme ──
  blue: {
    name: "Blue SEO Agency",
    description: "Professional blue for tech/SEO agencies",
    colors: {
      primary: "220 100% 50%",
      primaryDark: "220 100% 40%",
      primaryLight: "220 100% 60%",
      accent: "220 85% 55%",
      accentDark: "220 85% 25%",
      accentLight: "220 100% 65%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      foreground: "0 0% 0%",
      muted: "220 13% 97%",
      mutedForeground: "220 13% 45%",
      border: "220 13% 86%",
      input: "220 13% 90%",
      heading: "220 100% 20%",
      subheading: "220 13% 45%",
      cta: "220 100% 50%",
      ctaForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      success: "142 76% 36%",
      warning: "45 93% 58%",
      ring: "220 100% 50%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "220 13% 25%",
      input: "220 13% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "220 100% 50%",
      ring: "220 100% 50%",
    },
  },

  // ── Gold Professional Theme ──
  gold: {
    name: "Gold Professional",
    description: "Premium gold for luxury/finance sites",
    colors: {
      primary: "45 80% 55%",
      primaryDark: "45 80% 45%",
      primaryLight: "45 80% 65%",
      accent: "45 90% 65%",
      accentDark: "45 70% 45%",
      accentLight: "45 90% 75%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      foreground: "0 0% 0%",
      muted: "45 20% 97%",
      mutedForeground: "45 15% 45%",
      border: "45 20% 86%",
      input: "45 20% 90%",
      heading: "45 80% 25%",
      subheading: "45 15% 45%",
      cta: "45 80% 55%",
      ctaForeground: "0 0% 0%",
      destructive: "0 84.2% 60.2%",
      success: "142 76% 36%",
      warning: "45 93% 58%",
      ring: "45 80% 55%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "45 20% 25%",
      input: "45 20% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "45 80% 55%",
      ring: "45 80% 55%",
    },
  },

  // ── Purple Modern Theme ──
  purple: {
    name: "Purple Modern",
    description: "Creative purple for modern/app sites",
    colors: {
      primary: "270 100% 60%",
      primaryDark: "270 100% 50%",
      primaryLight: "270 100% 70%",
      accent: "270 100% 65%",
      accentDark: "270 85% 35%",
      accentLight: "270 100% 75%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      foreground: "0 0% 0%",
      muted: "270 13% 97%",
      mutedForeground: "270 13% 45%",
      border: "270 13% 86%",
      input: "270 13% 90%",
      heading: "270 100% 20%",
      subheading: "270 13% 45%",
      cta: "270 100% 60%",
      ctaForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      success: "142 76% 36%",
      warning: "45 93% 58%",
      ring: "270 100% 60%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "270 13% 25%",
      input: "270 13% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "270 100% 60%",
      ring: "270 100% 60%",
    },
  },

  // ── Green Fresh Theme ──
  green: {
    name: "Green Fresh",
    description: "Fresh green for eco/health/nature sites",
    colors: {
      primary: "142 76% 36%",
      primaryDark: "142 76% 26%",
      primaryLight: "142 76% 46%",
      accent: "142 86% 46%",
      accentDark: "142 66% 26%",
      accentLight: "142 86% 56%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      foreground: "0 0% 0%",
      muted: "142 13% 97%",
      mutedForeground: "142 13% 45%",
      border: "142 13% 86%",
      input: "142 13% 90%",
      heading: "142 76% 20%",
      subheading: "142 13% 45%",
      cta: "142 76% 36%",
      ctaForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      success: "142 76% 36%",
      warning: "45 93% 58%",
      ring: "142 76% 36%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "142 13% 25%",
      input: "142 13% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "142 76% 36%",
      ring: "142 76% 36%",
    },
  },

  // ── Red Bold Theme ──
  red: {
    name: "Red Bold",
    description: "Bold red for high-energy/action sites",
    colors: {
      primary: "0 84% 60%",
      primaryDark: "0 84% 50%",
      primaryLight: "0 84% 70%",
      accent: "0 84% 65%",
      accentDark: "0 70% 40%",
      accentLight: "0 84% 75%",
      background: "0 0% 100%",
      card: "0 0% 100%",
      foreground: "0 0% 0%",
      muted: "0 13% 97%",
      mutedForeground: "0 13% 45%",
      border: "0 13% 86%",
      input: "0 13% 90%",
      heading: "0 84% 25%",
      subheading: "0 13% 45%",
      cta: "0 84% 60%",
      ctaForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      success: "142 76% 36%",
      warning: "45 93% 58%",
      ring: "0 84% 60%",
    },
    dark: {
      background: "0 0% 12%",
      foreground: "0 0% 95%",
      card: "0 0% 15%",
      muted: "0 0% 20%",
      mutedForeground: "0 0% 65%",
      border: "0 13% 25%",
      input: "0 13% 25%",
      heading: "0 0% 95%",
      subheading: "0 0% 65%",
      accent: "0 84% 60%",
      ring: "0 84% 60%",
    },
  },
};

// ═══════════════════════════════════════════════════════════════
//  ACTIVE THEME — CHANGE THIS ONE LINE TO SWITCH SITES
//  Options: "teal", "blue", "gold", "purple", "green", "red"
// ═══════════════════════════════════════════════════════════════
export const currentTheme = "teal";

// Get current theme colors
export const theme = colorSchemes[currentTheme].colors;
export const darkTheme = colorSchemes[currentTheme].dark;

// Helper function to get HSL value for CSS variables
export const hsl = (color: string) => `hsl(${color})`;

// Helper function to get CSS variable name
export const cssVar = (name: keyof ThemeColors) => `--${name}`;

// Generate CSS variables for the current theme (both light + dark)
export const generateCSSVariables = () => {
  const vars: Record<string, string> = {};

  // Direct color mappings
  Object.entries(theme).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    vars[`--${cssKey}`] = value;
  });

  // ── Derived / Aliased variables ──
  vars['--primary-foreground'] = "0 0% 100%";
  vars['--secondary'] = theme.muted;
  vars['--secondary-foreground'] = theme.foreground;
  vars['--muted-foreground'] = theme.mutedForeground;
  vars['--accent-foreground'] = "0 0% 100%";
  vars['--hover'] = theme.muted;
  vars['--hover-foreground'] = theme.foreground;
  vars['--destructive-foreground'] = "0 0% 98%";
  vars['--card-foreground'] = theme.foreground;
  vars['--popover'] = theme.card;
  vars['--popover-foreground'] = theme.foreground;
  vars['--ring'] = theme.ring;
  vars['--input'] = theme.input;

  // ── Legacy aliases (gold = primary, brand-blue = accentDark) ──
  vars['--brand-blue'] = theme.accentDark;
  vars['--gold'] = theme.primary;
  vars['--gold-dark'] = theme.primaryDark;
  vars['--gold-light'] = theme.primaryLight;
  vars['--call-orange'] = theme.cta;
  vars['--call-yellow'] = theme.warning;
  vars['--call-green'] = theme.success;

  // ── Gradients ──
  vars['--gradient-gold'] = `linear-gradient(135deg, ${hsl(theme.primary)} 0%, ${hsl(theme.accentDark)} 100%)`;
  vars['--gradient-dark'] = `linear-gradient(180deg, ${hsl(theme.accentDark)} 0%, ${hsl(theme.accentDark)} 100%)`;
  vars['--gradient-light'] = `linear-gradient(180deg, ${hsl(theme.background)} 0%, ${hsl(theme.muted)} 100%)`;

  // ── Shadows ──
  vars['--shadow-gold'] = `0 10px 40px -10px hsl(${theme.primary} / 0.15)`;
  vars['--shadow-gold-lg'] = `0 25px 80px -20px hsl(${theme.primary} / 0.25)`;
  vars['--shadow-elegant'] = `0 20px 60px -15px hsl(${theme.accentDark} / 0.12)`;
  vars['--shadow-card'] = `0 2px 8px -2px hsl(${theme.accentDark} / 0.08)`;
  vars['--shadow-brutal'] = `8px 8px 0px hsl(${theme.primary})`;

  // ── Radius ──
  vars['--radius'] = "0.5rem";

  // ── Sidebar ──
  vars['--sidebar-background'] = theme.background;
  vars['--sidebar-foreground'] = theme.foreground;
  vars['--sidebar-primary'] = theme.primary;
  vars['--sidebar-primary-foreground'] = "0 0% 100%";
  vars['--sidebar-accent'] = theme.muted;
  vars['--sidebar-accent-foreground'] = theme.foreground;
  vars['--sidebar-border'] = theme.border;
  vars['--sidebar-ring'] = theme.ring;

  // ── Heading ──
  vars['--heading-color'] = theme.heading;
  vars['--heading-size'] = "1.5rem";
  vars['--side-padding'] = "1.5rem";

  return vars;
};

// Generate dark mode overrides
export const generateDarkVariables = () => {
  const vars: Record<string, string> = {};
  const d = darkTheme;

  vars['--background'] = d.background;
  vars['--foreground'] = d.foreground;
  vars['--card'] = d.card;
  vars['--card-foreground'] = d.foreground;
  vars['--popover'] = d.card;
  vars['--popover-foreground'] = d.foreground;
  vars['--muted'] = d.muted;
  vars['--muted-foreground'] = d.mutedForeground;
  vars['--border'] = d.border;
  vars['--input'] = d.input;
  vars['--accent'] = d.accent;
  vars['--accent-foreground'] = "0 0% 100%";
  vars['--ring'] = d.ring;
  vars['--heading-color'] = d.heading;
  vars['--brand-blue'] = colorSchemes[currentTheme].colors.accentDark;
  vars['--gold'] = colorSchemes[currentTheme].colors.primary;
  vars['--call-orange'] = colorSchemes[currentTheme].colors.cta;
  vars['--call-yellow'] = colorSchemes[currentTheme].colors.warning;
  vars['--call-green'] = colorSchemes[currentTheme].colors.success;

  vars['--gradient-dark'] = `linear-gradient(180deg, hsl(${d.background}) 0%, hsl(${d.muted}) 100%)`;
  vars['--shadow-elegant'] = `0 20px 60px -15px hsl(${d.background} / 0.4)`;

  vars['--sidebar-background'] = d.background;
  vars['--sidebar-foreground'] = d.foreground;
  vars['--sidebar-primary'] = colorSchemes[currentTheme].colors.primary;
  vars['--sidebar-primary-foreground'] = d.foreground;
  vars['--sidebar-accent'] = d.accent;
  vars['--sidebar-accent-foreground'] = d.foreground;
  vars['--sidebar-border'] = d.border;
  vars['--sidebar-ring'] = d.ring;

  return vars;
};

const themeConfig = {
  colorSchemes,
  currentTheme,
  hsl,
  cssVar,
  generateCSSVariables,
  generateDarkVariables,
};

export default themeConfig;
