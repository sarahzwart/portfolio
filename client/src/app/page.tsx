"use client";
import { useEffect } from "react";
import { Navbar } from "./pages/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { motion, Variants } from "framer-motion";
import Headshot from "../assets/headshot1.jpg";
import Image from "next/image";


const fadeInVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

function Home() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
    window.addEventListener('load', scrollToTop);
    return () => {
      window.removeEventListener('load', scrollToTop);
    };
  }, []); 

  return (
    <motion.div
      className="flex-wrap  inset-0 -z-10 bg-gradient-to-br from-[#FFF3E0] via-[#FFE0E0] to-[#F8BBD0] "
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className="scroll-smooth">
        <Navbar />
        <main>
          <motion.section
            id="hello"
            className="flex bg-transparent w-full h-[90vh] items-center justify-center overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
            }}
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-[12vw] w-full px-4">
              <div className="text-[6vw] font-bold text-[#675D50] flex flex-col items-start max-w-[45%]">
                <h1 className="leading-tight">Hello.</h1>
                <h1 className="leading-tight">I&apos;m Sarah</h1>
              </div>

              {/* Image Section */}
              <div className="max-w-[40%] flex justify-center">
                <Image
                  src={Headshot}
                  alt="Sarah Zwart's Headshot"
                  className="w-full max-w-[20rem] rounded-full object-cover transform transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            className=""
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <About />
          </motion.section>

          <motion.section
            id="projects"
            className=""
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <Projects />
          </motion.section>

          <motion.section
            id="contact"
            className=""
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Home;
