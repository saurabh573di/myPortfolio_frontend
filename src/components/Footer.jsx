import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-16 mt-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        {/* Follow Me */}
        <h3 className="text-2xl font-bold">Follow Me</h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 text-4xl">
          <a
            href="https://github.com/saurabh573di"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-dosad-30607b293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/saurabh5734"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.instagram.com/saurabh_dosad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <span className="block text-lg text-gray-500 dark:text-gray-400">
          © 2025 React & Tailwind CSS Portfolio. Saurabh
        </span>
      </div>

      {/* Scroll to Top Button (right side) */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full text-4xl shadow-lg transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
