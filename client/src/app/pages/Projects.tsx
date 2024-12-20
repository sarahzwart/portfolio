import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const projects = [
    {
      name: "Facility Accessibility App",
      description: `
        <b>Language:</b> Typescript <br/> 
        <b>Frontend Framework:</b> Expo-React Native <br/> 
        <b>About:</b> A mobile app designed to help people with disabilities assess whether public facilities meet their accessibility needs. The app provides detailed ratings of facility accessibility, empowering users to make informed decisions about visiting locations that cater to their specific requirements. The project combines accessibility best practices and modern mobile development techniques to enhance the user experience.
      `,
      link: "https://drive.google.com/drive/folders/1LoIyNDDRjvS_BW3q5_-bnTWd3U0UzP4q?usp=sharing",
    },
    {
      name: "Database Banking System",
      description: `
        <b>Language:</b> Java <br/> 
        <b>Database:</b> Oracle <br/> 
        <b>About:</b> A project developed in my Database Systems and Applications class that simulates a real-world banking system. The system allows for the creation of users, deposits, withdrawals, and transactions. It incorporates PL/SQL for stored procedures and complex queries, with a focus on database integrity and performance optimization. This project provided hands-on experience with database modeling, relational queries, and transaction handling.
      `,
      link: "https://github.com/sarahzwart/cse241-project",
    },
    {
      name: "Plant Pal",
      description:
        "<b>Frontend:</b> Vite + React, Javascript, Shadcn + Tailwind CSS, Axios, Google OAuth <br/> <b>Backend:</b> Express Server <br/> <b>Database:</b> ElephantSQL <br/> <b>APIs:</b> Perenual Plant API, Google OAuth API <br/> <b>About:</b> Plant Pal is an app that helps users manage their online garden by tracking when to water their plants. Users can log in via Google, add plants to their garden, and keep track of their watering status. Paid users receive personalized plant care tips to ensure their plants thrive.",
      link: "https://github.com/sarahzwart/plantpal",
    },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#675D50]">
          Projects
        </h2>
        <div className="relative mt-8 flex justify-center">
          <Carousel setApi={setApi} className="w-full max-w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Card className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg transition duration-300 hover:shadow-xl max-w-[60vw]">
                    <CardContent className="flex flex-col items-center justify-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#675D50] text-center">
                        {project.name}
                      </h3>
                      <p
                        className="mt-2 text-gray-600 text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-[#675D50] hover:text-[#86827c] transition duration-300 text-center text-sm sm:text-base mx-auto"
                      >
                        View Project
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300" />
          </Carousel>
        </div>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
}

