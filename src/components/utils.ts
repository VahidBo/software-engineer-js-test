import { CANVAS_HEIGHT, CANVAS_RATIO, CANVAS_WIDTH } from "./constants";

export function calculateImageCoordination(imageRatio: number): { dx: number; dy: number; dw: number; dh: number } {
  let dx, dy, dw, dh;
  if (imageRatio > CANVAS_RATIO) {
    dw = CANVAS_HEIGHT * imageRatio;
    dh = CANVAS_HEIGHT;
    dx = (CANVAS_WIDTH - dw) / 2;
    dy = 0;
  } else {
    dw = CANVAS_WIDTH;
    dh = CANVAS_WIDTH / imageRatio;
    dx = 0;
    dy = (CANVAS_HEIGHT - dh) / 2;
  }
  return { dx, dy, dw, dh };
}

export function getImageRatio(image: HTMLImageElement): number {
  return image.naturalWidth / image.naturalHeight;
}
