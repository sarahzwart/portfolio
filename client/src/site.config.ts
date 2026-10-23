import type { LayoutId, ThemeId } from "@/theme/themes";

// What visitors see on the live site. Try other combinations with the
// preview bar in `npm run dev`, then copy the one you like here.
export const siteConfig: { theme: ThemeId; layout: LayoutId } = {
  theme: "beach",
  layout: "panels",
};
