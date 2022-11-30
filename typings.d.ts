type CursorContexProviderProps = {
  children: React.ReactNode;
};

export type MousePositionType = {
  x: number;
  y: number;
};

export type CursorVariantProps = "regular" | "clickable" | "largeClickable";

type CursorContextType = {
  mousePosition: MousePositionType;
  setMousePosition: React.Dispatch<React.SetStateAction<MousePositionType>>;
  cursorVariant: CursorVariantProps;
  setCursorVariant: React.Dispatch<React.SetStateAction<CursorVariantProps>>;
  regularCursor: () => void;
  clickableCursor: () => void;
  largeClickableCursor: () => void;
};
