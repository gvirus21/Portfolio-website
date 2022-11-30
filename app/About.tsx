"use client";
import React, { useContext, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";
import { containerVariant, childVariant } from "../components/About/Variants";


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
      className="grid xs:place-items-start md:place-items-center xs:min-h-[130vh] md:min-h-screen w-screen bg-white xs:py-24 md:py-10"
    >
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="xs:w-full md:max-w-[80rem]"
      >
        <div className="w-full flex xs:justify-center lg:justify-start lg:pl-32">
          <motion.h1
            variants={childVariant}
            className="xs:text-6xl md:text-7xl xs:text-center inline-block lg:text-left"
          >
            About
          </motion.h1>
        </div>

        <div className="flex xs:w-full md:max-w-[40rem] xs:max-h-[60rem] xs:flex-col xs:items-center xs:justify-center md:items-start md:flex-row lg:max-h-[30rem] lg:justify-between lg:max-w-[50rem] xl:max-w-[60rem] mx-auto mt-8 md:mt-16">
          <motion.div
            variants={childVariant}
            className="xs:h-[20rem] md:h-[25rem] xs:w-[20rem] md:w-[24rem] relative"
          >
            <div className="xs:h-[16rem] lg:h-[20rem] xs:w-[16rem] lg:w-[20rem] border-4 border-black rounded-lg absolute xs:top-10 xs:right-5 md:top-5 md:right-14" />

            <div className="xs:h-[16rem] xs:w-[16rem] lg:h-[20rem] lg:w-[20rem] absolute xs:top-5 xs:right-10 md:top-0 md:right-8 ">
              <img
                src="assets/profile-image.jpg"
                width="100%"
                height="100%"
                alt="profile image"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <div className="xs:w-5/6 md:w-3/6 flex justify-center md:justify-end lg:ml-10 lg:max-w-[25rem]">
            <motion.ul variants={childVariant}>
              {aboutDescription.map((message, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-start py-3 xs:w-[20rem] md:w-[20rem] lg:w-[22rem] xl:w-[25rem]"
                  >
                    <p className="">○</p>
                    <p className="ml-3 text-xl ">{message}</p>
                  </li>
                );
              })}
              <motion.div className="grid grid-cols-2 mt-5 md:w-[16rem] lg:w-[20rem] xs:ml-5 md:ml-10">
                {skills.map((skill, index) => {
                  return (
                    <p key={index} className="text-xl">
                      ▹ <span className="ml-2">{skill}</span>
                    </p>
                  );
                })}
              </motion.div>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
