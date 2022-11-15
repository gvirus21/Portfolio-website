"use client";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const Herosection = () => {
  const cursorContext = useContext(CursorContext);

  const scrollBallVariant = {
    initial: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {duration: 1}
    },
  };

  const scrollTextVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 1, delay: 0.5}
    },
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen px-28 bg-black ">
      <div className="flex flex-col z-10 mix-blend-difference">
        <h2
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-white text-[4rem] ml-20"
        >
          Hi, i am
        </h2>
        <div className="flex flex-col w-screen">
          <h1
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-[12rem] ml-24 text-left leading-tight"
          >
            Gourav
          </h1>
          <h1
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-[12rem] mr-32 text-right"
          >
            Kumar
          </h1>
        </div>

        <h2
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-white text-[4rem] mt-10 text-center"
        >
          Web3 frontend developer
        </h2>
      </div>

      <motion.div
        drag
        variants={scrollBallVariant}
        initial="initial"
        animate="visible"
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className="grid place-items-center w-60 h-60 bg-white rounded-full absolute bottom-32"
      >
        <motion.h2 variants={scrollTextVariant} className="text-black text-5xl -mt-4">Scroll</motion.h2>
      </motion.div>
    </div>
  );
};

export default Herosection;
