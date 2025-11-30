import React from "react";
import { motion } from "framer-motion";
const Skills = () => {

  return (
    <div
      id="skills"
      className="min-h-screen w-full flex flex-col bg-white dark:bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-950"
    >
      {/* spacer for navbar */}
      <header className=" h-16 md:h-24 w-full "></header>

      {/* heading */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
      whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
      className="mb-6 md:mb-10">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white drop-shadow-lg">
          Skill-Set
        </h1>
      </motion.div>

      {/* skills grid */}
      <div className=" relative flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pb-8 md:px-16 lg:px-24 ">
        
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-500 hidden md:block hidden md:hidden lg:inline"></div>

        {/* card 1 */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
        whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
        transition={{ duration: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-sm w-full mx-auto p-6 bg-gradient-to-br from-yellow-900 to-yellow-800 text-white  rounded-xl dark:shadow-lg  transform hover:scale-105 shadow-xl hover:shadow-[0_0_25px_rgba(100,100,0,.8)] dark:hover:shadow-yellow-500/40 transition-transform duration-900 ease-in-out">
          <img src={`${import.meta.env.BASE_URL}web.png`} className="h-20 w-20" alt="Frontend" />
          <h2 className="mt-4 font-semibold text-2xl">Front-end Development</h2>
          <p className="mt-2 text-sm text-gray-200">
            Designing and developing responsive, interactive, and modern user interfaces.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-1">
              <motion.img
              initial={{ rotate: 0 }}
              animate={{rotate:360 }}
              transition={{duration:2,ease:"linear", repeat: Infinity }}
                src={`${import.meta.env.BASE_URL}React.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="React"
              />
              <p className="text-sm">React.js</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}CSS3.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="Tailwind"
              />
              <p className="text-sm">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}JavaScript.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="JavaScript"
              />
              <p className="text-sm">JavaScript</p>
            </div>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
        whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
        transition={{ duration: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-sm w-full mx-auto p-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(50,0,100,.8)] dark:hover:shadow-purple-500/40 transition-shadow transition-transform duration-900 ease-in-out ">
          <img src={`${import.meta.env.BASE_URL}Design.png`} className="h-20 w-20" alt="UI/UX" />
          <h2 className="mt-4 font-semibold text-2xl">UI/UX Design</h2>
          <p className="mt-2 text-sm text-gray-200">
            Designing clean and intuitive interfaces that focus on usability and aesthetics.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Figma.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="Figma"
              />
              <p className="text-sm">Figma</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <motion.img
              initial={{ rotate: 0 }}
              animate={{rotate: 360 }}
              transition={{duration:2,ease:"linear", repeat: Infinity }}
              
                src={`${import.meta.env.BASE_URL}Color Mode.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="Canva"
              />
              <p className="text-sm">Canva</p>
            </div>
          </div>
        </motion.div>

        {/* card 3 */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
        whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
        transition={{ duration: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-sm w-full mx-auto p-6 bg-gradient-to-br from-sky-900 to-sky-800 text-white rounded-xl shadow-lg  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,180,.8)] dark:hover:shadow-sky-500/40 transition-transform duration-900 ease-in-out">
          <img src={`${import.meta.env.BASE_URL}Database.png`} className="h-20 w-20" alt="Backend" />
          <h2 className="mt-4 font-semibold text-2xl">Back-end Development</h2>
          <p className="mt-2 text-sm text-gray-200">
            Managing server-side logic, APIs, and databases for secure functionality.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Node.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="Node.js"
              />
              <p className="text-sm">Node.js</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Azure Api Manager.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="Express"
              />
              <p className="text-sm">Express.js</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Rest API.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="API"
              />
              <p className="text-sm">API</p>
            </div>
          </div>
        </motion.div>

        {/* card 4 */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}   // start me hidden & thoda neeche
        whileInView={{ opacity: 1, y: 0 }} // viewport me aane par visible
        transition={{ duration: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-sm w-full mx-auto p-6 bg-gradient-to-br from-slate-700 to-slate-600 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,.8)] dark:hover:shadow-slate-400/40 transition-transform duration-900 ease-in-out">
          <img src={`${import.meta.env.BASE_URL}Learning.png`} className="h-20 w-20" alt="Problem Solving" />
          <h2 className="mt-4 font-semibold text-2xl">Problem Solving</h2>
          <p className="mt-2 text-sm text-gray-200">
            Solved 150+ algorithmic challenges, improving logical thinking & efficiency.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Critical Thinking.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="LeetCode"
              />
              <p className="text-sm">LeetCode (250+)</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={`${import.meta.env.BASE_URL}Web Design.png`}
                className="h-12 w-12 object-cover transition-transform hover:scale-110"
                alt="GFG"
              />
              <p className="text-sm">GFG (100+)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
