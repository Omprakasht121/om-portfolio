import React from "react";
import { MapPin } from "lucide-react";
import { useContact } from "../hooks/contact-hook.js";
import { motion } from "framer-motion";

const githubURL = import.meta.env.VITE_GITHUB_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const instagramURL = import.meta.env.VITE_INSTAGRAM_URL;

const ContactUs = () => {
  const { register, handleSubmit, doSubmit, errors, loading } = useContact();

  return (
    <div
      id="contact"
      className="min-h-screen md:max-h-screen w-full flex flex-col bg-white dark:bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-950"
    >
      {/* spacer for navbar */}
      <header className="h-16 md:h-24 w-full"></header>

      {/* heading */}
      <motion.div
        className="mb-6 md:mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white drop-shadow-lg">
          Contact Us
        </h1>
      </motion.div>

      {/* contactForm */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-8 px-8 md:px-16 pb-12">
        {/* left side form */}
        <motion.div
          className="col-span-3 md:pr-12 flex justify-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <form
            onSubmit={handleSubmit(doSubmit)}
            className="w-full max-w-2xl bg-neutral-900 rounded-xl shadow-lg shadow-[0_0_25px_rgba(0,0,0,.8)] dark:shadow-indigo-900/30 p-4 py-6 md:p-8 flex flex-col gap-4 md:gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                {...register("name")}
                className="w-full border border-neutral-600 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                type="text"
                id="name"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
              <input
                {...register("address")}
                className="w-full border border-neutral-600 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                type="text"
                id="add"
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                {...register("email")}
                className="w-full border border-neutral-600 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                type="email"
                id="mail"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
              <input
                {...register("phone")}
                className="w-full border border-neutral-600 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                type="text"
                id="phone"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <textarea
              {...register("message")}
              className="w-full border border-neutral-600 rounded-lg px-4 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition min-h-[250px]"
              id="message"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`self-start border border-indigo-600 text-white font-semibold px-12 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(150,11,241,0.5)] transition-all duration-300
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* right side info */}
        <motion.div
          className="col-span-2 flex md:flex-col justify-center gap-8 text-black dark:text-white p-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col items-start gap-4">
            <MapPin className="h-4 w-4 md:h-8 md:w-8 rounded-full object-cover hover:scale-115 hover:shadow-[0_0_25px_rgba(200,102,241,.8)] transition-shadow duration-300" />
            <p className="text-base md:text-lg md:font-medium">
              Address <br />
              Govindpuram Block C  <br /> Ghaziabad UP
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl md:font-semibold">Follow Me</p>
            <div className="w-full flex gap-2 md:gap-4">
              {[githubURL, linkedinURL, instagramURL].map((url, index) => (
                <motion.a
                  key={index}
                  href={url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${
                      index === 0
                        ? "github.jpg"
                        : index === 1
                        ? "linkedin.png"
                        : "instagram.png"
                    }`}
                    className="h-4 w-4 md:h-8 md:w-8 rounded-full object-cover hover:shadow-[0_0_25px_rgba(0,0,0,.8)] dark:hover:shadow-[0_0_25px_rgba(200,102,241,.8)] transition-shadow duration-300"
                    alt=""
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
