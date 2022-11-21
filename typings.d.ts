type CursorContexProviderProps = {
    children: React.ReactNode;
  };
  
  export type MousePositionType = {
    x: number;
    y: number;
  };
  
  export type CursorVariantProps = "default" | "hover";
  
  type CursorContextType = {
    mousePosition: MousePositionType;
    setMousePosition: React.Dispatch<React.SetStateAction<MousePositionType>>;
    cursorVariant: CursorVariantProps;
    setCursorVariant: React.Dispatch<React.SetStateAction<CursorVariantProps>>;
    textEnter: () => void;
    textLeave: () => void;
    whiteBackgroundEnter: () => void;
    blackBackgroundEnter: () => void;
  };