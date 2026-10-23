import Image from "next/image";
import { about, photos } from "@/content/site";
import { Section } from "./Section";

export const About = () => (
  <Section id="about" label="About">
    <div className="grid items-start gap-8 sm:grid-cols-[12rem_1fr]">
      <div className="aspect-[3/4] w-40 overflow-hidden rounded-t-full rounded-b-3xl border-[3px] border-cocoa sm:w-full">
        <Image
          src={photos.about.src}
          alt={photos.about.alt}
          sizes="12rem"
          className="h-full w-full object-cover"
          style={{
            objectPosition: photos.about.focus,
            transform: `scale(${photos.about.zoom ?? 1})`,
            transformOrigin: photos.about.focus,
          }}
          placeholder="blur"
        />
      </div>
      <div>
        <h3 className="display text-lg">{about.heading}</h3>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  </Section>
);
