const includes = require("../arrays/includes");

function pick(obj, paths) {
  let newObj = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (
      (Array.isArray(paths) && includes(paths, keys[i])) ||
      (!Array.isArray(paths) && paths === keys[i])
    ) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }
  return newObj;
}

module.exports = pick;
