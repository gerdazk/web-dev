const push = require("../utils/push");

function take(arr, num = 1) {
  let takeCount = Number(num);
  if (takeCount <= 0) return [];
  let newArr = [];
  for (let i = 0; i < num; i++) {
    if (i < arr.length) {
      push(newArr, arr[i]);
    }
  }
  return newArr;
}

module.exports = take;
