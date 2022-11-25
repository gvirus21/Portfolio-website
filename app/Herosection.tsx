"use client";
import { useState, useEffect, useContext, useRef } from "react";
import { CursorContext } from "../context/CursorContext";
import { ScrollContext } from "../context/ScrollObserver";
import { motion } from "framer-motion";
import {
  scrollBallVariant,
  scrollTextVariant,
  heroTextVariant,
} from "../components/Herosection/variants";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";

const Herosection = () => {
  const cursorContext = useContext(CursorContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <>
      <div
        id="Home"
        ref={refContainer}
        className="flex flex-col justify-center items-center w-screen min-h-screen px-28 bg-black sticky top-0 -z-10"
        style={{
          // parallax handler
          transform: `translateY(-${progress * 20}vh)`,
        }}
      >
        <div className="flex flex-col items-start xs:pt-16 md:pt-0 xs:justify-start md:justify-center mix-blend-difference h-[60vh] min-w-[20rem] lg:w-[50rem] xl:w-[70rem] z-50  relative">
          <div className="ml-2">
            <h1 className="text-white xs:text-2xl md:text-3xl xl:text-5xl my-5 inline-block">
              Hello, I am
            </h1>
          </div>
          <div className="flex xs:flex-col md:flex-row">
            <h1 className="text-white text-left xs:text-7xl xl:text-9xl inline-block ">
              Gourav
            </h1>
            <h1 className="xs:ml-24 md:ml-5 text-white text-left xs:text-7xl xl:text-9xl inline-block ">
              kumar
            </h1>
          </div>
          <div className="w-full relative xs:mt-10 lg:mt-24">
            <p className="text-white xs:text-xl md:text-xl xl:text-2xl md:w-[25rem] xl:w-[30rem] inline-block absolute md:right-8 lg:right-0 xs:text-center md:text-left">
              A Creative Frontend web developer, with a passion for{" "}
              <span className="text-slate-300 md:text-2xl xl:text-3xl">
                #Buidling
              </span>{" "}
              Web3
            </p>
          </div>
        </div>
      </div>

      <div className="z-30 -mt-[70vh] h-[70vh] w-screen relative">
        <Link to="About" smooth={true} offset={0}>
          <motion.div
            drag
            whileDrag={{ scale: 1.2 }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            variants={scrollBallVariant}
            initial="initial"
            animate="visible"
            onMouseEnter={cursorContext?.textEnter}
            onMouseLeave={cursorContext?.textLeave}
            className="grid place-items-center w-20 h-20 lg:w-28 lg:h-28 bg-white rounded-full absolute xs:bottom-10 xs:right-5 lg:bottom-10 lg:left-10 xl:left-40 xl:bottom-24"
          >
            <motion.h2
              variants={scrollTextVariant}
              className="text-black text-md lg:text-2xl lg:-mt-2"
            >
              Scroll
            </motion.h2>
          </motion.div>
        </Link>

        <motion.div
          variants={linksContainerVariant}
          initial="initial"
          animate="visible"
          className={`xs:hidden lg:flex flex-col items-center w-32 absolute md:bottom-[5rem] md:right-0 lg:right-5`}
        >
          {socialLinks.map((link) => {
            return (
              <motion.a
                variants={socialLinksVariants}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", duration: 0.4 },
                }}
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="my-5"
              >
                <IconContext.Provider value={{ size: "30", color: "#fff" }}>
                  {link.icon}
                </IconContext.Provider>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Herosection;

const linksContainerVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const socialLinksVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.9,
    },
  },
};

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
