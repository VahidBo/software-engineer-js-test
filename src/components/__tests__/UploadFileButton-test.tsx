import { render, screen } from "@testing-library/react";
import { UploadFileButton } from "../UploadFileButton";

test("Render UploadFileButton", () => {
  const onChange = jest.fn();
  render(<UploadFileButton label="Upload File" onChange={onChange} />);
  expect(screen.getByText("Upload File")).toBeInTheDocument();
});
