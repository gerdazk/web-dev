function findLongestArray(arr) {
    let longestArrayLength;
    for (let k = 0; k < arr.length; k++) {
        if (!longestArrayLength || arr[k].length > longestArrayLength) {
          longestArrayLength = arr[k].length;
        }
      }
      return longestArrayLength
}

module.exports = findLongestArray;