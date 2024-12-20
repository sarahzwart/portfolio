"use client";
import { Navbar } from "./pages/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { motion, Variants } from "framer-motion";
import React from 'react'

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
  return (
    <motion.div
      className="bg-gradient-to-r from-[#ffbee6] to-white"
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      <div className="scroll-smooth">
        <Navbar />
        <main>
          <motion.section
            id="hello"
            className="flex py-12 bg-[#f4f4f4] w-full h-[100vh] items-center justify-start"
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <div className="px-6 text-8xl mt-4 font-bold text-[#ffacdf]">
              <h1>Hello.</h1>
              <h1>I'm Sarah</h1>
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
            viewport={{ amount: 0.8 }}
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
