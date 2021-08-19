const slice = require("../utils/slice");
const join = require("../utils/join");

function includes(collection, value, indexFrom = 0) {
  let arr = collection;
  if (typeof collection === "string") {
    collection = slice(collection, indexFrom);
    collection = join(collection);
    value = new RegExp(value);
    return value.test(collection);
  } else if (typeof collection === "object") {
    if (!Array.isArray(collection)) {
      arr = Object.values(collection);
    }
    for (let i = indexFrom; i < arr.length; i++) {
      if (arr[i] == value) return true;
    }
  }
  return false;
}

module.exports = includes;
