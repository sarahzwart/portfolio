import { profile } from "@/content/site";

export const Footer = () => (
  <footer className="mx-auto max-w-5xl px-5 sm:px-8">
    <p className="caps border-t border-cocoa/15 py-8 text-center !text-[0.6rem]">
      Thanks for visiting <span aria-hidden className="mx-2 text-ember">✦</span> © {new Date().getFullYear()} {profile.name}
    </p>
  </footer>
);
