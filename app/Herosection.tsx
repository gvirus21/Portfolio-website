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
      transition: { duration: 1 },
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
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen px-28 bg-black">
      <div className="flex flex-col h-[40vh] lg:h-[60vh] w-screen lg:w-[70rem] lg:items-start z-10 mix-blend-difference pl-[5rem]">
        <div className="">
          <h2
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-[4rem] lg:text-[3rem] "
          >
            Hi, i am
          </h2>
        </div>
        <div className="flex flex-col h-[30rem] w-[80vw] lg:h-[20rem] lg:w-[45rem] relative lg:ml-[5rem]">
          <div className="absolute top-0 left-0">
            <h1
              onMouseEnter={cursorContext?.textEnter}
              onMouseLeave={cursorContext?.textLeave}
              className="text-white text-[12rem] lg:text-[8rem] ml-24 md:ml-0 text-left leading-tight inline-block"
            >
              Gourav
            </h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <h1
              onMouseEnter={cursorContext?.textEnter}
              onMouseLeave={cursorContext?.textLeave}
              className="text-white text-[12rem] lg:text-[8rem] md:mr-0 text-right inline-block"
            >
              Kumar
            </h1>
          </div>
        </div>
        <div className="w-full pl-20">
          <h2
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-[4rem] lg:text-[3rem] mt-10 lg:mt-10 lg:text-left"
          >
            Web3 frontend developer
          </h2>
        </div>
      </div>

      {/* scroll ball  */}
      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        variants={scrollBallVariant}
        initial="initial"
        animate="visible"
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className="grid place-items-center w-52 h-52 lg:w-28 lg:h-28 bg-white rounded-full absolute bottom-36 lg:right-48"
      >
        <motion.h2
          variants={scrollTextVariant}
          className="text-black text-5xl lg:text-2xl -mt-4 lg:-mt-2"
        >
          Scroll
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Herosection;
