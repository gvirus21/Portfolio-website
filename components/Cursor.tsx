"use client";
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

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
      x: cursorContext!.mousePosition.x - 16,
      y: cursorContext!.mousePosition.y - 16,
    },
    hover: {
      x: cursorContext!.mousePosition.x - 60,
      y: cursorContext!.mousePosition.y - 60,
      height: 120,
      width: 120,
      backgroundColor: 'white',
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorContext?.cursorVariant}
      className="bg-white h-10 w-10 rounded-full fixed pointer-events-none"
    />
  );
};

export default Cursor;
