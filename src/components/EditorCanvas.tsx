import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";
import { calculateImageCoordination, getImageRatio } from "./utils";

interface CanvasProps {
  image: File | null;
}

export function EditorCanvas({ image }: CanvasProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (canvas.current) {
            const ctx = canvas.current.getContext("2d");
            const imageRatio = getImageRatio(img);
            const { dx, dy, dw, dh } = calculateImageCoordination(imageRatio);
            ctx?.drawImage(img, dx, dy, dw, dh);
          }
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <Paper sx={{ p: 1 }} variant="outlined">
      <Typography mb={1}>File Name: {image?.name || "-"}</Typography>
      <canvas ref={canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    </Paper>
  );
}
