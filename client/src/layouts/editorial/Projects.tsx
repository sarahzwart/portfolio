import { projects, type Project } from "@/content/site";
import { Section } from "./Section";

const ProjectBody = ({ p }: { p: Project }) => (
  <>
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <h3 className="display text-sm sm:text-base">{p.name}</h3>
      {p.status && (
        <span className="caps rounded-full border border-cocoa/40 px-2.5 py-0.5 !text-[0.55rem]">{p.status}</span>
      )}
    </div>
    <p className="mt-1 text-sm italic text-cocoa/80">{p.stack}</p>
    <p className="mt-3 leading-relaxed">{p.about}</p>
    {p.link && (
      <span className="caps mt-4 inline-flex items-center gap-2">
        View project
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
          →
        </span>
      </span>
    )}
  </>
);

export const Projects = () => (
  <Section id="projects" label="Projects">
    <ul className="-mx-4 space-y-2">
      {projects.map((p) => (
        <li key={p.name}>
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl px-4 py-5 transition-colors duration-300 hover:bg-petal/60 focus-visible:bg-petal/60"
            >
              <ProjectBody p={p} />
            </a>
          ) : (
            <div className="px-4 py-5">
              <ProjectBody p={p} />
            </div>
          )}
        </li>
      ))}
    </ul>
  </Section>
);
