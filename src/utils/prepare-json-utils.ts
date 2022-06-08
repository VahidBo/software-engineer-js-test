import produce from "immer";
import { PrintableType } from "types";
import { inchToPixelConvertor, pixelToInchConvertor } from "utils";

export function convertJSONUnits2Inches(json: PrintableType): PrintableType {
  return produce(json, (draft) => {
    draft.canvas.photo.width = inchToPixelConvertor(draft.canvas.photo.width);
    draft.canvas.photo.height = inchToPixelConvertor(draft.canvas.photo.height);
    draft.canvas.photo.x = inchToPixelConvertor(draft.canvas.photo.x);
    draft.canvas.photo.y = inchToPixelConvertor(draft.canvas.photo.y);
  });
}

export function convertJSONUnits2Pixel(json: PrintableType): PrintableType {
  return produce(json, (draft) => {
    draft.canvas.photo.width = pixelToInchConvertor(draft.canvas.photo.width);
    draft.canvas.photo.height = pixelToInchConvertor(draft.canvas.photo.height);
    draft.canvas.photo.x = pixelToInchConvertor(draft.canvas.photo.x);
    draft.canvas.photo.y = pixelToInchConvertor(draft.canvas.photo.y);
  });
}
