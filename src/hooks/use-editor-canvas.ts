import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";
import { usePrintable } from "contexts";
import { useEffect, useRef } from "react";

export function useEditorCanvas(image: HTMLImageElement | null) {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const {
    printable: {
      canvas: {
        photo: { width: dw, height: dh, x: dx, y: dy, fileName },
      },
    },
  } = usePrintable();

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      if (image) {
        ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx?.drawImage(image, dx, dy, dw, dh);
      }
    }
  }, [dh, dw, dx, dy, image]);

  return { canvas, fileName };
}
