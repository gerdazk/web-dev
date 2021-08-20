const push = require("../utils/push");

function toPairs(obj) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    push(result, [keys[i], values[i]]);
  }
  return result;
}

module.exports = toPairs;
