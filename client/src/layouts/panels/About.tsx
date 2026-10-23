import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NameBadge } from "@/components/icons";
import { about, photos } from "@/content/site";

export const About = () => {
  return (
    <section id="about" className="grid md:grid-cols-2">
      <div className="dots relative flex items-center justify-center px-8 py-14 sm:px-14">
        <div className="relative w-full max-w-sm">
          <div className="aspect-square w-full overflow-hidden rounded-[2.5rem] border-[3px] border-cocoa">
            <Image
              src={photos.about.src}
              alt={photos.about.alt}
              className="h-full w-full object-cover"
              style={{
                objectPosition: photos.about.focus,
                transform: `scale(${photos.about.zoom ?? 1})`,
                transformOrigin: photos.about.focus,
              }}
              placeholder="blur"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 rounded-full bg-cream/80 sm:-right-10">
            <NameBadge />
          </div>
        </div>
      </div>

      <div className="flex items-center bg-blush px-8 py-16 sm:px-14">
        <div className="max-w-md">
          <h2 className="display text-xl sm:text-2xl">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-5" : "mt-4"} leading-relaxed`}>
              {p}
            </p>
          ))}
          <Button asChild variant="secondary" size="pill" className="mt-8">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
