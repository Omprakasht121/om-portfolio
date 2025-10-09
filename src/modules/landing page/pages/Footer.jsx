import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCommentDots, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo + text */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-white">Portfolio</h2>
                <p className="mt-4 text-sm text-gray-400 max-w-xs">
                Let’s create something extraordinary together!
            </p>
            </div>

            {/* Main */}
            <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-2 text-sm">
                <h3 className="text-gray-200 font-semibold uppercase mb-4">Main</h3>
                <li className="hover:text-white transition">Works</li>
                <li className="hover:text-white transition">Services</li>
                <li className="hover:text-white transition">About</li>
                <li className="hover:text-white transition">Pricing</li>
            </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-2 text-sm ">
                <h3 className="text-gray-200 font-semibold uppercase mb-4">Support</h3>
                <li className="hover:text-white transition">Contact Us</li>
                <li className="hover:text-white transition">Terms & Condition</li>
                <li className="hover:text-white transition">Privacy Policy</li>
                <li className="hover:text-white transition">Disclosures</li>
            </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-gray-200 font-semibold uppercase mb-4">Socials</h3>
                <div className="flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-700 transition">
                    <FaGithub />
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-700 transition">
                    <FaLinkedin />
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-700 transition">
                    <FaInstagram />
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-700 transition">
                    <FaFacebook />
                </div>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
            © 2025 OMM.
        </div>
        </footer>
    );
};

export default Footer;
