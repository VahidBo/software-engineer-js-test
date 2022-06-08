import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { EditorCanvas, Toolbar } from "components";
import { PrintableProvider } from "contexts";
import { useState } from "react";

function App() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  return (
    <Stack spacing={1}>
      <Typography variant="h5">Simple photo editor</Typography>
      <PrintableProvider>
        <Toolbar setImage={setImage} />
        <EditorCanvas image={image} />
      </PrintableProvider>
    </Stack>
  );
}

export default App;
