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
        <div className="flex xs:justify-center md:justify-start md:w-[35rem] lg:w-[45rem] xl:w-[55rem] m-auto">
          <motion.h1
            variants={childVariant}
            className="xs:text-6xl md:text-6xl xs:text-center inline-block lg:text-left"
          >
            About
          </motion.h1>
        </div>

        <div className="flex xs:w-full md:max-w-[40rem] xs:max-h-[60rem] xs:flex-col xs:items-center xs:justify-center md:items-start md:flex-row lg:max-h-[30rem] lg:justify-between lg:max-w-[50rem] xl:max-w-[60rem] mx-auto mt-8 md:mt-16">
          <motion.div
            variants={childVariant}
            className="xs:h-[16rem] xs:w-[16rem] lg:h-[25rem] lg:w-[20rem] mb-10 md:mb-0 md:mx-10"
          >
            <img
              src="assets/profile-image.jpg"
              width="100%"
              height="100%"
              alt="profile-image"
              className="rounded-lg h-[16rem] md:h-[25rem] object-cover"
            />
          </motion.div>

          <div className="xs:w-5/6 md:w-3/6 flex justify-center md:justify-end lg:ml-10 lg:max-w-[28rem]" >
            <motion.ul variants={childVariant}>
              {aboutDescription.map((message, index) => {
                return (
                  <li
                    key={index} 
                    className="flex justify-start py-3 xs:w-[20rem] md:w-[20rem] lg:w-[25rem]"
                  >
                    <p className="">○</p>
                    <p className="ml-3 text-xl ">{message}</p>
                  </li>
                );
              })}
              <motion.div className="grid grid-cols-2 mt-5 md:w-[16rem] lg:w-[20rem] xs:ml-5">
                {skills.map((skill, index) => {
                  return (
                    <p key={index} className="text-md">
                      ▹ <span className="ml-2 mb-1">{skill}</span>
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
