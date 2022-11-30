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
    useState<CursorVariantProps>("regular");

  const regularCursor = () => {
    setCursorVariant("regular");
  };

  const clickableCursor = () => {
    setCursorVariant("clickable");
  };

  const store = {
    mousePosition,
    setMousePosition,
    cursorVariant,
    setCursorVariant,
    regularCursor,
    clickableCursor,
  };

  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  );
};

export default CursorContextProvider;
