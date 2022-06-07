import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useImageCoords } from "contexts";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { calculateImageCoordination, getImageRatio } from "./utils";

const HiddenInput = styled("input")({
  display: "none",
});

export interface ToolbarProps {
  setImage: Dispatch<SetStateAction<HTMLImageElement | null>>;
}

export function Toolbar({ setImage }: ToolbarProps) {
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
    <Paper variant="outlined" sx={{ p: 1 }}>
      <label htmlFor="upload-file-button">
        <HiddenInput accept="image/*" id="upload-file-button" type="file" onChange={onFileChange} />
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
    </Paper>
  );
}
