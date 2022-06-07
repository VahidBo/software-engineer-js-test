import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Dispatch, SetStateAction } from "react";

const HiddenInput = styled("input")({
  display: "none",
});

export interface ToolbarProps {
  setImage: Dispatch<SetStateAction<File | null>>;
}

export function Toolbar({ setImage }: ToolbarProps) {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    file && setImage(file);
  };

  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <label htmlFor="contained-button-file">
        <HiddenInput accept="image/*" id="contained-button-file" type="file" onChange={onFileChange} />
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
    </Paper>
  );
}
