import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import your local images
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";

// Replace squareData with local images
const squareData = [
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

// Your Hero component with the left side as-is and right side replaced by ShuffleGrid
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-transparent text-5xl sm:text-6xl md:text-7xl font-bold uppercase bg-[url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] bg-clip-text bg-contain animate-text opacity-80">
          HI, I AM Saurabh Singh Dosad
        </h1>
        <h2 className="text-transparent text-4xl sm:text-5xl md:text-6xl font-bold uppercase bg-[url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] bg-clip-text bg-contain animate-text opacity-80">
          A Full-Stack Developer
        </h2>
        <a
          href="/cv.docx"
          download
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 font-semibold px-6 py-4 text-lg rounded-lg shadow hover:bg-indigo-200 dark:bg-gray-800 dark:text-indigo-200 dark:hover:bg-gray-700 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6H4l6 6 6-6h-3V7z" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Right - ShuffleGrid replacing your original single image */}
      <div className="flex-1 mt-10 md:mt-0">
        <ShuffleGrid />
      </div>
    </section>
  );
};

export default Hero;
