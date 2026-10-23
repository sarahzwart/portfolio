import { profile } from "@/content/site";

export const Footer = () => {
  return (
    <footer className="bg-sky px-4 py-4 text-center text-cocoa">
      <p className="caps !text-[0.6rem]">
        Thanks for visiting <span aria-hidden className="mx-2">✦</span> © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
};
