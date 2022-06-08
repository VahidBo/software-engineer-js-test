import Button from "@mui/material/Button";
import { usePrintable } from "contexts";
import { useCallback, useMemo } from "react";
import { exportJSON } from "utils";
import { convertJSONUnits2Inches } from "utils";

export function DownloadJSONButton() {
  const { printable } = usePrintable();
  const { fileName } = printable.canvas.photo;
  const preparedJSON = useMemo(() => convertJSONUnits2Inches(printable), [printable]);
  const downloadJSONFile = useCallback(() => exportJSON(preparedJSON, fileName), [fileName, preparedJSON]);
  return (
    <Button variant="contained" onClick={downloadJSONFile}>
      Download JSON
    </Button>
  );
}
