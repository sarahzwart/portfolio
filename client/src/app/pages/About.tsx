import { Card } from "@/components/ui/card"; 

export const About = () => {
  return (
    <div className="py-8 md:py-12 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Card className="p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold text-[#ffacdf]">About Me</h1>
            <p className="mt-4 text-gray-700">
              Hi! Welcome to my portfolio website. I&apos;m Sarah Zwart, a senior studying Computer Science at Lehigh University. 
              I recently completed a year-long capstone project focused on developing an accessibility-based facility rating app, where I 
              utilized React Native and TypeScript. 
            </p>
          </div>
          <code className="block mt-6 p-4 bg-gray-100 rounded-md text-gray-800 whitespace-pre-wrap shadow-md">
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
