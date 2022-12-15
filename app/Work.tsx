"use client";
import React, { useContext, useRef } from "react";
import {
  TileWrapper,
  TileBackground,
  TileContent,
  Tile,
} from "../components/Work/tile";
import { motion } from "framer-motion";
import { WorkContainer, WorkLeft, WorkRight } from "../components/Work/Work";
import { CursorContext } from "../context/CursorContext";
import { ScrollContext } from "../context/ScrollObserver";

const variant = {
  initial: { opacity: 0, translateY: 50 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { ease: "easeInOut", duration: 0.5, delay: 0.8 },
  },
};

const Works = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1.5, scrollY / elContainer.clientHeight);
  }

  return (
    <div ref={refContainer} id="Work" className="bg-white -mt-1 ">
      <div
        style={{
          opacity: progress >= 1.4 ? 0 : 1,
        }}
        className="bg-white sticky top-0 pt-14 pb-3 z-50 transition-all duration-200 ease-out"
      >
        <motion.h1
          variants={variant}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className=" text-black text text-5xl text-center sticky top-16 z-50"
        >
          My Works
        </motion.h1>
      </div>
      <ParallaxStickySlider />
    </div>
  );
};

export default Works;

const ParallaxStickySlider = () => {
  const cursorContext = useContext(CursorContext);
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground />
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-8 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold z-50">Forefront DAO</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5 ">
                    <span className="mr-2">○</span>
                    Helped the Forefront team build their Squads app.
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>I have built the{" "}
                    <span className="font-bold mx-1">Projects</span> page for
                    the Squads app as a solo developer.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> In this Project, I have
                    worked with the design team and a senior developer.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> Here I have Implemented all
                    functionalities like Modals, Search, Sort & Filter projects
                    based on user inputs.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> We built this project using
                    Next.js, MUI & Styled-components.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> You can check out this
                    project from here,{" "}
                    <a
                      onMouseEnter={cursorContext?.clickableCursor}
                      onMouseLeave={cursorContext?.regularCursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://mdir2.vercel.app/"
                      className="text-violet-400 underline"
                    >
                      Squads by Forefront.
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="assets/forefront.webp"
                  width="100%"
                  height="100%"
                  alt="profile image"
                  className="rounded-lg"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-8 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold ">Bankless DAO</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> Helped BanklessDAO as a paid
                    Open source contributor to Work on the frontend of their
                    upcoming official website.
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> In this project I have
                    worked closely with my fellow devs and the design team to
                    update the Theme of the site.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> In this project, all the
                    devs were assigned different pages to refactor and work on
                    the other functionalities.
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> We are using Next.js &
                    Chakra UI to build this project.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span> You can check out this
                    project from here,{" "}
                    <a
                      onMouseEnter={cursorContext?.clickableCursor}
                      onMouseLeave={cursorContext?.regularCursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.bankless.community/"
                      className="text-red-400 underline"
                    >
                      Bankless website
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="/assets/bankless.webp"
                  width={840}
                  height={510}
                  alt="bankless"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-8 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold mt-16">Canto Public</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    I Joined Canto public as a contract frontend developer to Work on their upcoming Project "Canto Safe".
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    Here I was assigned the task to update the theme of their Canto safe app, which is a fork of Gnosis-safe app.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    Here I was in charge of designing and updating the theme according to that.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    I have worked with fellow developers and seniors who helped me in debugging and other decision makings while designing.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    My main tech stack for this project was React.js & MUI.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-5  ">
                    <span className="mr-2">○</span>
                    You can check out this project from here,{" "}
                    <a
                      onMouseEnter={cursorContext?.clickableCursor}
                      onMouseLeave={cursorContext?.regularCursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/neobase-one/safe-react"
                      className="text-green-400 underline"
                    >
                      Canto Safe app
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="/assets/canto.webp"
                  width={840}
                  height={510}
                  alt="canto"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};
