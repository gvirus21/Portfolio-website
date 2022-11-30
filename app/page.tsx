import React from "react";
import Cursor from "../components/utils/Cursor";
import Header from "./Header";
import Herosection from "./Herosection";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const page = () => {
  return (
    <div className="relative">
      <Cursor />
      <Header />
      <Herosection />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
