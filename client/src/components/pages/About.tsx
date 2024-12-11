import './About.css'
import { Card } from "@/components/ui/card"; 
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      className="py-12 bg-gradient-to-r from-pink-200 via-orange-200 via-yellow-200 via-teal-200 to-indigo-200"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Animation pattern
      }}
      transition={{
        duration: 8, // Duration for the transition
        repeat: Infinity, // Makes the animation repeat indefinitely
        ease: "linear", // Smooth linear easing
      }}
      style={{
        backgroundSize: "200% 200%", // To make the gradient large enough for the animation
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <Card className="p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-purple-600">About Me</h1>
          <p className="mt-4 text-gray-700">
            Hi, I'm Sarah, a passionate software engineer currently pursuing a Computer Science degree
            with a minor in Data Science at Lehigh University's P.C. Rossin College of Engineering and Applied Science. 
            I just finished my year-long capstone project focused on accessible web development and 
            I’m taking an AI Theory class this semester, where I’m diving into the world of intelligent systems!
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
            &nbsp;&nbsp;{`favoriteClasses: ["AI Theory", "Software Engineering", "Web Development", "Databases"]`}
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
    </motion.div>
  );
};
