type CursorContexProviderProps = {
  children: React.ReactNode;
};

export type MousePositionType = {
  x: any; // string | number
  y: any;
};

export type CursorVariantProps =
  | "blackBackgroundEnter"
  | "blackBackgroundLink"
  | "whiteBackgroundEnter"
  | "whiteBackgroundLink";

type CursorContextType = {
  mousePosition: MousePositionType;
  setMousePosition: React.Dispatch<React.SetStateAction<MousePositionType>>;
  cursorVariant: CursorVariantProps;
  setCursorVariant: React.Dispatch<React.SetStateAction<CursorVariantProps>>;
  blackBackgroundLink: () => void;
  blackBackgroundEnter: () => void;
  whiteBackgroundEnter: () => void;
  whiteBackgroundLink: () => void;
};
