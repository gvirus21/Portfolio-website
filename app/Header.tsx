"use client";
import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../context/ScrollObserver";
import { CursorContext } from "../context/CursorContext";
import { motion, AnimatePresence } from "framer-motion";
import MobileExpandedMenu from "../components/Header/MobileExpandedMenu";
import { menuContainerVariant } from "../components/Header/variants";
import HamburgerMenu from "../components/Header/HamburgerMenu";
import { Link } from "react-scroll";

const Header = () => {
  const cursorContext = useContext(CursorContext);
  const { scrollY } = useContext(ScrollContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [initialScrollValue, setInitialScrollValue] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const links = ["About", "Work", "Projects", "Contact"];

  useEffect(() => {
    if (scrollY > initialScrollValue) {
      setScrollDirection("down");
    }

    if (scrollY < initialScrollValue) {
      setScrollDirection("up");
    }
    setInitialScrollValue(scrollY);
  }, [scrollY, initialScrollValue]);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && <MobileExpandedMenu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {scrollDirection === "up" && (
          <motion.div
            key="headerKey"
            exit={{
              y: "50%",
              opacity: 0,
            }}
            variants={menuContainerVariant}
            initial="initial"
            animate="visible"
            className="px-10 py-8 sm:py-10 mx-auto flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 fixed top-0 left-0 right-0 mix-blend-difference z-[999] max-w-[80rem]"
          >
            <Link to="home" smooth={true} offset={0}>
              <motion.p
                onMouseEnter={cursorContext?.clickableCursor}
                onMouseLeave={cursorContext?.regularCursor}
                className="hover-underline text-md md:text-sm text-white cursor-pointer"
              >
                Gourav kumar
              </motion.p>
            </Link>

            {/* links */}
            <motion.ul className="hidden sm:flex">
              {links.map((link, index) => {
                return (
                  <motion.li
                    onMouseEnter={cursorContext?.clickableCursor}
                    onMouseLeave={cursorContext?.regularCursor}
                    key={index}
                    color={"white"}
                    className="hover-underline px-4 text-white transition-all ease-in-out text-sm cursor-pointer"
                  >
                    <Link to={link} smooth={true} offset={0}>
                      {link}
                    </Link>
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
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
