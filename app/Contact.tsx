"use client";
import React, { useContext } from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  containerVariant,
  textVariant,
  linkVariant,
} from "../components/Contact/Variants";
import { CursorContext } from "../context/CursorContext";

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
  const cursorContext = useContext(CursorContext);

  return (
    <div
      id="Contact"
      className="bg-black h-[90vh] w-screen grid place-items-center "
    >
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="border-white border-1 xs:h-[60vh] w-[90vw] lg:w-[80vw] mt-16 pt-5"
      >
        <motion.h1
          variants={textVariant}
          className="text-white xs:text-5xl md:text-7xl lg:mt-10 max-w-[35rem]"
        >
          Do you have a project you need help with?
        </motion.h1>
        <div className="relative">
          <motion.h1
            variants={textVariant}
            className="text-white xs:text-2xl md:text-2xl max-w-[33rem] mt-12 md:absolute md:right-0"
          >
            I can help you build your next website, I am open for both Full-time
            & Freelancing frontend web developer positions
          </motion.h1>
        </div>
        <div>
          <motion.h2
            variants={textVariant}
            className="xs:text-xl md:text-2xl text-white mt-10 md:mt-52"
          >
            Drop me a message at:{" "}
            <a
              onMouseEnter={cursorContext?.largeClickableCursor}
              onMouseLeave={cursorContext?.regularCursor}
              className="underline xs:text-xl md:text-2xl "
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
  const cursorContext = useContext(CursorContext);

  return (
    <div>
      <motion.ul className="flex justify-between min-w-[10rem] mt-20">
        {socialLinks.map((item, index) => {
          return (
            <a
              onMouseEnter={cursorContext?.clickableCursor}
              onMouseLeave={cursorContext?.regularCursor}
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
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", duration: 0.4 },
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="text-white text-4xl flex items-center"
              >
                <div className="ml-2">
                  <IconContext.Provider value={{ size: "25" }}>
                    {item.icon}
                  </IconContext.Provider>
                </div>
              </motion.li>
            </a>
          );
        })}
      </motion.ul>
    </div>
  );
};
