import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Welecome() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center 
      bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      transition-colors duration-500 px-6"
    >
    
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Yohannes Gebre
        </span>
      </motion.h1>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-10"
      >
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Backend Enthusiast",
              "MongoDB Explorer",
              "Learning Everyday 🚀",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer px-6 py-3 rounded-full 
          bg-indigo-600 text-white font-semibold 
          hover:bg-indigo-800 hover:shadow-lg 
          transition-all duration-300"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
