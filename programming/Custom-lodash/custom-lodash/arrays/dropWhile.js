const push = require("../utils/push");

function dropWhile(collection, predicate) {
  let add = false;
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (add) {
      push(result, collection[i]);
    } else {
      if (!predicate(collection[i], i, collection)) {
        add = true;
        push(result, collection[i]);
      }
    }
  }
  return result;
}

module.exports = dropWhile;
