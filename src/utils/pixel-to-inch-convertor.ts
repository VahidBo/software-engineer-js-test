import { INCH_TO_PX_RATIO } from "../constants";

export function pixelToInchConvertor(pixel: number): number {
  return pixel / INCH_TO_PX_RATIO;
}

export function inchToPixelConvertor(inch: number): number {
  return inch * INCH_TO_PX_RATIO;
}
