const push = require("../utils/push");

function filter(collection, predicate) {
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof predicate === "function") {
      if (predicate(collection[i], i, collection)) {
        push(newArr, collection[i]);
      }
    } else if (
      typeof predicate !== "object" &&
      typeof collection[i] === "object"
    ) {
      if (collection[i][predicate]) {
        push(newArr, collection[i]);
      }
    }
  }
  return newArr;
}

module.exports = filter;
