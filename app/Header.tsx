"use client";
import React, { useState, useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion } from "framer-motion";

const style = {
  container:
    "px-16 lg:px-20 py-20 lg:py-12 flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 absolute top-0 left-0 right-0 mix-blend-difference",
  logo: "text-5xl lg:text-2xl text-white",
  linksContainer: "hidden lg:flex",
  link: "px-4 text-white transition-all ease-in-out delay-250",
  menu: "flex flex-col z-100 justify-between items-center h-10 w-24 lg:hidden",
  upperMenuBar: "w-20 h-1 bg-white rounded",
  lowerMenuBar: "w-20 h-1 z-10 bg-white rounded",
};

const Header = () => {
  const cursorContext = useContext(CursorContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuAnimate, setMenuAnimate] = useState("closed");

  const logoHoverAnimation = {
    scale: 1.2,
    transition: { type: "spring", duration: 0.2 },
  };
  const linksHoverAnimation = {
    scale: 1.6,
    transition: { type: "tween", duration: 0.1 },
  };

  const upperMenubarVariant = {
    closed: {
      y: 0,
      transition: { type: "tween", duration: 0.2 },
    },
    open: {
      y: 27,
      transition: { type: "tween", duration: 0.2 },
    },
  };
  const lowerMenubarVariant = {
    closed: {
      y: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" },
    },
    open: {
      y: -10,
      // transition: {type: "tween", duration: 0.2}
    },
  };

  const menuContainerVariant = {
    initial: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={menuContainerVariant}
      initial="initial"
      animate="visible"
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      className={style.container}
    >
      <motion.p
        whileHover={logoHoverAnimation}
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className={style.logo}
      >
        Gourav kumar
      </motion.p>

      {/* links */}
      <motion.ul className={style.linksContainer}>
        <motion.li
          whileHover={linksHoverAnimation}
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          About
        </motion.li>
        <motion.li
          whileHover={linksHoverAnimation}
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Work
        </motion.li>
        <motion.li
          whileHover={linksHoverAnimation}
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Projects
        </motion.li>
        <motion.li
          whileHover={linksHoverAnimation}
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Contact
        </motion.li>
      </motion.ul>

      {/* hamburger */}
      <motion.div
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className={style.menu}
        whileHover={{
          scale: 1.1,
          transition: { type: "tween", duration: 0.2 },
        }}
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
          setMenuAnimate(menuAnimate === "closed" ? "open" : "closed");
        }}
      >
        <motion.div
          variants={upperMenubarVariant}
          animate={menuAnimate}
          className={style.upperMenuBar}
        ></motion.div>
        <motion.div
          variants={lowerMenubarVariant}
          animate={menuAnimate}
          className={style.lowerMenuBar}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
