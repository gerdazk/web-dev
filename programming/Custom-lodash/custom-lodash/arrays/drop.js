const push = require("../utils/push");

function drop(arr, num = 1) {
  let dropCount = Number(num);
  if (dropCount === 0) return arr;
  if (dropCount < 1) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > dropCount - 1) {
      push(newArr, arr[i]);
    }
  }
  return newArr;
}

module.exports = drop;
