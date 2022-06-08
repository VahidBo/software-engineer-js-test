import Stack from "@mui/material/Stack";
import { useIOSection } from "hooks";
import { Dispatch, SetStateAction } from "react";
import { DownloadJSONButton } from "./DownloadJSONButton";
import { UploadFileButton } from "./UploadFileButton";

export interface ToolbarIOSectionProps {
  setImage: Dispatch<SetStateAction<HTMLImageElement | null>>;
}

export function ToolbarIOSection({ setImage }: ToolbarIOSectionProps) {
  const { onImageFileUploaded, onJSONImported } = useIOSection(setImage);
  return (
    <Stack flexGrow={1} direction="row" spacing={1}>
      <UploadFileButton label="Upload Image" accept="image/*" onChange={onImageFileUploaded} />
      <DownloadJSONButton />
      <UploadFileButton label="Import JSON" accept="application/JSON" onChange={onJSONImported} />
    </Stack>
  );
}
