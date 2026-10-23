"use client";

import type { LayoutId } from "@/theme/themes";
import { usePreviewLayout } from "./PreviewProvider";

// Shows whichever layout is picked in the dev preview bar
export function PreviewLayout({ layouts }: { layouts: Record<LayoutId, React.ReactNode> }) {
  return layouts[usePreviewLayout()];
}
