import React, { useState, useEffect } from "react";
import { X, Menu,Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const leetcodeURL = import.meta.env.VITE_LEET_CODE;
const githubURL = import.meta.env.VITE_GITHUB_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const instagramURL = import.meta.env.VITE_INSTAGRAM_URL;
const emailURL = import.meta.env.VITE_EMAIL_URL;
const websiteURL = import.meta.env.VITE_WEBSITE_URL;
const profileURL = import.meta.env.VITE_PROFILE_URL;
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const titles = ["Developer", "Designer", "Engineer", "Coder", "Creator"];
  const [index, setIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen w-full flex flex-col bg-white dark:bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-950"
    >
      {/* Header */}
      <div className="w-full h-24 ">
        <header
          className="fixed top-3 left-0 right-0 h-12 md:h-16 rounded-none md:left-10 md:right-10 lg:left-30 lg:right-30  md:rounded-full z-50 px-8 md:px-[50px] lg:px-[75px] flex justify-between items-center text-lg md:text-2xl font-semibold text-black dark:text-white border-b dark:border-red-900/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0"
          style={{
            boxShadow: `
        inset 2px 3px 4px rgba(25, 25, 67, 0.81),
        2px 2px 3px 1px rgba(16, 4, 57, 0.7)
        `
          }}
        >
          <div className="flex-1">
            <a href="#hero">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt=""
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 hover:scale-110 transition-transform duration-900 ease-in-out"/>
            </a>
          </div>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex gap-8 font-normal text-xl md:text-lg"
            initial={{ opacity: 0, scale:0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a href="#hero" className="hover:text-blue-700 hover:underline">
              Home
            </a>
            <a href="#about" className="hover:text-blue-700 hover:underline">
              About
            </a>
            <a href="#skills" className="hover:text-blue-700 hover:underline">
              Skill
            </a>
            <a
              href="#projects"
              className="hover:text-blue-700 hover:underline"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-700 hover:underline"
            >
              Contact
            </a>
          </motion.nav>
          {/* day night icon */}
          <div className="p-4 md:px-8 flex ">
            <button
              onClick={toggleTheme}
              className="p-1 md:p-2 rounded-full border-[1px] border-black/40 bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-900 ease-in-out hover:shadow-[0_0_15px_rgba(0,99,241,0.4)] transition-shadow duration-300"
            >
              {theme === "dark" ? (
                <Sun className=" w-4 h-4 md:h-6 md:w-6 text-yellow-400" />
              ) : (
                <Moon className=" w-4 h-4 md:h-6 md:w-6 text-gray-900" />
              )}
            </button>
          </div>
          {/* Hamburger for Mobile */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMobile(true)}>
              <Menu className="h-6 w-6 text-black dark:text-white" />
            </button>
          </div>
        </header>

        {/* Background Overlay (only for mobile) */}
        <div
          className={`fixed inset-0 bg-black/30 z-30 transition-opacity md:hidden ${
            isMobile ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobile(false)}
        ></div>

        {/* Sidebar (only mobile) */}
        <div
          className={`fixed top-16 md:top-20 my-2 w-full h-8 md:h-10 bg-indigo-500  z-40 transform transition-transform  duration-300 md:hidden ${
            isMobile ? "translate-y-0" : "-translate-y-full invisible "
          }`}
        >
          <div className="flex justify-around items-center text-white">
            <nav className="flex gap-4 px-6 text-md font-semibold">
              <a href="#hero" className="hover:text-yellow-500 hover:underline">
                Home
              </a>
              <a href="#about" className="hover:text-yellow-500 hover:underline">
                About
              </a>
              <a
                href="#skills"
                className="hover:text-yellow-500 hover:underline"
              >
                Skill
              </a>
              <a
                href="#projects"
                className="hover:text-yellow-500 hover:underline"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-yellow-500 hover:underline"
              >
                Contact
              </a>
            </nav>

            {/* Close button */}
            <div className="flex justify-around items-center">
              <button onClick={() => setIsMobile(false)}>
                <X className="h-full w-9 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* main content here */}
      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-5">
        {/* left side container */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center md:justify-end col-span-3 items-center p-12 md:p-8"
        >
          <div className="w-full max-w-2xl flex flex-col gap-4">
            <motion.div
              className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h1 className="text-black-700 dark:text-white ">Hi,</h1>
              <h1 className="text-blue-700 dark:text-orange-500 text-4xl md:text-6xl lg:text-8xl font-bold">
                I'm{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[index]}
                    initial={{ y: "50%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-50%", opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-block text-orange-400"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </motion.div>

            <motion.div
              className="text-base md:text-lg lg:text-xl text-black dark:text-blue-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p>
                I’m a Full-Stack Web Developer who enjoys turning ideas into
                interactive, responsive, and user-friendly websites. With a
                focus on{" "}
                <span className="font-bold text-black/90 dark:text-blue-300">
                  <a href="">UI/UX</a>
                </span>{" "}
                design, problem solving, and clean code, I aim to build
                solutions that are not only beautiful but also functional and
                reliable.
              </p>
            </motion.div>

            <motion.div
              className="flex  items-center md:flex-col md:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className=" w-full text-sm md:text-xl py-4">
                <a href="#about">
                  <button className="border border-neutral-500 bg-indigo-800 rounded-full font-semibold px-6 py-2 text-white hover:scale-110 hover:bg-white hover:text-black hover:border-red-800 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 ease-in-out">
                    Know More
                  </button>
                </a>
              </div>

              <div className=" w-full flex gap-2 md:gap-4">
                {[
                  githubURL,
                  linkedinURL,
                  leetcodeURL,
                  websiteURL,
                  emailURL,
                  instagramURL,
                ].map((url, index) => (
                  <motion.a
                    key={index}
                    href={index === 4 ? `mailto:${url}` : url}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${
                        index === 0
                          ? "github.jpg"
                          : index === 1
                          ? "linkedin.png"
                          : index === 2
                          ? "leetcode.jpg"
                          : index === 3
                          ? "website.png"
                          : index === 4
                          ? "email.png"
                          : "instagram.png"
                      }`}
                      className="h-4 w-4 md:h-8 md:w-8 rounded-full object-cover hover:shadow-[0_0_20px_rgba(0,0,0,.6)] dark:hover:shadow-[0_0_25px_rgba(200,102,241,.8)] transition-shadow duration-300"
                      alt=""
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* right side container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay:.6,duration: .6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center md:justify-start items-center col-span-2 pb-6 md:px-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-72 md:w-[400px] aspect-square rounded-full overflow-hidden border-2 border-black transition-transform duration-900 ease-in-out shadow-[0_0_30px_rgba(99,102,241,0.4)] ring-1 ring-red-400/20 hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.4)] transition-shadow duration-400 "
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
