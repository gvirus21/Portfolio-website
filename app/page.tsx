import React from "react";
import Cursor from "../components/utils/Cursor";
import Header from "./Header"
import Herosection from "./Herosection"
import About from "./About"
import Projects from "./Projects"
const page = () => {
  return (
    <div className="relative">
      {/* <Cursor /> */}
      <Header />
      <Herosection />
      <About />
      <Projects />
    </div>
  );
};

export default page;
