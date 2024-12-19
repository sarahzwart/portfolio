import { Navbar } from "./components/pages/Navbar";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
    className="bg-gradient-to-r from-[#ffbee6] to-white"
    animate={{
      backgroundPosition: ["0% 50%", "50% 50%", "100% 50%", "50% 50%", "0% 50%"], // Start from left (pink), move to center, then to right (gray) and back
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundSize: "200% 200%", // Larger size for smoother animation
    }}
    >
    <div className="scroll-smooth" >
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </motion.div>
  );
}

export default App;
