import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MOVE_STEP } from "../constants";
import { useActionButtons } from "hooks";

export function ActionButtons() {
  const {
    onMove,
    onScaleDown,
    onScaleUp,
    isMoveToBottomDisabled,
    isMoveToLeftDisabled,
    isMoveToRightDisabled,
    isMoveToTopDisabled,
    isScaleDownDisabled,
    isScaleUpDisabled,
  } = useActionButtons();

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" onClick={onMove("x", MOVE_STEP)} disabled={isMoveToRightDisabled}>
        Move to right
      </Button>
      <Button variant="contained" onClick={onMove("x", -MOVE_STEP)} disabled={isMoveToLeftDisabled}>
        Move to left
      </Button>
      <Button variant="contained" onClick={onMove("y", -MOVE_STEP)} disabled={isMoveToTopDisabled}>
        Move to top
      </Button>
      <Button variant="contained" onClick={onMove("y", MOVE_STEP)} disabled={isMoveToBottomDisabled}>
        Move to bottom
      </Button>
      <Button variant="contained" onClick={onScaleUp} disabled={isScaleUpDisabled}>
        Scale photo 200%
      </Button>
      <Button variant="contained" onClick={onScaleDown} disabled={isScaleDownDisabled}>
        Scale photo 50%
      </Button>
    </Stack>
  );
}
