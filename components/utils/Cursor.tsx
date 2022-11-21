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
  };

  const variants = {
    default: {
      x: cursorContext!.mousePosition.x - 18,
      y: cursorContext!.mousePosition.y - 18,
      backgroundColor: "white",
    },
    hover: {
      x: cursorContext!.mousePosition.x - 40,
      y: cursorContext!.mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'white',
    },
    whiteBackgroundEnter: {
      x: cursorContext!.mousePosition.x - 18,
      y: cursorContext!.mousePosition.y - 18,
      backgroundColor: 'black',
    },
    blackBackgroundEnter: {
      x: cursorContext!.mousePosition.x - 40,
      y: cursorContext!.mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'black',
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorContext?.cursorVariant}
      className="h-10 w-10 rounded-full fixed pointer-events-none z-10"
    />
  );
};

export default Cursor;
