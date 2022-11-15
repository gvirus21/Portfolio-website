"use client";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Herosection = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div className="flex flex-col justify-center items-start w-screen h-screen px-28 bg-black ">
      <div className="flex flex-col items-start z-10 mix-blend-difference">
        <h2
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-white text-[2rem] ml-4"
        >
          Hi, i am
        </h2>
        <h1
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-white text-[7rem] inline"
        >
          Gourav Kumar
        </h1>
        <h2
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className="text-white text-[2rem] mt-5 ml-4 inline-block"
        >
          Web3 frontend developer
        </h2>
      </div>
    </div>
  );
};

export default Herosection;
