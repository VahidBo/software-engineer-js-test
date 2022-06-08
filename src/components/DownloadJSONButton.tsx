import Button from "@mui/material/Button";
import { usePrintable } from "contexts";
import { useCallback } from "react";
import { exportJSON } from "utils";

export function DownloadJSONButton() {
  const { printable } = usePrintable();
  const downloadJSONFile = useCallback(() => exportJSON(printable, "sample-file.json"), [printable]);
  return (
    <Button variant="contained" onClick={downloadJSONFile}>
      Download JSON
    </Button>
  );
}
