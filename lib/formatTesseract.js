const prettify = (word) => {
  word = word.replaceAll(" ", ""); //remove all whitespace
  var type = "";
  var count = "";
  var unit = "";
  var range = "";
  var type_full = false;
  var count_full = false;
  var unit_full = false;
  for (var i = 0; i < word.length; i++) {
    if (
      !type_full &&
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(word.charAt(i))
    ) {
      type += word.charAt(i);
      if (/[0-9]/.test(word.charAt(i + 1))) {
        type_full = true;
      }
    } else if (!count_full && /[0-9.]/.test(word.charAt(i))) {
      count += word.charAt(i);
      if (/^[a-zA-Z]+$/.test(word.charAt(i + 1))) {
        count_full = true;
      }
    } else if (!unit_full && !/[0-9]/.test(word.charAt(i))) {
      unit += word.charAt(i);
      if (/[0-9]/.test(word.charAt(i + 1))) {
        unit_full = true;
      }
    } else range += word.charAt(i);
  }

  return `${type},${count},${unit},${range}`;
};
export default prettify;
