import { useImageCoords } from "contexts";
import { CANVAS_HEIGHT, CANVAS_WIDTH, MOVE_STEP } from "./constants";

// TODO: Limitations are not so perfect at the margins. They could be improved.
export function useActionButtons() {
  const { coords, setCoords } = useImageCoords();

  const onMove = (dimension: "dx" | "dy", value: number) => () =>
    setCoords((c) => (c ? { ...c, [dimension]: c[dimension] + value } : undefined));

  const onScaleUp = () => setCoords((c) => (c ? { ...c, dw: c.dw * 2, dh: c.dh * 2 } : undefined));
  const onScaleDown = () => setCoords((c) => (c ? { ...c, dw: c.dw / 2, dh: c.dh / 2 } : undefined));

  const { dx, dy, dw, dh } = coords || { dx: 0, dy: 0, dw: 0, dh: 0 };
  const isMoveToRightDisabled = dx + MOVE_STEP > 0;
  const isMoveToLeftDisabled = dx + dw < CANVAS_WIDTH + MOVE_STEP;
  const isMoveToTopDisabled = dy + dh < CANVAS_HEIGHT + MOVE_STEP;
  const isMoveToBottomDisabled = dy + MOVE_STEP > 0;
  const isScaleDownDisabled = CANVAS_WIDTH > dw / 2 || CANVAS_HEIGHT > dh / 2;
  const isScaleUpDisabled = !dw || !dh;

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
