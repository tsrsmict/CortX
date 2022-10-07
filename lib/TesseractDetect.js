import Tesseract from "tesseract.js";
import prettify from "./formatTesseract.js";

const recognize = async (file) => {
  let text = await Tesseract.recognize(file, "eng").then((res) => {
    return res.data.text;
  });

  let array = text.toString().split("\n");
  var heads = array.shift(0);
  heads = heads.replaceAll(" ", ",");
  array = array.map(prettify);
  array.unshift(heads);
  var merged = array.join("\n");
  var arr = merged.split("\n");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(",");
  }
  return arr;
};

export default recognize;
