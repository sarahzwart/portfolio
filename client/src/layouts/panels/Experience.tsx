import { Button } from "@/components/ui/button";
import Image from "next/image";
import { experience, photos, profile } from "@/content/site";

export const Experience = () => {
  return (
    <section id="experience" className="grid lg:grid-cols-[1fr_1.15fr_1fr]">
      <div className="relative min-h-[22rem]">
        <Image
          src={photos.experience.src}
          alt={photos.experience.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          style={{ objectPosition: photos.experience.focus }}
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-sky px-8 py-14 text-center">
        <h2 className="display text-xl sm:text-2xl">Where I&apos;ve been</h2>
        <ol className="mt-8 w-full max-w-sm space-y-6 text-left">
          {experience.map((s) => (
            <li key={s.what} className="border-l-2 border-cocoa pl-3">
              <p className="font-bold leading-snug">{s.what}</p>
              <p className="text-sm leading-snug">{s.when}</p>
              <p className="text-xs">{s.where}</p>
              <p className="mt-2 text-sm leading-relaxed">{s.summary}</p>
            </li>
          ))}
        </ol>
        <Button asChild variant="cream" size="pill" className="mt-9">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            View my GitHub
          </a>
        </Button>
      </div>

      <div className="flex items-center justify-center bg-petal px-6 py-14">
        <pre className="w-full max-w-sm overflow-x-auto rounded-2xl border-[3px] border-cocoa bg-cream p-5 text-[0.78rem] leading-relaxed">
          <code>
            <span className="opacity-60">{"// about me"}</span>
            {"\nconst credentials = {\n"}
            {"  school: \"Lehigh University\",\n"}
            {"  degree: \"Computer Science\",\n"}
            {"  minor: \"Data Science\",\n"}
            {"};\n\n"}
            {"let favLanguages = [\n  \"Java\", \"Python\", \"TypeScript\"\n];"}
          </code>
        </pre>
      </div>
    </section>
  );
};
