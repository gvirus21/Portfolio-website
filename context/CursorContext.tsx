"use client";
import React, { useState, createContext } from "react";
import {
  CursorContexProviderProps,
  CursorContextType,
  MousePositionType,
  CursorVariantProps,
} from "../typings";
import {useMotionValue} from 'framer-motion'

export const CursorContext = createContext<CursorContextType | null>(null);

const CursorContextProvider = ({ children }: CursorContexProviderProps) => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const [mousePosition, setMousePosition] = useState<MousePositionType>({
    x: cursorX,
    y: cursorY,
  });

  const [cursorVariant, setCursorVariant] =
    useState<CursorVariantProps>("blackBackgroundEnter");

  const blackBackgroundLink = () => {
    setCursorVariant("blackBackgroundLink");
  };

  const blackBackgroundEnter = () => {
    setCursorVariant("blackBackgroundEnter");
  };

  const whiteBackgroundEnter = () => {
    setCursorVariant("whiteBackgroundEnter");
  }

  const whiteBackgroundLink = () => {
    setCursorVariant("whiteBackgroundLink");
  }

  const store = {
    mousePosition,
    setMousePosition,
    cursorVariant,
    setCursorVariant,
    blackBackgroundLink,
    blackBackgroundEnter,
    whiteBackgroundEnter,
    whiteBackgroundLink,
  };

  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  );
};

export default CursorContextProvider;
