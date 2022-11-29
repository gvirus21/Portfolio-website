"use client";
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";

const Cursor = () => {
  const cursorContext = useContext(CursorContext);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const mouseMove = (e: any) => {
    cursorContext?.setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

    console.log("mosue-pos: ", cursorContext?.mousePosition);
  };

  const variants = {
    initial: {
      x: cursorContext!.mousePosition.x - 5,
      y: cursorContext!.mousePosition.y - 5,
      border: "whirte 2px solid",
      display: 'none',
    },

    blackBackgroundEnter: {
      x: cursorContext!.mousePosition.x - 5,
      y: cursorContext!.mousePosition.y - 5,
      border: "white 2px solid",
    },
    blackBackgroundLink: {
      x: cursorContext!.mousePosition.x - 2,
      y: cursorContext!.mousePosition.y - 2,
      height: 10,
      width: 10,
      backgroundColor: "white",
    },
    whiteBackgroundEnter: {
      x: cursorContext!.mousePosition.x - 18,
      y: cursorContext!.mousePosition.y - 18,
      border: "black 2px solid",
    },
    whiteBackgroundLink: {
      x: cursorContext!.mousePosition.x - 2,
      y: cursorContext!.mousePosition.y - 2,
      height: 10,
      width: 10,
      backgroundColor: "black",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorContext?.cursorVariant}
      className="h-5 w-5 rounded-full fixed pointer-events-none z-[999]"
    />
  );
};

export default Cursor;
