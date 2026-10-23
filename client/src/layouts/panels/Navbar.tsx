import { banner, navLinks, profile } from "@/content/site";

export const Navbar = ({ showJournal }: { showJournal: boolean }) => {
  const links = showJournal ? [...navLinks.slice(0, -1), { href: "#journal", label: "Journal" }, navLinks.at(-1)!] : navLinks;
  const [first, ...rest] = profile.name.split(" ");

  return (
    <header>
      <div className="bg-sky px-4 py-2 text-center text-cocoa">
        <p className="caps !text-[0.6rem] sm:!text-[0.65rem]">
          {banner[0]}
          {banner.slice(1).map((b) => (
            <span key={b} className="hidden sm:inline">
              <span aria-hidden className="mx-3">
                ✦
              </span>
              {b}
            </span>
          ))}
        </p>
      </div>

      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-5 sm:flex-row sm:justify-between sm:px-8">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="display shrink-0 text-lg font-serif leading-[1.05] tracking-[0.14em] sm:text-2xl"
        >
          {first}
          <br />
          {rest.join(" ")}
        </a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="caps text-cocoa underline-offset-8 hover:underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
