function pickBy(collection, predicate) {
  let newObj = {};
  let values = Object.values(collection);
  let keys = Object.keys(collection);
  for (let i = 0; i < keys.length; i++) {
    if (predicate(values[i], keys[i])) {
      newObj[keys[i]] = values[i];
    }
  }
  return newObj;
}

module.exports = pickBy;
