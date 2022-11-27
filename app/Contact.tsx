"use client";
import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {containerVariant, textVariant, linkVariant} from "../components/Contact/Variants"


const socialLinks = [
  {
    name: "Twitter",
    link: "https://www.twitter.com/GouravKumarDev",
    icon: <FiTwitter />,
  },
  {
    name: "Github",
    link: "https://www.github.com/gvirus21",
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gouravkumar-21/",
    icon: <FiLinkedin />,
  },
];

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-black h-[85vh] w-screen grid place-items-center "
    >
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="border-white border-1 xs:h-[60vh] w-[80vw] mt-16 pt-5"
      >
        <motion.h1
          variants={textVariant}
          className="text-white xs:text-5xl md:text-7xl lg:mt-20"
        >
          Have some projects for me?
        </motion.h1>
        <motion.h1
          variants={textVariant}
          className="text-white xs:text-2xl md:text-3xl xl:text-4xl mt-12"
        >
          I am open for both <span className="font-bold">Fulltime</span> &{" "}
          <span className="font-bold">Freelance</span> Frontend developer
          positions :)
        </motion.h1>
        <div>
          <motion.h2
            variants={textVariant}
            className="xs:text-xl md:text-3xl  text-white mt-16"
          >
            Drop me a message at{" "}
            <a
              className="underline xs:text-xl md:text-3xl "
              href="mailto:gouravkumar21.dev@gmail.com"
            >
              gouravkumar21.dev@gmail.com
            </a>
          </motion.h2>
        </div>
      </motion.div>

      <SocialLinks />
    </div>
  );
};

export default Contact;

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex justify-between min-w-[11rem]">
        {socialLinks.map((item, index) => {
          return (
            <a
              target="_blank"
              key={index}
              rel="noopener noreferrer"
              href={item.link}
            >
              <motion.li
                exit={{
                  opacity: 0,
                  y: -50,
                  transition: {
                    duration: 0.2,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  },
                }}
                variants={linkVariant}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="text-white text-4xl flex items-center"
              >
                <div className="ml-2">
                  <IconContext.Provider value={{ size: "30" }}>
                    {item.icon}
                  </IconContext.Provider>
                </div>
              </motion.li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};
