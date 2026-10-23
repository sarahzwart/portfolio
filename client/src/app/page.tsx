import { siteConfig } from "@/site.config";
import type { LayoutId } from "@/theme/themes";
import { PanelsHome } from "@/layouts/panels/PanelsHome";
import { EditorialHome } from "@/layouts/editorial/EditorialHome";
import { PreviewLayout } from "@/components/preview/PreviewLayout";

// Every layout id needs an entry here, or TypeScript will flag it
const layouts: Record<LayoutId, React.ReactNode> = {
  panels: <PanelsHome />,
  editorial: <EditorialHome />,
};

export default function Home() {
  if (process.env.NODE_ENV === "development") return <PreviewLayout layouts={layouts} />;
  return layouts[siteConfig.layout];
}
