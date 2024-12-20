import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <Card className="p-6 sm:p-4 bg-white shadow-lg rounded-lg w-full sm:w-[90vw] md:w-[80vw]">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-[#675D50]">
              About Me
            </h1>
            <p className="mt-4 text-[#675D50] text-sm sm:text-xs md:text-base">
              Hi! Welcome to my portfolio website. I&apos;m Sarah Zwart, a senior studying Computer Science at Lehigh University. 
              I recently completed a year-long capstone project focused on developing an accessibility-based facility rating app, where I 
              utilized React Native and TypeScript. 
            </p>
          </div>
          <code className="block mt-6 p-4 bg-gray-100 rounded-md text-gray-800 whitespace-pre-wrap shadow-md text-xs sm:text-xxs md:text-sm">
            {`// ABOUT ME CODE`}
            <br />
            {`const school = {`}
            <br />
            &nbsp;&nbsp;{`major: "Computer Science",`}
            <br />
            &nbsp;&nbsp;{`minor: "Data Science",`}
            <br />
            &nbsp;&nbsp;{`year: 4,`}
            <br />
            &nbsp;&nbsp;{`pride: "Go Mountain Hawks! 🦅",`}
            <br />
            &nbsp;&nbsp;{`favoriteClasses: ["AI Theory", "Capstone", "Web Development", "Databases"]`}
            <br />
            {`};`}
            <br />
            {`let interests = ["Running", "Coding", "Baking", "Cat Videos"];`}
            <br />
            {`let favoriteTech = ["Java","TypeScript", "React", "Next.js"];`}
            <br />
            {`let projects = ["Facility Accessibility App", "PlantPal", "Bank Database"]`}
            <br/>
            <span className="blinking-cursor"></span>
          </code>
        </Card>
      </div>
      <style jsx>{`
        .blinking-cursor {
          width: 5px;
          height: 20px;
          background: #000000;
          animation: cursor-blink 1.5s steps(1) infinite;
          display: inline-block;
          vertical-align: middle; /* Align with text */
        }

        @keyframes cursor-blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
