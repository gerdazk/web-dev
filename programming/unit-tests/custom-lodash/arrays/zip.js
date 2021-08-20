const push = require("../utils/push");
const filter = require("../arrays/filter");
const findLongestArray = require("../utils/findLongestArray");

function zip(...arrays) {
  arrays = filter(arrays, (array) => Array.isArray(array));
  if (arrays.length === 0) return [];
  let result = [];
  let arr;
  for (let i = 0; i < findLongestArray(arrays); i++) {
    arr = [];
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[j][i] || arrays[j][i] === false) {
        push(arr, arrays[j][i]);
      } else {
        push(arr, undefined);
      }
    }
    push(result, arr);
  }
  return result;
}

module.exports = zip;
