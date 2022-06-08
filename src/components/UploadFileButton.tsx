import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { InputHTMLAttributes } from "react";

const HiddenInput = styled("input")({
  display: "none",
});

export interface UploadFileButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function UploadFileButton({ label, ...inputProps }: UploadFileButtonProps) {
  return (
    <label htmlFor={`upload-file-button-${label}`}>
      <HiddenInput id={`upload-file-button-${label}`} type="file" data-testid="upload-input" {...inputProps} />
      <Button variant="contained" component="span">
        {label}
      </Button>
    </label>
  );
}
