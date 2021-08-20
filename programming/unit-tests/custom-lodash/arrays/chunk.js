const slice = require("../utils/slice");
const split = require("../utils/split");
const push = require("../utils/push");

function chunk(arr, size = 1) {
  size = Number(size);
  if (!arr || size < 1 || isNaN(size)) return [];
  let newArr = [];
  if (typeof arr === "string") {
    arr = split(arr);
  }
  for (let i = 0; i < arr.length; i += size) {
    push(newArr, slice(arr, i, i + size));
  }
  return newArr;
}

module.exports = chunk;
