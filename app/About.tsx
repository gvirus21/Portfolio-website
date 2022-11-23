"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const HeadingVariant = {
  initial: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

const ImageVariant = {
  initial: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5, delay: 0.3 },
  },
};

const About = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div
      onMouseEnter={cursorContext?.whiteBackgroundEnter}
      onMouseLeave={cursorContext?.textLeave}
      className="grid place-items-center h-screen w-screen z-50 bg-white xs:pt-24 md:pt-0"
    >
      <div className="h-full w-full md:max-w-[80rem] md:max-h-[35rem]">
        <div className="w-full flex xs:justify-center lg:justify-start lg:pl-20">
          <motion.h1
            variants={HeadingVariant}
            initial="initial"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            onMouseEnter={cursorContext?.blackBackgroundEnter}
            onMouseLeave={cursorContext?.whiteBackgroundEnter}
            className="xs:text-7xl md:text-9xl xs:text-center inline-block lg:text-left"
          >
            About
          </motion.h1>
        </div>

        <div className="xs:w-full md:w-6/6 h-full mx-auto mt-8 flex justify-start md:justify-center xs:items-center md:items-start xs:flex-col md:flex-row">
          <motion.div
            variants={ImageVariant}
            initial="initial"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="xs:h-[20rem] md:h-[35rem] xs:w-[20rem] md:w-[28rem] relative"
          >
            {/* border */}
            <div className="xs:h-[16rem] md:h-[20rem] xs:w-[16rem] md:w-[20rem] border-4 border-black rounded-lg absolute xs:top-10 xs:right-5 md:top-16 md:right-14" />
            {/* profile image */}
            <div className="xs:h-[16rem] xs:w-[16rem] md:h-[20rem] md:w-[20rem] absolute xs:top-5 xs:right-10 md:top-10 md:right-8 ">
              <img
                src="assets/profile-image.jpg"
                width="100%"
                height="100%"
                alt="profile image"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <div className="xs:w-5/6 md:w-3/6 flex lg:justify-center md:justify-between lg:ml-10 ">
            <ul className="xs:w-full md:w-5/6 xs:max-h-[30rem]">
              <li className="text-xl py-3 ">
                - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit laborum iusto ullam molestias dolores aspernatur
                quisquam aliquid ipsam suscipit.
              </li>
              <li className="text-xl py-3">
                - Paborum iusto ullam molestias dolores aspernatur quisquam
                aliquid ipsam suscipit.
              </li>
              <li className="text-xl py-3">
                - Paborum iusto ullam molestias dolores aspernatur quisquam
                aliquid ipsam suscipit.
              </li>
              <li className="text-xl py-3">
                - Paborum iusto ullam molestias dolores aspernatur quisquam
                aliquid ipsam suscipit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
