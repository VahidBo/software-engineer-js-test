import Button from "@mui/material/Button";
import { useImageCoords } from "contexts";
import { useCallback } from "react";
import { exportJSON } from "utils";

export function DownloadJSONButton() {
  const { coords } = useImageCoords();
  const downloadJSONFile = useCallback(() => exportJSON(coords || {}, "sample-file.json"), [coords]); // TODO: file name must be modified
  return (
    <Button variant="contained" onClick={downloadJSONFile}>
      Download JSON
    </Button>
  );
}
