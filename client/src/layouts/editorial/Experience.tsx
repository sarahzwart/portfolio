import { experience, profile } from "@/content/site";
import { Section } from "./Section";

export const Experience = () => (
  <Section id="experience" label="Experience">
    <ol>
      {experience.map((s) => (
        <li
          key={s.what}
          className="grid gap-x-6 gap-y-1 border-b border-cocoa/15 py-6 first:pt-0 last:border-0 sm:grid-cols-[9.5rem_1fr]"
        >
          <p className="caps pt-1 !text-[0.6rem] text-cocoa/80">{s.when}</p>
          <div>
            <h3 className="font-bold leading-snug">{s.what}</h3>
            <p className="text-sm italic">{s.where}</p>
            <p className="mt-2 leading-relaxed">{s.summary}</p>
          </div>
        </li>
      ))}
    </ol>
    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="caps link-underline mt-6 inline-block">
      View my GitHub →
    </a>
  </Section>
);
