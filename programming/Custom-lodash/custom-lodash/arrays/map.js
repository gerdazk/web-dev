const push = require("../utils/push");

function map(collection, predicate) {
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof predicate === "function") {
      push(newArr, predicate(collection[i], i, collection));
    } else if(typeof collection === "object"){
      push(newArr, collection[i][predicate]);
    } else return [];
    
  }
  return newArr;
}

module.exports = map;
