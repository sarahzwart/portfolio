import { HobbyIcon } from "@/components/icons";
import { Polaroid } from "@/components/Polaroid";
import { hobbies, photos } from "@/content/site";

export const Hobbies = () => {
  return (
    <section id="hobbies" className="px-5 py-20 text-center">
      <h2 className="display text-xl sm:text-2xl">Things I love</h2>
      <div className="mx-auto mt-12 grid max-w-5xl items-center justify-items-center gap-14 lg:grid-cols-[1fr_16rem]">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12">
          {hobbies.map((h) => (
            <li key={h.title} className="flex flex-col items-center">
              <HobbyIcon name={h.icon} />
              <h3 className="display mt-4 text-[0.78rem] tracking-[0.14em]">
                {h.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed">
                {h.text}
              </p>
            </li>
          ))}
        </ul>
        <Polaroid photo={photos.hobbies} />
      </div>
    </section>
  );
};
