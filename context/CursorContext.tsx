"use client";
import React, { useState, createContext } from "react";
import {
  CursorContexProviderProps,
  CursorContextType,
  MousePositionType,
  CursorVariantProps,
} from "../typings";

export const CursorContext = createContext<CursorContextType | null>(null);

const CursorContextProvider = ({ children }: CursorContexProviderProps) => {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] =
    useState<CursorVariantProps>("default");

  const textEnter = () => {
    setCursorVariant("hover");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  const whiteBackgroundEnter = () => {
    console.log("white background")
    setCursorVariant("whiteBackgroundEnter");
  }

  const blackBackgroundEnter = () => {
    console.log("black background")
    setCursorVariant("blackBackgroundEnter");
  }

  const store = {
    mousePosition,
    setMousePosition,
    cursorVariant,
    setCursorVariant,
    textEnter,
    textLeave,
    whiteBackgroundEnter,
    blackBackgroundEnter,
  };

  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  );
};

export default CursorContextProvider;
