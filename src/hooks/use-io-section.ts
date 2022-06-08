import { calculateImageCoordinations, getImageRatio } from "utils";
import { usePrintable } from "contexts";
import produce from "immer";
import { ChangeEvent, useCallback } from "react";
import { convertJSONUnits2Pixel } from "utils";

export function useIOSection(setImage: (image: HTMLImageElement | null) => void) {
  const { setPrintable } = usePrintable();

  const onImageFileUploaded = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const imageRatio = getImageRatio(img);
            const { dx, dy, dw, dh } = calculateImageCoordinations(imageRatio);
            setPrintable(
              produce((p) => {
                p.canvas.photo.fileName = file.name;
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
    },
    [setImage, setPrintable],
  );

  const onJSONImported = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const json = JSON.parse(reader.result as string);
          const img = new Image();
          img.onload = () => {
            setImage(img);
            const preparedJSON = convertJSONUnits2Pixel(json);
            setPrintable(preparedJSON);
          };
          img.src = json.canvas.photo.image;
        };
        reader.readAsText(file);
      }
    },
    [setImage, setPrintable],
  );

  return { onImageFileUploaded, onJSONImported };
}
