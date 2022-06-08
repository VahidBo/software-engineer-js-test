import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useEditorCanvas } from "hooks";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";

interface CanvasProps {
  image: HTMLImageElement | null;
}

export function EditorCanvas({ image }: CanvasProps) {
  const { canvas, fileName } = useEditorCanvas(image);
  return (
    <Stack data-testid="editor-canvas">
      <Paper sx={{ p: 1, "&": { margin: "auto" } }} variant="outlined">
        <Typography>File Name: {fileName || "-"}</Typography>
        <canvas ref={canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </Paper>
    </Stack>
  );
}
