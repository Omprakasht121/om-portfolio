import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const project1Url = import.meta.env.VITE_TRAVELLING_URL;
const project2Url = import.meta.env.VITE_URLSHORTENER_URL;
const project3Url = import.meta.env.VITE_PORTFOLIO_URL;
const project4Url = import.meta.env.VITE_ECOMMERCE_URL;
const project5Url = import.meta.env.VITE_CLIMATENOW_URL;

const Projects = () => {
    return(
        <div id="projects" className="min-h-screen w-full flex flex-col bg-white dark:bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-950">
            {/* spacer for navbar */}
            <header className="h-16 md:h-24 w-full"></header>

            {/* heading */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
            whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="mb-2 md:mb-10">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white drop-shadow-lg ">
                Projects
                </h1>
            </motion.div>

            {/* skills grid */}
            <div className=" flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-4 lg:p-12  ">
                <div className="flex flex-col gap-4">
                    {/* project 1 */}
                    <motion.div
                    initial={{ opacity: 0, x: -80 }}   // start me hidden & thoda neeche
                    whileInView={{ opacity: 1, x:0 }} // viewport me aane par visible
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="h-full w-full flex justify-end items-top">
                        <div className=" w-full md:max-w-sm  flex flex-col  gap-2 p-4 text-black dark:text-white ">
                            <div className="h-auto md:h-40 lg:h-56 w-auto mb-4 hover:scale-105 hover:border-2 hover:border-blue-500 dark:hover:border-blue-200 shadow-md  hover:shadow-[0_0_20px_rgba(99,11,241,0.5)]  dark:hover:shadow-[0_0_30px_rgba(99,11,241,0.6)] transition-transform duration-500 ease-in-out ">
                            <img
                                src={`${import.meta.env.BASE_URL}project3.png`}
                                alt="Spices E-commerce Website"
                                className=" w-full h-full rounded-xl object-fit"
                            />
                            </div>

                            <h1 className="text-indigo-950 dark:text-red-50 text-lg md:text-2xl font-semibold md:font-bold">Travelling Website </h1>
                            <p className="text-base md:text-lg">An engaging travel platform designed to help explorers discover their ideal destinations while learning about local culture, traditions, and cuisine. It aims to inspire travelers through immersive visuals, detailed destination insights, and helpful guidance. The platform is currently evolving with features like curated destination highlights and an intuitive booking flow to make trip planning easier and more enjoyable.</p>
                            <p>
                            <span className="font-bold text-base md:text-lg">Technologies</span>: React, Vite, TailwindCSS, Framer Motion, Node.js, Express, MongoDB, Mongoose, JWT Auth, Multer, EmailJS, Render, Vercel, Figma, Github.
                            </p>
                            <a href={project1Url}>
                                <button className=" hover:text-white dark:hover:text-black self-start font-bold border border-white dark:hover:border-orange-500 px-4 py-2 rounded-xl hover:scale-110 hover:bg-blue-600 dark:hover:bg-white  dark:hover:bg-blue-950 hover:border-gray-600 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(240,11,241,0.5)] transition-all duration-400 ease-in-out mt-4 flex gap-4">View project
                                <ArrowRight />
                            </button>
                            </a>
                        </div>
                        
                    </motion.div>
                    {/* project 1.2 */}
                    <motion.div
                initial={{ opacity: 0, x: -80 }}   // start me hidden & thoda neeche
                whileInView={{ opacity: 1, x:0 }} // viewport me aane par visible
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: .4 }}
                className="h-full w-full flex justify-end items-top">
                    <div className=" w-full md:max-w-sm flex flex-col gap-2 p-4  text-black dark:text-white">
                        <div className="h-auto md:h-40 lg:h-56 w-auto mb-4 hover:scale-105 hover:border-2 hover:border-blue-500 dark:hover:border-blue-200 shadow-md hover:shadow-[0_0_10px_rgba(99,11,241,0.5)]  dark:hover:shadow-[0_0_30px_rgba(99,11,241,0.6)] transition-transform duration-500 ease-in-out ">
                        <img
                            src={`${import.meta.env.BASE_URL}project4.png`}
                            alt="Spices E-commerce Website"
                            className=" w-full h-full rounded-xl object-cover"
                        />
                        </div>

                        <h1 className="text-indigo-950 dark:text-red-50 text-lg md:text-2xl font-semibold md:font-bold">E-commerce Website (Fleek)</h1>
                        <p className="text-base md:text-lg">Fleek is a responsive and feature-rich e-commerce application designed to deliver a smooth and modern shopping experience. It features real-time product loading from external sources, an interactive cart drawer with quantity controls, and a fully integrated test payment flow. With its clean interface, intuitive navigation, and fast performance, Fleek provides a seamless experience across all devices.</p>
                        <p>
                            <span className="font-bold text-base md:text-lg">Technologies</span>: Html, Css, Javascript, Api Integration, Payment Integration (RazorPay), Github, Vercel, Canva.
                        </p>
                        <a href={project4Url}>
                            <button className="  hover:text-white dark:hover:text-black self-start font-bold border border-white dark:hover:border-orange-500 px-4 py-2 rounded-xl hover:scale-110 hover:bg-blue-600 dark:hover:bg-white  dark:hover:bg-blue-950 hover:border-gray-600 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(240,11,241,0.5)] transition-all duration-400 ease-in-out mt-4 flex gap-4">View project
                            <ArrowRight />
                        </button>
                        </a>
                    </div>
                    
                    </motion.div>
                    
                </div>
                 {/* project 2 */}
                <div className="flex flex-col gap-4">
                    <motion.div
                initial={{ opacity: 0, x: -80 }}   // start me hidden & thoda neeche
                whileInView={{ opacity: 1, x:0 }} // viewport me aane par visible
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: .4 }}
                className="h-full w-full flex justify-center items-top">
                    <div className=" w-full md:max-w-sm flex flex-col gap-2 p-4  text-black dark:text-white">
                        <div className="h-auto md:h-40 lg:h-56 w-auto mb-4 hover:scale-105 hover:border-2 hover:border-blue-500 dark:hover:border-blue-200 shadow-md hover:shadow-[0_0_20px_rgba(99,11,241,0.5)]  dark:hover:shadow-[0_0_30px_rgba(99,11,241,0.6)] transition-transform duration-500 ease-in-out ">
                        <img
                            src={`${import.meta.env.BASE_URL}project2.png`}
                            alt="Spices E-commerce Website"
                            className=" w-full h-full rounded-xl object-cover"
                        />
                        </div>

                        <h1 className="text-indigo-950 dark:text-red-50 text-lg md:text-2xl font-semibold md:font-bold">Portfolio Website</h1>
                        <p className="text-base md:text-lg">A sleek and interactive personal portfolio built to reflect my style as a developer. It features smooth animations, responsive layouts, and a clean design that highlights my skills, projects, and experience.</p>
                        <p>
                            <span className="font-bold text-base md:text-lg">Technologies</span>: React.js, Framer Motion,EmailJS, Tailwind CSS, JavaScript, HTML, CSS, Figma, Github
                        </p>
                        <a href={project3Url}>
                            <button className="  hover:text-white dark:hover:text-black self-start font-bold border border-white dark:hover:border-orange-500 px-4 py-2 rounded-xl hover:scale-110 hover:bg-blue-600 dark:hover:bg-white  dark:hover:bg-blue-950 hover:border-gray-600 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(240,11,241,0.5)] transition-all duration-400 ease-in-out mt-4 flex gap-4">View project
                            <ArrowRight />
                        </button>
                        </a>
                    </div>
                    
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -80 }}   // start me hidden & thoda neeche
                whileInView={{ opacity: 1, x:0 }} // viewport me aane par visible
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: .4 }}
                className="h-full w-full flex justify-center items-top">
                    <div className=" w-full md:max-w-sm flex flex-col gap-2 p-4  text-black dark:text-white">
                        <div className="h-auto md:h-40 lg:h-56 w-auto mb-4 hover:scale-105 hover:border-2 hover:border-blue-500 dark:hover:border-blue-200 shadow-md hover:shadow-[0_0_20px_rgba(99,11,241,0.5)]  dark:hover:shadow-[0_0_30px_rgba(99,11,241,0.6)] transition-transform duration-500 ease-in-out ">
                        <img
                            src={`${import.meta.env.BASE_URL}climatenow.png`}
                            alt="Spices E-commerce Website"
                            className=" w-full h-full rounded-xl object-cover"
                        />
                        </div>

                        <h1 className="text-indigo-950 dark:text-red-50 text-lg md:text-2xl font-semibold md:font-bold">ClimateNow </h1>
                        <p className="text-base md:text-lg">ClimateNow is a responsive and real-time weather application built to provide accurate environmental insights in a clean and user-friendly interface. It delivers live weather conditions, air quality index (AQI), interactive pollution maps, and location-based climate news using multiple external APIs. The application supports automatic location detection and smart city search with suggestions, allowing users to explore weather data for any location seamlessly. With AI-generated weather summaries, smooth mobile interactions, and fast performance, ClimateNow offers a modern and informative experience across all devices.</p>
                        <p>
                            <span className="font-bold text-base md:text-lg">Technologies</span>: JavaScript, React, Tailwind CSS, React Leaflet (Interactive Maps), Weather Data, AQI (Air Pollution API), Geocoding API, Weather Map Tiles
                        </p>
                        <a href={project5Url}>
                            <button className="  hover:text-white dark:hover:text-black self-start font-bold border border-white dark:hover:border-orange-500 px-4 py-2 rounded-xl hover:scale-110 hover:bg-blue-600 dark:hover:bg-white  dark:hover:bg-blue-950 hover:border-gray-600 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(240,11,241,0.5)] transition-all duration-400 ease-in-out mt-4 flex gap-4">View project
                            <ArrowRight />
                        </button>
                        </a>
                    </div>
                    
                </motion.div>

                </div>
                 {/* project 3 */}
                                    <motion.div
                    initial={{ opacity: 0, x: -80 }}   // start me hidden & thoda neeche
                    whileInView={{ opacity: 1, x:0 }} // viewport me aane par visible
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="h-full w-full flex justify-start items-top">
                        <div className=" w-full md:max-w-sm  flex flex-col  gap-2 p-4 text-black dark:text-white ">
                            <div className="h-auto md:h-40 lg:h-56 w-auto mb-4 hover:scale-105 hover:border-2 hover:border-blue-500 dark:hover:border-blue-200 shadow-md  hover:shadow-[0_0_20px_rgba(99,11,241,0.5)]  dark:hover:shadow-[0_0_30px_rgba(99,11,241,0.6)] transition-transform duration-500 ease-in-out ">
                            <img
                                src={`${import.meta.env.BASE_URL}project1.png`}
                                alt="Spices E-commerce Website"
                                className=" w-full h-full rounded-xl object-fit"
                            />
                            </div>

                            <h1 className="text-indigo-950 dark:text-red-50 text-lg md:text-2xl font-semibold md:font-bold">URL Shortener Website</h1>
                            <p className="text-base md:text-lg">A fast and lightweight tool to generate short, shareable links with ease.Built with a clean UI and efficient backend logic to provide quick redirects and track usage.</p>
                            <p>
                            <span className="font-bold text-base md:text-lg">Technologies</span>: React.js (zod resolver, hook-form), Tailwind CSS, JavaScript, Express.js, Figma.
                            </p>
                            <a href={project2Url}>
                                <button className=" hover:text-white dark:hover:text-black self-start font-bold border border-white dark:hover:border-orange-500 px-4 py-2 rounded-xl hover:scale-110 hover:bg-blue-600 dark:hover:bg-white  dark:hover:bg-blue-950 hover:border-gray-600 shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(240,11,241,0.5)] transition-all duration-400 ease-in-out mt-4 flex gap-4">View project
                                <ArrowRight />
                            </button>
                            </a>
                        </div>
                        
                    </motion.div>
            </div>
        </div>
    );
}
export default Projects;