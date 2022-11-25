"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const variant = {
  initial: { opacity: 0, translateY: 100 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwindcss",
  "Solidity",
  "Hardhat",
  "Ethers.js",
];

const aboutDescription = [
  "I am a Frontend web developer from India 🇮🇳",
  "I have worked with Major web3 DAOs around the world, like BanklessDAO & ForefrontDAO",
  "I also post regular Web3 educational content on my Twitter.",
  "I am currently open for both Full-time Frontend dev role & contract work.",
];

const About = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div
      id="About"
      onMouseEnter={cursorContext?.whiteBackgroundEnter}
      onMouseLeave={cursorContext?.textLeave}
      className="grid xs:place-items-start md:place-items-center xs:min-h-[120vh] md:min-h-screen w-screen bg-white xs:pt-24 md:pt-0"
    >
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="xs:w-full md:max-w-[80rem]"
      >
        <div className="w-full flex xs:justify-center lg:justify-start lg:pl-32">
          <h1
            onMouseEnter={cursorContext?.blackBackgroundEnter}
            onMouseLeave={cursorContext?.whiteBackgroundEnter}
            className="xs:text-6xl md:text-8xl xs:text-center inline-block lg:text-left"
          >
            About
          </h1>
        </div>

        <div className="flex xs:w-full xs:max-h-[60rem] xs:flex-col xs:items-center xs:justify-center  md:items-start md:flex-row lg:max-h-[30rem]  lg:justify-between max-w-[50rem] mx-auto mt-8">
          <div className="xs:h-[20rem] md:h-[25rem] xs:w-[20rem] md:w-[24rem] relative">
            <div className="xs:h-[16rem] md:h-[20rem] xs:w-[16rem] md:w-[20rem] border-4 border-black rounded-lg absolute xs:top-10 xs:right-5 md:top-16 md:right-14" />

            <div className="xs:h-[16rem] xs:w-[16rem] md:h-[20rem] md:w-[20rem] absolute xs:top-5 xs:right-10 md:top-10 md:right-8 ">
              <img
                src="assets/profile-image.jpg"
                width="100%"
                height="100%"
                alt="profile image"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="xs:w-5/6 md:w-2/6 flex justify-center md:justify-between lg:ml-10">
            <ul className="xs:w-full xs:max-w-[20rem] md:w-5/6 xs:max-h-[20rem] md:max-h-[35rem]">
              {aboutDescription.map((message, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start py-3 xs:w-[20rem] md:w-[16rem] lg:w-[18rem] xl:w-[25rem]"
                  >
                    <p className="">○</p>
                    <p className="ml-3 text-xl ">{message}</p>
                  </li>
                );
              })}
              <div className="grid grid-cols-2 mt-5 md:w-[16rem] lg:w-[20rem]">
                {skills.map((skill, index) => {
                  return (
                    <p key={index} className="text-xl">
                      ▸ <span className="ml-2">{skill}</span>
                    </p>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
