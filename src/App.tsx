import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { EditorCanvas, Toolbar } from "components";
import { useState } from "react";

function App() {
  const [image, setImage] = useState<File | null>(null);
  return (
    <Stack spacing={1}>
      <Typography variant="h5">Simple photo editor</Typography>
      <Toolbar setImage={setImage} />
      <EditorCanvas image={image} />
    </Stack>
  );
}

export default App;
