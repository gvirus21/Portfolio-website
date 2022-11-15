"use client";
import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const style = {
  container:
    "px-28 sm:px-14 py-12 sm:py-20 flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 absolute top-0 left-0 right-0 mix-blend-difference",
  logo: "text-5xl lg:text-2xl text-white",
  linksContainer: "hidden lg:flex",
  link: "px-4 text-white transition-all ease-in-out delay-250",
  menu: "flex flex-col justify-between items-center h-10 w-24 lg:hidden",
};

const Header = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div className={style.container}>
      <p
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className={style.logo}
      >
        Gourav kumar
      </p>

      {/* links */}
      <ul className={style.linksContainer}>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          About
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Work
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Projects
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Contact
        </li>
      </ul>

      {/* hamburger */}
      <div
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className={style.menu}
      >
        <div className="w-20 h-1 bg-white rounded"></div>
        <div className="w-20 h-1 bg-white rounded"></div>
      </div>
    </div>
  );
};

export default Header;
