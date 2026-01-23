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
              Hi! I&apos;m Sarah Zwart and I recently graduated from Lehigh University and earned a Bachelors of Science in Computer Science and
              Minor in Data Science. To finish off my degree, I finished a year-long capstone project focused on developing an accessibility-based 
              facility rating app, where I utilized React Native and TypeScript to create a mobile app. 
              <br/>
              I currently work as a Control Systems Programmer at USIS Audiovisual, where I design and implement touch panel interfaces to control and 
              monitor AV systems. My role involves configuring IP-based communication between networked and embedded devices, testing system 
              functionality, and troubleshooting connectivity and communication issues to ensure reliable operation.
            </p>
          </div>
          <code className="block mt-6 p-4 bg-gray-100 rounded-md text-gray-800 whitespace-pre-wrap shadow-md text-xs sm:text-xxs md:text-sm">
            {`// ABOUT ME CODE`}
            <br />
            {`const credentials = {`}
            <br />
            &nbsp;&nbsp;{`school: "Lehigh University",`}
            <br />
            &nbsp;&nbsp;{`degree: "Computer Science",`}
            <br />
            &nbsp;&nbsp;{`minor: "Data Science",`}
            <br />
            &nbsp;&nbsp;{`certifications: Q-SYS Level 2, Crestron Intermediate System Programmer`}
            <br />
            &nbsp;&nbsp;{`collegeCourses: ["Cybersecurity", "Capstone", "Web Development", "Databases"]`}
            <br />
            {`};`}
            <br />
            {`let interests = ["Lifting", "Coding", "Puzzles", "Cat Videos"];`}
            <br />
            {`let favCodingLang = ["Java", "Python", "Typescript"];`}
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
