const push = require("../utils/push")

function split(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result = push(result, str[i]);
  }
  return result;
}

module.exports = split;
