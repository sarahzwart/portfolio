import Link from "next/link";
import { navLinks, profile } from "@/content/site";

// `base` is "" on the home page and "/" on journal pages, so the
// section links jump back to the right spot on the home page.
export const Header = ({ showJournal, base = "" }: { showJournal: boolean; base?: string }) => {
  const links = navLinks.map((l) => ({ ...l, href: base + l.href }));
  if (showJournal) links.splice(-1, 0, { href: "/journal", label: "Journal" });

  return (
    <header className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-7 sm:flex-row sm:justify-between sm:px-8">
      <Link href={base ? "/" : "#top"} className="display text-base tracking-[0.16em]">
        {profile.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="caps link-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
