"use client";
import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import {
  outerVariant,
  containerVariant,
  cardVariant,
} from "../components/Projects/Variants";
import { CursorContext } from "../context/CursorContext";

const projects = [
  {
    id: 1,
    name: "Likuid - App dev agency",
    description:
      "Likuid is a fictional App dev agency, speciallizing in Web and app development.",
    coverImage: "assets/Likuid.webp",
    hostedLink: "https://likuid.vercel.app/",
    githubLink: "https://github.com/gvirus21/likuid",
  },
  {
    id: 2,
    name: "Decentraverse",
    description: "Decentraverse is a concept Metaverse project's landing page.",
    coverImage: "assets/decentraverse.webp",
    hostedLink: "https://decentraverse.vercel.app/",
    githubLink: "https://github.com/gvirus21/Decentraverse",
  },
  {
    id: 3,
    name: "G Fashion",
    description:
      "G Fashion is an Ecommerce app that sells leatest fashion products (*Currently building).",
    coverImage: "assets/gfashion.webp",
    hostedLink: "https://g-fashion.vercel.app/",
    githubLink: "https://github.com/gvirus21/G-Fashion",
  },
];

const cardHoverAnimation = {
  translateY: -20,
  transition: { type: "spring", duration: 0.4 },
};

const githubLinkHoverAnimation = {
  scale: 1.2,
  transition: { type: "spring", duration: 0.4 },
};

const Projects = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div className="bg-white pt-20 -mt-1">
      <div className="xs:min-h-screen py-20 w-screen bg-white xs:pt-0 flex justify-center">
        <motion.div
          id="Projects"
          variants={outerVariant}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[70rem]"
        >
          <h1 className="xs:text-6xl lg:text-5xl xs:text-center md:text-right xs:mb-10 lg:mb-20 mt-20">
            Projects
          </h1>
          <motion.div
            variants={containerVariant}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 w-full"
          >
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  coverImage={project.coverImage}
                  description={project.description}
                  hostedLink={project.hostedLink}
                  githubLink={project.githubLink}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  id?: number;
  name: string;
  description: string;
  coverImage: string;
  hostedLink: string;
  githubLink: string;
}

const cardClickHandler = (hostedLink: string) => {
  window.open(hostedLink, "_blank");
};

const githubClickHandler = (hostedLink: string) => {
  window.open(hostedLink, "_blank");
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, coverImage, hostedLink, githubLink } = props;

  const cursorContext = useContext(CursorContext);

  return (
    <motion.div
      onMouseEnter={cursorContext?.largeClickableCursor}
      onMouseLeave={cursorContext?.regularCursor}
      onClick={() => cardClickHandler(hostedLink)}
      variants={cardVariant}
      whileHover={cardHoverAnimation}
      className="h-[21rem] rounded-lg w-[20rem] bg-white border-2 border-black flex flex-col items-center px-3 shadow-2xl"
    >
      <div className="w-[18rem] h-[10rem] rounded-md my-3 shadow-md">
        <img
          src={coverImage}
          width="100%"
          height="100%"
          alt="profile image"
          className="rounded-lg"
        />
      </div>
      <div className="h-4/6 w-full flex flex-col">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-3 mb-5 text-sm">{description}</p>
        <div className="w-full flex justify-end">
          <div
            className="flex justify-center w-10"
            onClick={() => githubClickHandler(githubLink)}
          >
            <motion.a
              onMouseEnter={cursorContext?.clickableCursor}
              onMouseLeave={cursorContext?.regularCursor}
              whileHover={githubLinkHoverAnimation}
            >
              <IconContext.Provider value={{ size: "20", color: "#000" }}>
                <FiGithub />
              </IconContext.Provider>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
