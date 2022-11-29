import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import { upperMenubarVariant, lowerMenubarVariant } from "./variants";

const style = {
  menu: "flex flex-col justify-between items-center h-4 mr-2 sm:hidden",
  upperMenuBar: "w-7 h-[1px] bg-white rounded",
  lowerMenuBar: "w-7 h-[1px] z-10 bg-white rounded",
};

interface HamburgerMenuProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ menuIsOpen, setMenuIsOpen }: HamburgerMenuProps) => {
  const [menuAnimate, setMenuAnimate] = useState("closed");
  const cursorContext = useContext(CursorContext);

  useEffect(() => {
    if (menuIsOpen) {
      setMenuAnimate("open");
    }
    if (!menuIsOpen) {
      setMenuAnimate("closed");
    }
  }, [menuIsOpen]);

  return (
    <motion.div
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
        key="upperMenubar"
        variants={upperMenubarVariant}
        animate={menuAnimate}
        className={style.upperMenuBar}
        exit={{
          y: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
      ></motion.div>
      <motion.div
        key="lowerMenubar"
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
