import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const title = screen.getByText(/Simple photo editor/i);
  expect(title).toBeInTheDocument();
  expect(screen.getByTestId("toolbar")).toBeInTheDocument();
  expect(screen.getByTestId("editor-canvas")).toBeInTheDocument();
});
