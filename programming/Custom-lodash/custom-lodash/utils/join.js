function join(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

module.exports = join