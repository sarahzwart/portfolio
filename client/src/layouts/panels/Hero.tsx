import { Button } from "@/components/ui/button";
import { CatMark } from "@/components/icons";
import { hero, skills } from "@/content/site";

export const Hero = () => {
  return (
    <>
      <section id="top" className="px-5 pb-20 pt-10 text-center sm:pt-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <CatMark />
          <h1 className="display mt-6 text-[1.55rem] sm:text-4xl md:text-[2.6rem]">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{hero.intro}</p>
          <Button asChild size="pill" className="mt-8">
            <a href="#projects">See my projects</a>
          </Button>
        </div>
      </section>

      {/* The track slides left by half its width, then restarts. Each half
          repeats the skills twice so it's wider than any screen and the loop
          never shows a gap. Only the first list is read by screen readers. */}
      <div className="overflow-hidden bg-lime py-2.5 text-cocoa" aria-label="Skills">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((copy) => (
            <ul key={copy} aria-hidden={copy > 0} className="flex shrink-0">
              {skills.map((s) => (
                <li key={s} className="caps flex items-center whitespace-nowrap !text-[0.62rem]">
                  <span className="px-5">{s}</span>
                  <span aria-hidden>✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
