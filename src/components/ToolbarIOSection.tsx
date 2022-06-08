import Stack from "@mui/material/Stack";
import { useImageCoords } from "contexts";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { DownloadJSONButton } from "./DownloadJSONButton";
import { UploadFileButton } from "./UploadFileButton";
import { calculateImageCoordination, getImageRatio } from "./utils";

export interface ToolbarIOSectionProps {
  setImage: Dispatch<SetStateAction<HTMLImageElement | null>>;
}

export function ToolbarIOSection({ setImage }: ToolbarIOSectionProps) {
  const { setCoords } = useImageCoords();

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const imageRatio = getImageRatio(img);
          const { dx, dy, dw, dh } = calculateImageCoordination(imageRatio);
          setCoords({ dx, dy, dw, dh });
          setImage(img);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack flexGrow={1} direction="row" spacing={1}>
      <UploadFileButton label="Upload Image" accept="image/*" onChange={onFileChange} />
      <DownloadJSONButton />
    </Stack>
  );
}
