"use client";
import React, { useState, useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion, AnimatePresence } from "framer-motion";
import MobileExpandedMenu from "../components/Header/MobileExpandedMenu";
import { menuContainerVariant } from "../components/Header/variants";
import HamburgerMenu from "../components/Header/HamburgerMenu";

const Header = () => {
  const cursorContext = useContext(CursorContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const links = ["About", "Work", "Projects", "Contact"];

  return (
    <>
      <AnimatePresence>{menuIsOpen && <MobileExpandedMenu />}</AnimatePresence>

      <motion.div
        variants={menuContainerVariant}
        initial="initial"
        animate="visible"
        className="px-5 md:px-8 lg:px-12 py-8 sm:py-10 flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 fixed top-0 left-0 right-0 mix-blend-difference z-0 "
      >
        <motion.p
          whileHover={logoHoverAnimation}
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-2xl md:text-2xl text-white"
        >
          Gourav kumar
        </motion.p>

        {/* links */}
        <motion.ul className="hidden sm:flex">
          {links.map((link, index) => {
            return (
              <motion.li
                key={index}
                whileHover={linksHoverAnimation}
                onMouseEnter={cursorContext?.textEnter}
                onMouseLeave={cursorContext?.textLeave}
                className="px-4 text-white transition-all ease-in-out"
              >
                {link}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* hamburger */}
        <AnimatePresence>
          <HamburgerMenu
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Header;

const logoHoverAnimation = {
  scale: 1.2,
  transition: { type: "spring", duration: 0.2 },
};
const linksHoverAnimation = {
  scale: 1.6,
  transition: { type: "tween", duration: 0.1 },
};
