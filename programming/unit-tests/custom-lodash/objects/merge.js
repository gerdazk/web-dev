function merge(destination, ...source) {
  let destinationKeys = Object.keys(destination);
  for (let i = 0; i < destinationKeys.length; i++) {
    for (let k = 0; k < source.length; k++) {
      if (source[k][destinationKeys[i]]) {
        for (let j = 0; j < source[k][destinationKeys[i]].length; j++) {
          destination[destinationKeys[i]][j] = Object.assign(
            destination[destinationKeys[i]][j],
            source[k][destinationKeys[i]][j]
          );
        }
      } else {
        destination = Object.assign(destination, source[k]);
      }
    }
  }

  return destination;
}

module.exports = merge;
