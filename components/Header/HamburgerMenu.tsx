import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import { upperMenubarVariant, lowerMenubarVariant } from "./variants";

const style = {
  menu: "flex flex-col justify-between items-center h-10 w-24 lg:hidden",
  upperMenuBar: "w-20 h-1 bg-white rounded",
  lowerMenuBar: "w-20 h-1 z-10 bg-white rounded",
};

interface HamburgerMenuProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ menuIsOpen, setMenuIsOpen }: HamburgerMenuProps) => {
  const [menuAnimate, setMenuAnimate] = useState("closed");
  const cursorContext = useContext(CursorContext);

  return (
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
        exit={{
          y: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
      ></motion.div>
      <motion.div
        variants={lowerMenubarVariant}
        animate={menuAnimate}
        className={style.lowerMenuBar}
        exit={{
          y: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
      ></motion.div>
    </motion.div>
  );
};

export default HamburgerMenu;
