import { Button } from "@/components/ui/button";
import { CatMark } from "@/components/icons";
import { hero, profile, skills } from "@/content/site";

export const Intro = () => (
  <section id="top" className="relative py-16 sm:py-24">
    {/* soft blush glow behind the headline */}
    <div
      aria-hidden
      className="pointer-events-none absolute -left-24 -top-10 -z-10 h-80 w-80 rounded-full bg-blush/40 blur-3xl"
    />
    <CatMark className="h-9 w-auto" />
    <p className="caps mt-8 text-cocoa/80">{profile.role}</p>
    <h1 className="display mt-4 max-w-3xl text-3xl sm:text-5xl">
      {hero.headline[0]}
      <span className="mt-3 block font-body text-xl normal-case leading-snug tracking-normal [font-stretch:100%] sm:text-3xl">
        {hero.headline[1]}
      </span>
    </h1>
    <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{hero.intro}</p>
    <div className="mt-8 flex flex-wrap items-center gap-6">
      <Button asChild size="pill">
        <a href="#projects">See my projects</a>
      </Button>
      <a href="#contact" className="caps link-underline">
        Get in touch
      </a>
    </div>
    <p className="mt-12 max-w-2xl text-sm leading-relaxed text-cocoa/80">
      <span className="sr-only">Skills: </span>
      {skills.join("  ·  ")}
    </p>
  </section>
);
