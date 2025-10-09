import React from "react";
import { motion } from "framer-motion";

const resumeView = import.meta.env.VITE_RESUME_URL;
const About = () => {
    return(
        <div id="about" className="max-h-screen w-full flex flex-col bg-white dark:bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-950">
            {/* spacer for navbar */}
            <header className="h-16 md:h-24 w-full"></header>

            {/* heading */}
            <motion.div 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0  }}
            
            transition={{ duration: 0.8}}
            viewport={{ once: false, amount: 0.3 }}
            className="md:mb-10">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white drop-shadow-lg ">
                About Myself
                </h1>
            </motion.div>
            <div className=" flex flex-col w-full ">
                {/* profile photo */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2">
                    <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0  }} 
                    transition={{ duration: 0.8 }} 
                    viewport={{ once: false, amount: 0.3 }}
                    className="h-full w-full flex justify-end items-center hidden md:flex p-8 pb-12 ">
                        <img src="../../../../public/working.gif" alt=""
                        className="md:w-[420px] md:h-[500px] lg:h-[550px] lg:w-[600px] object-cover rounded-2xl shadow-lg shadow-indigo-900/40 border border-indigo-700/30 hover:scale-105  transition-transform duration-900 ease-in-out hover:shadow-[0_10px_35px_rgba(99,102,241,0.7)] transition-shadow duration-300" />
                        
                    </motion.div>
                    {/* introduction */}
                    <div className="h-full flex flex-col justify-start p-12 md:p-8 md:py-8 ">
                        <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0  }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="max-w-lg flex flex-col gap-8 text-white ">
                            <div className="text-black dark:text-yellow-50 md:text-lg">
                                <p>Hi, I’m Omm, a passionate web developer and designer. <br /> 
                                I enjoy building responsive, full-stack websites that are both functional and visually engaging.With strong skills in UI/UX design, I focus on creating clean, intuitive interfaces that users love.Problem-solving drives my approach, ensuring every project is efficient, user-friendly, and impactful.Always curious and creative, I strive to bring ideas to life through code and design.
                            </p>
                            </div>
                            <div className="text-black dark:text-white text-lg md:text-xl font-semibold">
                            <p>
                                Name - Omprakash <br />
                                Age - 22 <br />
                                Add - Ghaziabad <br />
                                Contact - +91 7985960136 <br />
                                Email - omprakasht5689@gmail.com <br />
                                Freelancer - Available <br />
                                Language - English, Hindi
                            </p>
                            </div>
                        <div>
                            <a href={resumeView} target="_blank" rel="noopener noreferrer">
                                <button className="border border-black rounded-lg px-5 py-2 bg-indigo-800 font-semibold hover:scale-110 hover:border-orange-400 dark:hover:border-orange-200 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(99,11,241,0.5)] transition-all duration-400">
                                Download CV
                                </button>
                            </a>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;