"use client";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";
import {
  scrollBallVariant,
  scrollTextVariant,
  heroTextVariant,
} from "../components/Herosection/variants";

const Herosection = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen px-28 bg-black">
      <div className="flex flex-col items-center mix-blend-difference lg:w-[60rem]">
        <div className="w-full">
          <motion.h2
            variants={heroTextVariant}
            initial="initial"
            animate="visible"
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeInOut",
            }}
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] inline-block "
          >
            Hi, i am
          </motion.h2>
        </div>
        <div className="relative h-[13rem] sm:h-[16rem] md:h-[20rem] lg:h-[26rem] w-[20rem] sm:w-[30rem] lg:w-[50rem] mx-4">
          <div className="absolute top-0 left-0">
            <motion.h1
              variants={heroTextVariant}
              initial="initial"
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              }}
              onMouseEnter={cursorContext?.textEnter}
              onMouseLeave={cursorContext?.textLeave}
              className="text-white text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-left inline-block"
            >
              Gourav
            </motion.h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <motion.h1
              variants={heroTextVariant}
              initial="initial"
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              }}
              onMouseEnter={cursorContext?.textEnter}
              onMouseLeave={cursorContext?.textLeave}
              className="text-white text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] md:mr-0 text-right inline-block"
            >
              Kumar
            </motion.h1>
          </div>
        </div>
        <div className="w-full">
          <motion.h2
            variants={heroTextVariant}
            initial="initial"
            animate="visible"
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mt-10"
          >
            Web3 frontend developer
          </motion.h2>
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
        className="grid place-items-center w-20 h-20 lg:w-28 lg:h-28 bg-white rounded-full absolute bottom-20 lg:bottom-32 lg:right-28"
      >
        <motion.h2
          variants={scrollTextVariant}
          className="text-black text-md lg:text-2xl -mt-2 lg:-mt-2"
        >
          Scroll
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Herosection;
