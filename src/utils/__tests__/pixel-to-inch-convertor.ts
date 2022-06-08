import { inchToPixelConvertor, pixelToInchConvertor } from "../pixel-to-inch-convertor";

test("pixel-to-inch-convertor", () => {
  expect(pixelToInchConvertor(0)).toBe(0);
  expect(pixelToInchConvertor(96)).toBe(1);
});

test("inch-to-pixel-convertor", () => {
  expect(inchToPixelConvertor(0)).toBe(0);
  expect(inchToPixelConvertor(1)).toBe(96);
});
