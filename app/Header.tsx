import React from "react";

const style = {
  container:
    "px-28 py-12 flex bg-transparent justify-between transition-all ease-in-out delay-150 absolute top-0 left-0 right-0",
  logo: "text-xl text-white",
  linksContainer: "flex",
  link: "px-4 text-white cursor-pointer transition-all ease-in-out delay-250 hover:text-gray-500",
};

const Header = () => {
  return (
      <div className={style.container}>
        <p className={style.logo}>Gourav kumar</p>
        <ul className={style.linksContainer}>
          <li className={style.link}>About</li>
          <li className={style.link}>Work</li>
          <li className={style.link}>Projects</li>
          <li className={style.link}>Contact</li>
        </ul>
      </div>
  );
};

export default Header;
