import Image from "next/image";
import type { Photo } from "@/content/site";
import { cn } from "@/lib/utils";

// Slightly tilted print that straightens on hover
export const Polaroid = ({ photo, className }: { photo: Photo; className?: string }) => (
  <figure
    className={cn(
      "w-full max-w-[16rem] rotate-2 rounded-xl border-[3px] border-cocoa bg-paper p-3 pb-4 transition-transform duration-500 ease-out hover:rotate-0 motion-reduce:transition-none",
      className
    )}
  >
    <Image
      src={photo.src}
      alt={photo.alt}
      sizes="16rem"
      className="aspect-[4/5] w-full rounded-md object-cover"
      style={{ objectPosition: photo.focus }}
      placeholder="blur"
    />
    {photo.caption && <figcaption className="caps mt-3 text-center !text-[0.6rem]">{photo.caption}</figcaption>}
  </figure>
);
