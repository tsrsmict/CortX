import Tesseract from "tesseract.js";
import prettify from "./formatTesseract.js";

export default async function TesseractDetect(file='https://cdn.discordapp.com/attachments/869440732753182801/1026485179570728970/unknown.png') {
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
  var json = {
    heads: [],
    type: [],
    value: [],
    unit: [],
    interval: [],
  };
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (i == 0) {
        json.heads.push(arr[i][j]);
      } else {
        if (j == 0) {
          json.type.push(arr[i][j]);
        } else if (j == 1) {
          json.value.push(arr[i][j]);
        } else if (j == 2) {
          json.unit.push(arr[i][j]);
        } else if (j == 3) {
          json.interval.push(arr[i][j]);
        }
      }
    }
  }

  return json;
}
