#!/usr/bin/env node
/**
 * Theme CSS Generator
 * Reads theme-config.ts and generates theme-config.css with all CSS variables
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Theme color definitions (must match theme-config.ts)
const themeDefinitions = {
  teal: {
    colors: {
      primary: '158 64% 52%',
      primaryDark: '158 64% 42%',
      primaryLight: '158 64% 65%',
      accent: '174 72% 56%',
      accentDark: '174 72% 40%',
      accentLight: '174 72% 68%',
      background: '160 20% 97%',
      card: '0 0% 100%',
      foreground: '160 20% 10%',
      muted: '160 20% 95%',
      mutedForeground: '160 15% 40%',
      border: '160 25% 88%',
      input: '160 20% 92%',
      heading: '160 20% 10%',
      subheading: '160 15% 40%',
      cta: '24 100% 50%',
      ctaForeground: '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      success: '158 64% 52%',
      warning: '48 100% 50%',
      ring: '158 64% 52%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '160 20% 25%',
      input: '160 20% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '158 64% 52%',
      ring: '158 64% 52%',
    },
  },
  blue: {
    colors: {
      primary: '220 100% 50%',
      primaryDark: '220 100% 40%',
      primaryLight: '220 100% 60%',
      accent: '220 85% 55%',
      accentDark: '220 85% 25%',
      accentLight: '220 100% 65%',
      background: '0 0% 100%',
      card: '0 0% 100%',
      foreground: '0 0% 0%',
      muted: '220 13% 97%',
      mutedForeground: '220 13% 45%',
      border: '220 13% 86%',
      input: '220 13% 90%',
      heading: '220 100% 20%',
      subheading: '220 13% 45%',
      cta: '220 100% 50%',
      ctaForeground: '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      success: '142 76% 36%',
      warning: '45 93% 58%',
      ring: '220 100% 50%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '220 13% 25%',
      input: '220 13% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '220 100% 50%',
      ring: '220 100% 50%',
    },
  },
  gold: {
    colors: {
      primary: '45 80% 55%',
      primaryDark: '45 80% 45%',
      primaryLight: '45 80% 65%',
      accent: '45 90% 65%',
      accentDark: '45 70% 45%',
      accentLight: '45 90% 75%',
      background: '0 0% 100%',
      card: '0 0% 100%',
      foreground: '0 0% 0%',
      muted: '45 20% 97%',
      mutedForeground: '45 15% 45%',
      border: '45 20% 86%',
      input: '45 20% 90%',
      heading: '45 80% 25%',
      subheading: '45 15% 45%',
      cta: '45 80% 55%',
      ctaForeground: '0 0% 0%',
      destructive: '0 84.2% 60.2%',
      success: '142 76% 36%',
      warning: '45 93% 58%',
      ring: '45 80% 55%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '45 20% 25%',
      input: '45 20% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '45 80% 55%',
      ring: '45 80% 55%',
    },
  },
  purple: {
    colors: {
      primary: '270 100% 60%',
      primaryDark: '270 100% 50%',
      primaryLight: '270 100% 70%',
      accent: '270 100% 65%',
      accentDark: '270 85% 35%',
      accentLight: '270 100% 75%',
      background: '0 0% 100%',
      card: '0 0% 100%',
      foreground: '0 0% 0%',
      muted: '270 13% 97%',
      mutedForeground: '270 13% 45%',
      border: '270 13% 86%',
      input: '270 13% 90%',
      heading: '270 100% 20%',
      subheading: '270 13% 45%',
      cta: '270 100% 60%',
      ctaForeground: '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      success: '142 76% 36%',
      warning: '45 93% 58%',
      ring: '270 100% 60%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '270 13% 25%',
      input: '270 13% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '270 100% 60%',
      ring: '270 100% 60%',
    },
  },
  green: {
    colors: {
      primary: '142 76% 36%',
      primaryDark: '142 76% 26%',
      primaryLight: '142 76% 46%',
      accent: '142 86% 46%',
      accentDark: '142 66% 26%',
      accentLight: '142 86% 56%',
      background: '0 0% 100%',
      card: '0 0% 100%',
      foreground: '0 0% 0%',
      muted: '142 13% 97%',
      mutedForeground: '142 13% 45%',
      border: '142 13% 86%',
      input: '142 13% 90%',
      heading: '142 76% 20%',
      subheading: '142 13% 45%',
      cta: '142 76% 36%',
      ctaForeground: '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      success: '142 76% 36%',
      warning: '45 93% 58%',
      ring: '142 76% 36%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '142 13% 25%',
      input: '142 13% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '142 76% 36%',
      ring: '142 76% 36%',
    },
  },
  red: {
    colors: {
      primary: '0 84% 60%',
      primaryDark: '0 84% 50%',
      primaryLight: '0 84% 70%',
      accent: '0 84% 65%',
      accentDark: '0 70% 40%',
      accentLight: '0 84% 75%',
      background: '0 0% 100%',
      card: '0 0% 100%',
      foreground: '0 0% 0%',
      muted: '0 13% 97%',
      mutedForeground: '0 13% 45%',
      border: '0 13% 86%',
      input: '0 13% 90%',
      heading: '0 84% 25%',
      subheading: '0 13% 45%',
      cta: '0 84% 60%',
      ctaForeground: '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      success: '142 76% 36%',
      warning: '45 93% 58%',
      ring: '0 84% 60%',
    },
    dark: {
      background: '0 0% 12%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      muted: '0 0% 20%',
      mutedForeground: '0 0% 65%',
      border: '0 13% 25%',
      input: '0 13% 25%',
      heading: '0 0% 95%',
      subheading: '0 0% 65%',
      accent: '0 84% 60%',
      ring: '0 84% 60%',
    },
  },
};

// Read current theme from theme-config.ts
const themeConfigPath = path.join(__dirname, '../src/lib/theme-config.ts');
const themeConfigContent = fs.readFileSync(themeConfigPath, 'utf8');
const currentThemeMatch = themeConfigContent.match(/export const currentTheme = "([^"]+)"/);
const currentTheme = currentThemeMatch ? currentThemeMatch[1] : 'teal';

function generateCSS(themeName) {
  const theme = themeDefinitions[themeName];
  if (!theme) {
    console.error(`❌ Unknown theme: ${themeName}`);
    console.log('Available themes:', Object.keys(themeDefinitions).join(', '));
    process.exit(1);
  }

  const c = theme.colors;
  const d = theme.dark;

  return `/*
 * ═══════════════════════════════════════════════════════════════
 *  AUTO-GENERATED THEME CSS - DO NOT EDIT DIRECTLY
 * ═══════════════════════════════════════════════════════════════
 *  Generated from: src/lib/theme-config.ts
 *  Current theme: ${themeName}
 *  Run: npm run theme:generate
 * ═══════════════════════════════════════════════════════════════
 */

/* ── Light Mode (Default) ── */
:root {
  /* Core Colors */
  --theme-background: ${c.background};
  --theme-foreground: ${c.foreground};
  --theme-card: ${c.card};
  --theme-card-foreground: ${c.foreground};
  --theme-popover: ${c.card};
  --theme-popover-foreground: ${c.foreground};
  
  /* Primary */
  --theme-primary: ${c.primary};
  --theme-primary-foreground: 0 0% 100%;
  --theme-primary-dark: ${c.primaryDark};
  --theme-primary-light: ${c.primaryLight};
  
  /* Secondary / Muted */
  --theme-secondary: ${c.muted};
  --theme-secondary-foreground: ${c.foreground};
  --theme-muted: ${c.muted};
  --theme-muted-foreground: ${c.mutedForeground};
  
  /* Accent */
  --theme-accent: ${c.accent};
  --theme-accent-foreground: 0 0% 100%;
  --theme-accent-dark: ${c.accentDark};
  --theme-accent-light: ${c.accentLight};
  
  /* UI */
  --theme-border: ${c.border};
  --theme-input: ${c.input};
  --theme-ring: ${c.ring};
  
  /* Headings */
  --theme-heading: ${c.heading};
  --theme-subheading: ${c.subheading};
  
  /* CTA */
  --theme-cta: ${c.cta};
  --theme-cta-foreground: ${c.ctaForeground};
  
  /* Status */
  --theme-destructive: ${c.destructive};
  --theme-destructive-foreground: 0 0% 98%;
  --theme-success: ${c.success};
  --theme-warning: ${c.warning};
  
  /* Aliases */
  --theme-brand-blue: ${c.accentDark};
  --theme-gold: ${c.primary};
  --theme-gold-dark: ${c.primaryDark};
  --theme-gold-light: ${c.primaryLight};
  --theme-call-orange: ${c.cta};
  --theme-call-yellow: ${c.warning};
  --theme-call-green: ${c.success};
  
  /* Gradients */
  --theme-gradient-gold: linear-gradient(135deg, hsl(${c.primary}) 0%, hsl(${c.accentDark}) 100%);
  --theme-gradient-dark: linear-gradient(180deg, hsl(${c.accentDark}) 0%, hsl(${c.accentDark}) 100%);
  --theme-gradient-light: linear-gradient(180deg, hsl(${c.background}) 0%, hsl(${c.muted}) 100%);
  
  /* Shadows */
  --theme-shadow-gold: 0 10px 40px -10px hsl(${c.primary} / 0.15);
  --theme-shadow-gold-lg: 0 25px 80px -20px hsl(${c.primary} / 0.25);
  --theme-shadow-elegant: 0 20px 60px -15px hsl(${c.accentDark} / 0.12);
  --theme-shadow-card: 0 2px 8px -2px hsl(${c.accentDark} / 0.08);
  --theme-shadow-brutal: 8px 8px 0px hsl(${c.primary});
  
  /* Sidebar */
  --theme-sidebar-background: ${c.background};
  --theme-sidebar-foreground: ${c.foreground};
  --theme-sidebar-primary: ${c.primary};
  --theme-sidebar-primary-foreground: 0 0% 100%;
  --theme-sidebar-accent: ${c.muted};
  --theme-sidebar-accent-foreground: ${c.foreground};
  --theme-sidebar-border: ${c.border};
  --theme-sidebar-ring: ${c.ring};
}

/* ── Dark Mode ── */
.dark {
  --theme-background: ${d.background};
  --theme-foreground: ${d.foreground};
  --theme-card: ${d.card};
  --theme-card-foreground: ${d.foreground};
  --theme-popover: ${d.card};
  --theme-popover-foreground: ${d.foreground};
  --theme-muted: ${d.muted};
  --theme-muted-foreground: ${d.mutedForeground};
  --theme-border: ${d.border};
  --theme-input: ${d.input};
  --theme-accent: ${d.accent};
  --theme-accent-foreground: 0 0% 100%;
  --theme-ring: ${d.ring};
  --theme-heading: ${d.heading};
  --theme-subheading: ${d.subheading};
  --theme-brand-blue: ${c.accentDark};
  --theme-gold: ${c.primary};
  --theme-call-orange: ${c.cta};
  --theme-call-yellow: ${c.warning};
  --theme-call-green: ${c.success};
  --theme-gradient-dark: linear-gradient(180deg, hsl(${d.background}) 0%, hsl(${d.muted}) 100%);
  --theme-shadow-elegant: 0 20px 60px -15px hsl(${d.background} / 0.4);
  --theme-sidebar-background: ${d.background};
  --theme-sidebar-foreground: ${d.foreground};
  --theme-sidebar-primary: ${c.primary};
  --theme-sidebar-primary-foreground: ${d.foreground};
  --theme-sidebar-accent: ${d.accent};
  --theme-sidebar-accent-foreground: ${d.foreground};
  --theme-sidebar-border: ${d.border};
  --theme-sidebar-ring: ${d.ring};
}
`;
}

// Generate CSS
const css = generateCSS(currentTheme);
const outputPath = path.join(__dirname, '../src/lib/theme-config.css');
fs.writeFileSync(outputPath, css);

console.log(`✅ Generated theme CSS for: ${currentTheme}`);
console.log(`📁 Output: ${outputPath}`);
console.log('\n🎨 Available themes:');
Object.keys(themeDefinitions).forEach(t => {
  console.log(`  ${t === currentTheme ? '●' : '○'} ${t}`);
});
console.log(`\n💡 To change theme, edit currentTheme in src/lib/theme-config.ts`);
console.log(`   Then run: npm run theme:generate`);
