import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Dispatch, SetStateAction } from "react";
import { ActionButtons } from "./ActionButtons";
import { ToolbarIOSection } from "./IOSection";

export interface ToolbarProps {
  setImage: Dispatch<SetStateAction<HTMLImageElement | null>>;
}

export function Toolbar({ setImage }: ToolbarProps) {
  return (
    <Paper variant="outlined" sx={{ p: 1 }} data-testid="toolbar">
      <Stack direction="row">
        <ToolbarIOSection setImage={setImage} />
        <ActionButtons />
      </Stack>
    </Paper>
  );
}
