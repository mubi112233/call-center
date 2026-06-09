/**
 * Theme color hook using the centralized theme-config.ts system
 * All colors are now CSS variables defined in theme-config.ts
 * Run `npm run theme:generate` after changing theme-config.ts
 */

export const useDesignColors = () => {
  // Colors are now managed via CSS variables in theme-config.css
  // These HSL values match the default teal theme in theme-config.ts
  return {
    primary: "158 64% 52%",
    secondary: "160 20% 95%",
    accent: "174 72% 56%",
    background: "160 20% 97%",
    foreground: "160 20% 10%",
    muted: "160 20% 95%",
    border: "160 25% 88%",
    card: "0 0% 100%",
    gold: "158 64% 52%",
    goldLight: "158 64% 65%",
    goldDark: "158 64% 42%",
  };
};

// CSS class generator for theme-aware colors
// These classes use CSS variables generated from theme-config.ts
export const useColorClasses = () => {
  return {
    "text-primary": "text-primary",
    "text-secondary": "text-secondary",
    "text-accent": "text-accent",
    "text-gold": "text-gold",
    "text-gold-light": "text-gold-light",
    "text-gold-dark": "text-gold-dark",
    "text-heading": "text-heading",
    "text-subheading": "text-subheading",
    "text-success": "text-success",
    "text-warning": "text-warning",
    "bg-primary": "bg-primary",
    "bg-secondary": "bg-secondary",
    "bg-accent": "bg-accent",
    "bg-gold": "bg-gold",
    "bg-gold-light": "bg-gold-light",
    "bg-gold-dark": "bg-gold-dark",
    "bg-success": "bg-success",
    "bg-warning": "bg-warning",
    "border-primary": "border-primary",
    "border-gold": "border-gold",
    "border-gold-light": "border-gold-light",
    "border-gold-dark": "border-gold-dark",
    "hover-gold": "hover:bg-gold/10 hover:text-gold",
    "hover-primary": "hover:bg-primary/10 hover:text-primary",
  };
};
