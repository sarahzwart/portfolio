"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/content/site";

const LineArrow = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 64 12" aria-hidden>
    <path
      d={dir === "left" ? "M63 6H2M8 1L2 6l6 5" : "M1 6h61M56 1l6 5-6 5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Strips shadcn's round outline look so the arrows are just thin lines
const arrowStyle =
  "h-auto w-auto rounded-none border-0 bg-transparent p-2 text-cocoa hover:bg-transparent hover:text-matcha [&_svg]:h-3 [&_svg]:w-12 sm:[&_svg]:w-16";

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="projects" className="dots px-3 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="display inline-block bg-cream px-5 py-2 text-xl sm:text-2xl">Projects</h2>

        <Carousel setApi={setApi} opts={{ loop: true }} className="mt-10 sm:px-24" aria-label="Projects">
          <CarouselPrevious className={`${arrowStyle} left-0 hidden sm:inline-flex`} aria-label="Previous project">
            <LineArrow dir="left" />
          </CarouselPrevious>

          <CarouselContent>
            {projects.map((p, i) => (
              <CarouselItem key={p.name} aria-label={`${i + 1} of ${projects.length}`}>
                <Card className="rounded-3xl border-[3px] py-3 text-center shadow-none sm:px-6">
                  <CardHeader className="items-center pb-0">
                    <CardTitle className="display text-base font-medium leading-snug tracking-[0.08em] sm:text-lg">{p.name}</CardTitle>
                    <CardDescription className="italic">
                      {p.stack}
                      {p.status && <span className="ml-2 font-semibold not-italic">({p.status})</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <p className="mx-auto max-w-xl leading-relaxed">{p.about}</p>
                  </CardContent>
                  {p.link && (
                    <CardFooter className="justify-center">
                      <Button asChild size="pill">
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          View project
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className={`${arrowStyle} right-0 hidden sm:inline-flex`} aria-label="Next project">
            <LineArrow dir="right" />
          </CarouselNext>

          {/* Dots, with the arrows moved down here on phones */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <CarouselPrevious className={`${arrowStyle} static mr-3 translate-y-0 sm:hidden`} aria-label="Previous project">
              <LineArrow dir="left" />
            </CarouselPrevious>
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Show ${p.name}`}
                aria-current={i === current}
                className={`h-2.5 rounded-full border-2 border-cocoa transition-all ${
                  i === current ? "w-7 bg-cocoa" : "w-2.5 bg-cream"
                }`}
              />
            ))}
            <CarouselNext className={`${arrowStyle} static ml-3 translate-y-0 sm:hidden`} aria-label="Next project">
              <LineArrow dir="right" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
