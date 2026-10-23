"use client";

// Dev-only theme and layout switcher. Only rendered by app/layout.tsx when
// running `npm run dev`; the live site always uses src/site.config.ts.
import { createContext, useContext, useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { isLayoutId, isThemeId, layouts, themes, type LayoutId, type ThemeId } from "@/theme/themes";

const STORAGE_KEY = "portfolio-preview";

type Choice = { theme: ThemeId; layout: LayoutId };

const PreviewContext = createContext<LayoutId>(siteConfig.layout);
export const usePreviewLayout = () => useContext(PreviewContext);

// URL params win over the last saved choice, which wins over the config
function readInitialChoice(): Choice {
  const params = new URLSearchParams(window.location.search);
  let saved: Partial<Record<keyof Choice, unknown>> = {};
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {}
  const theme = [params.get("theme"), saved.theme].find(isThemeId) ?? siteConfig.theme;
  const layout = [params.get("layout"), saved.layout].find(isLayoutId) ?? siteConfig.layout;
  return { theme, layout };
}

function saveChoice(choice: Choice) {
  const url = new URL(window.location.href);
  url.searchParams.set("theme", choice.theme);
  url.searchParams.set("layout", choice.layout);
  window.history.replaceState(null, "", url);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  } catch {}
}

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<Choice>(siteConfig);
  const [open, setOpen] = useState(true);

  useEffect(() => setChoice(readInitialChoice()), []);

  useEffect(() => {
    document.documentElement.dataset.theme = choice.theme;
  }, [choice.theme]);

  const update = (next: Partial<Choice>) => {
    const merged = { ...choice, ...next };
    setChoice(merged);
    saveChoice(merged);
  };

  const isLive = choice.theme === siteConfig.theme && choice.layout === siteConfig.layout;

  return (
    <PreviewContext.Provider value={choice.layout}>
      {children}
      <aside
        aria-label="Theme and layout preview (development only)"
        className="fixed bottom-4 left-4 z-50 rounded-2xl border-2 border-cocoa bg-paper p-3 font-body text-xs text-cocoa shadow-lg"
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="caps flex w-full items-center justify-between gap-6 !text-[0.6rem]"
        >
          Preview <span aria-hidden>{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center justify-between gap-3">
              Theme
              <select
                value={choice.theme}
                onChange={(e) => update({ theme: e.target.value as ThemeId })}
                className="rounded-lg border border-cocoa bg-cream px-2 py-1"
              >
                {themes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center justify-between gap-3">
              Layout
              <select
                value={choice.layout}
                onChange={(e) => update({ layout: e.target.value as LayoutId })}
                className="rounded-lg border border-cocoa bg-cream px-2 py-1"
              >
                {layouts.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </label>
            <p className="max-w-[14rem] pt-1 leading-snug opacity-80">
              {isLive ? (
                "This is what the live site shows."
              ) : (
                <>
                  To go live, set <code>theme: &quot;{choice.theme}&quot;</code> and{" "}
                  <code>layout: &quot;{choice.layout}&quot;</code> in site.config.ts.
                </>
              )}
            </p>
            {!isLive && (
              <button type="button" onClick={() => update(siteConfig)} className="link-underline">
                Back to live settings
              </button>
            )}
          </div>
        )}
      </aside>
    </PreviewContext.Provider>
  );
}
