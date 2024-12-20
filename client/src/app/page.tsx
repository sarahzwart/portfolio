"use client";
import { Navbar } from "./pages/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { motion, Variants } from "framer-motion";
import Headshot from "../assets/headshot.jpg";
import Image from "next/image";
import React from "react";

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
            className="flex bg-[#f4f4f4] w-full h-[100vh] items-center justify-center"
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <div className="flex items-center justify-between w-full pl-4 lg:justify-center">
              <div className="text-8xl font-bold text-[#ffacdf] flex flex-col items-start lg:pr-12">
                <h1>Hello.</h1>
                <h1>I&apos;m Sarah</h1>
              </div>
              <div className="flex-shrink-0 ml-auto lg:ml-0">
                <Image
                  src={Headshot}
                  alt="Sarah Zwart's Headshot"
                  className="w-[25vh] sm:w-[40vh] md:w-[50vh] lg:w-[50vh] pr-4 xl:w-[50vh] 2xl:w-[50vh]  rounded-full object-cover transform transition-transform duration-300 ease-in-out"
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
