"use client";
import { useContext, useRef, useCallback } from "react";
import { CursorContext } from "../context/CursorContext";
import { ScrollContext } from "../context/ScrollObserver";
import { motion } from "framer-motion";
import {
  textContainerVariant,
  letterVariant,
  heroParagraphTextVariant,
  scrollBallVariant,
  scrollTextVariant,
  linksContainerVariant,
  socialLinksVariants,
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

  const AnimatedText = useCallback(({ text }: { text: string }) => {
    const letterArray = text.split("");

    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={textContainerVariant}
        viewport={{ once: true, amount: 0.3 }}
        initial="initial"
        animate="visible"
      >
        {letterArray.map((letter, index) => {
          return (
            <motion.span
              variants={letterVariant}
              key={index}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white text-left xs:text-7xl md:text-7xl"
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }, []);

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
        <div className="flex flex-col items-start xs:pt-16 md:pt-0 xs:justify-start md:justify-center mix-blend-difference h-[60vh] min-w-[20rem] lg:w-[48rem] xl:w-[70rem] z-0  relative">
          <div className="ml-2">
            <motion.h1
              variants={heroParagraphTextVariant}
              initial="initial"
              animate="visible"
              className="text-white xs:text-2xl md:text-xl my-5 inline-block"
            >
              Hello, I am
            </motion.h1>
          </div>

          <div className="flex xs:flex-col md:flex-row">
            <div className="xs:ml-0 lg:ml-12">
              <AnimatedText text="Gourav" />
            </div>
            <div className="xs:ml-24 md:ml-3">
              <AnimatedText text="kumar" />
            </div>
          </div>

          <div className="w-full relative xs:mt-10 lg:mt-24">
            <motion.p
              variants={heroParagraphTextVariant}
              initial="initial"
              animate="visible"
              className="text-white xs:text-xl md:text-xl md:w-[25rem] xl:w-[30rem] inline-block absolute xs:top-10 md:top-0 md:right-8 lg:right-0 xs:text-center md:text-left"
            >
              A Creative Frontend web developer, with a passion for{" "}
              <span className="text-slate-300 md:text-2xl">#Buidling</span> Web3
            </motion.p>
          </div>
        </div>
      </div>

      <div
        id="home"
        style={{
          opacity: progress >= 0.3 ? 0 : 1,
        }}
        className="z-20 -mt-[100vh] h-[100vh] w-screen relative bg-transparent duration-300 transition-all ease-in-out"
      >
        <Link to="About" smooth={true} offset={0}>
          <motion.div
            onMouseEnter={cursorContext?.largeClickableCursor}
            onMouseLeave={cursorContext?.regularCursor}
            drag
            whileDrag={{ scale: 1.2 }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            variants={scrollBallVariant}
            initial="initial"
            animate="visible"
            // style={{opacity: 0}}
            className="grid place-items-center w-16 h-16 bg-white rounded-full absolute xs:bottom-16 xs:right-10 lg:bottom-32 lg:left-[12rem] xl:left-52 xl:bottom-40 opacity-0"
          >
            <motion.h2
              variants={scrollTextVariant}
              className="text-black text-md lg:text-sm"
            >
              Scroll
            </motion.h2>
          </motion.div>
        </Link>

        <motion.div
          variants={linksContainerVariant}
          initial="initial"
          animate="visible"
          className={`xs:hidden lg:flex flex-col items-center w-32 absolute md:bottom-[8rem] md:right-0 lg:right-8 opacity-0`}
        >
          {socialLinks.map((link) => {
            return (
              <motion.a
                onMouseEnter={cursorContext?.clickableCursor}
                onMouseLeave={cursorContext?.regularCursor}
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
                <IconContext.Provider value={{ size: "20", color: "#fff" }}>
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
