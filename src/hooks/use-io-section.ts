import { calculateImageCoordination, getImageRatio } from "components/utils";
import { usePrintable } from "contexts";
import produce from "immer";
import { ChangeEvent } from "react";

export function useIOSection(setImage: (image: HTMLImageElement | null) => void) {
  const { setPrintable } = usePrintable();

  const onImageFileUploaded = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const imageRatio = getImageRatio(img);
          const { dx, dy, dw, dh } = calculateImageCoordination(imageRatio);
          setPrintable(
            produce((p) => {
              p.canvas.photo.image = reader.result as string;
              p.canvas.photo.width = dw;
              p.canvas.photo.height = dh;
              p.canvas.photo.x = dx;
              p.canvas.photo.y = dy;
            }),
          );
          setImage(img);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const onJSONImported = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const json = JSON.parse(reader.result as string);
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setPrintable(json);
        };
        img.src = json.canvas.photo.url;
      };
      reader.readAsText(file);
    }
  };

  return { onImageFileUploaded, onJSONImported };
}
