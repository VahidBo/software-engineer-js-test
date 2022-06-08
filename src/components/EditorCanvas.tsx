import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useEditorCanvas } from "hooks";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";

interface CanvasProps {
  image: HTMLImageElement | null;
}

export function EditorCanvas({ image }: CanvasProps) {
  const { canvas } = useEditorCanvas(image);
  return (
    <Stack>
      <Paper sx={{ p: 1, "&": { margin: "auto" } }} variant="outlined">
        <canvas ref={canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </Paper>
    </Stack>
  );
}
