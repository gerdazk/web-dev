function find(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      return collection[i];
    }
  }
  return undefined;
}

module.exports = find;
