"use client";
import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div
      onMouseEnter={cursorContext?.whiteBackgroundEnter}
      onMouseLeave={cursorContext?.textLeave}
      className="grid place-items-center h-screen w-screen z-50 bg-white"
    >
      <div className="e">
        <h1
          onMouseEnter={cursorContext?.blackBackgroundEnter}
          onMouseLeave={cursorContext?.whiteBackgroundEnter}
          className="text-8xl"
        >
          About
        </h1>
      </div>
    </div>
  );
};

export default About;
