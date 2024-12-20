"use client";
import { Navbar } from "./pages/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { motion, Variants } from "framer-motion";
import Headshot from "../assets/headshot.jpg";
import Image from "next/image";
import React, { useEffect } from "react";

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
    const helloSection = document.getElementById("hello");
    if (helloSection) {
      helloSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-r from-[#ffbee6] to-white flex-wrap"
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      <div className="scroll-smooth">
        <Navbar />
        <main>
          <motion.section
            id="hello"
            className="flex bg-[#f4f4f4] w-full h-[100vh] items-center justify-center overflow-hidden"
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-[12vw] w-full px-4">
              {/* Text Section */}
              <div className="text-[6vw] font-bold text-[#ffacdf] flex flex-col items-start max-w-[45%]">
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
            className="py-12"
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.7 }}
          >
            <About />
          </motion.section>

          <motion.section
            id="projects"
            className="py-12"
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
            viewport={{ amount: 0.8 }}
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
