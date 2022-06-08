import { usePrintable } from "contexts";
import produce from "immer";
import { CANVAS_HEIGHT, CANVAS_WIDTH, MOVE_STEP } from "../constants";

// TODO: Limitations are not so perfect at the margins. They could be improved.
export function useActionButtons() {
  const { printable, setPrintable } = usePrintable();

  const onMove = (dimension: "x" | "y", value: number) => () =>
    setPrintable(
      produce((p) => {
        p.canvas.photo[dimension] += value;
      }),
    );

  const onScaleUp = () =>
    setPrintable(
      produce((p) => {
        p.canvas.photo.width *= 2;
        p.canvas.photo.height *= 2;
      }),
    );
  const onScaleDown = () =>
    setPrintable(
      produce((p) => {
        p.canvas.photo.width /= 2;
        p.canvas.photo.height /= 2;
      }),
    );

  const { x, y, width, height } = printable.canvas.photo;
  const isMoveToRightDisabled = x + MOVE_STEP > 0;
  const isMoveToLeftDisabled = x + width < CANVAS_WIDTH + MOVE_STEP;
  const isMoveToTopDisabled = y + height < CANVAS_HEIGHT + MOVE_STEP;
  const isMoveToBottomDisabled = y + MOVE_STEP > 0;
  const isScaleDownDisabled = CANVAS_WIDTH > width / 2 || CANVAS_HEIGHT > height / 2;
  const isScaleUpDisabled = !width || !height;

  return {
    onMove,
    onScaleUp,
    onScaleDown,
    isMoveToRightDisabled,
    isMoveToLeftDisabled,
    isMoveToTopDisabled,
    isMoveToBottomDisabled,
    isScaleDownDisabled,
    isScaleUpDisabled,
  };
}
