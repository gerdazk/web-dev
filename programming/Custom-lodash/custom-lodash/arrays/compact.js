const push = require("../utils/push");

function compact(arr) {
  if (!Array.isArray(arr)) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      push(newArr, arr[i]);
    }
  }
  return newArr;
}

module.exports = compact;
