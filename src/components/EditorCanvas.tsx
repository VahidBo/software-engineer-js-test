import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useImageCoords } from "contexts";
import { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

interface CanvasProps {
  image: HTMLImageElement | null;
}

export function EditorCanvas({ image }: CanvasProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const { coords } = useImageCoords();

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      if (image && coords) {
        const { dx, dy, dw, dh } = coords;
        ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx?.drawImage(image, dx, dy, dw, dh);
      }
    }
  }, [coords, image]);

  return (
    <Stack>
      <Paper sx={{ p: 1, "&": { margin: "auto" } }} variant="outlined">
        <canvas ref={canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </Paper>
    </Stack>
  );
}
