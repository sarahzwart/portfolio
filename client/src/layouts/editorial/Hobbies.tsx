import { HobbyIcon } from "@/components/icons";
import { Polaroid } from "@/components/Polaroid";
import { hobbies, photos } from "@/content/site";
import { Section } from "./Section";

export const Hobbies = () => (
  <Section id="hobbies" label="Things I love">
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_13rem]">
      <ul className="grid gap-8 sm:grid-cols-2">
        {hobbies.map((h) => (
          <li key={h.title} className="flex gap-4">
            <HobbyIcon name={h.icon} className="h-10 w-14 shrink-0" />
            <div>
              <h3 className="display text-[0.78rem] tracking-[0.14em]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed">{h.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Polaroid photo={photos.hobbies} className="mx-auto -rotate-2 hover:rotate-0" />
    </div>
  </Section>
);
