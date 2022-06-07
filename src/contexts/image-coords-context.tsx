import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";

export type ImageCoordinationsType = { dx: number; dy: number; dw: number; dh: number };

export type ImageCoordsContextType = {
  coords: ImageCoordinationsType | undefined;
  setCoords: Dispatch<SetStateAction<ImageCoordinationsType | undefined>>;
};

const ImageCoordsContext = createContext<ImageCoordsContextType | undefined>(undefined);

export function useImageCoords() {
  const context = useContext(ImageCoordsContext);
  if (!context) {
    throw new Error(`useImageCoords must be used within a ImageCoordsProvider`);
  }
  return context;
}

type ImageCoordsProviderProps = PropsWithChildren<{}>;

export function ImageCoordsProvider({ children }: ImageCoordsProviderProps) {
  const [coords, setCoords] = useState<ImageCoordinationsType>();
  const value = { coords, setCoords };
  return <ImageCoordsContext.Provider value={value}>{children}</ImageCoordsContext.Provider>;
}
