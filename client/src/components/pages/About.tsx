import './About.css'
import { Card } from "@/components/ui/card"; 
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      className="py-12"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Card className="p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-slate-400">About Me</h1>
          <p className="mt-4 text-gray-700">
            Hi, I'm Sarah!
            <br /> 
            I'm 21 years old from Levittown NY.  Im currently pursuing a Computer Science degree
            with a minor in Data Science at Lehigh University in the P.C. Rossin College of Engineering Program.
            <br /> 
            I recently completed a year-long capstone project focused on developing a accessibility based facility rating app, where I 
            utilized React Native and TypeScript to build solutions that enhance usability for all users. 
          </p>

          <code className="block mt-6 p-4 bg-gray-100 rounded-md text-gray-800 whitespace-pre-wrap shadow-md">
            {`// School details`}
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
            <br />
            {`const hobbies = ["Running", "Coding", "Making Yogurt Bowls :)"];`}
            <br />
            {`const favoriteTech = ["TypeScript", "React", "Node.js"];`}
            <br />
            {`const currentMood = "Eager to tackle more challenges and grow!"`}
            <br />
            <span className="blinking-cursor">|</span>
          </code>
        </Card>
      </div>
    </div>
  );
};
