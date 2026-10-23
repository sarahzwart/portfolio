// Each id matches a [data-theme="..."] block in app/globals.css.
// To add a theme: add a CSS block there, then add it here.
export const themes = [
  { id: "strawberry-matcha", label: "Strawberry Matcha" },
  { id: "beach", label: "Beach" },
  { id: "neutral-pink", label: "Neutral Pink" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

// Each id has a folder in src/layouts/ and an entry in app/page.tsx.
export const layouts = [
  { id: "panels", label: "Panels" },
  { id: "editorial", label: "Editorial" },
] as const;

export type LayoutId = (typeof layouts)[number]["id"];

export const isThemeId = (v: unknown): v is ThemeId => themes.some((t) => t.id === v);
export const isLayoutId = (v: unknown): v is LayoutId => layouts.some((l) => l.id === v);
