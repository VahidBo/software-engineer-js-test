import { CANVAS_HEIGHT_IN_INCHES, CANVAS_WIDTH_IN_INCHES } from "../constants";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react";
import { PrintableType } from "types";

const PRINTABLE_DEFAULT_VALUE: PrintableType = {
  canvas: {
    width: CANVAS_WIDTH_IN_INCHES,
    height: CANVAS_HEIGHT_IN_INCHES,
    photo: {
      // TODO: We also can use file url instead of image.
      image: null,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    },
  },
};

export type PrintableContextType = {
  printable: PrintableType;
  setPrintable: Dispatch<SetStateAction<PrintableType>>;
};

const PrintableContext = createContext<PrintableContextType | undefined>(undefined);

export function usePrintable() {
  const context = useContext(PrintableContext);
  if (!context) {
    throw new Error(`usePrintable must be used within a PrintableProvider`);
  }
  return context;
}

type PrintableProviderProps = PropsWithChildren<{}>;

export function PrintableProvider({ children }: PrintableProviderProps) {
  const [printable, setPrintable] = useState<PrintableType>(PRINTABLE_DEFAULT_VALUE);
  const value = useMemo(() => ({ printable, setPrintable }), [printable]);
  return <PrintableContext.Provider value={value}>{children}</PrintableContext.Provider>;
}
