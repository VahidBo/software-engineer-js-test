export type PrintableType = {
  canvas: {
    width: number;
    height: number;
    photo: {
      fileName: string;
      image: string | null;
      width: number;
      height: number;
      x: number;
      y: number;
    };
  };
};

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}
