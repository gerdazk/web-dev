const _ = require("../../custom-lodash");

describe("Test drop method", () => {
  test("drops 2 elements from [1, 2, 3], expected  to equal [3]", () => {
    expect(_.drop([1, 2, 3], 2)).toStrictEqual([3]);
  });
  test("drops undefined elements from [1, 2, 3], expected  to equal [2, 3]", () => {
    expect(_.drop([1, 2, 3])).toStrictEqual([2, 3]);
  });
  test("drops 5 elements from [1, 2, 3], expected  to equal []", () => {
    expect(_.drop([1, 2, 3], 5)).toStrictEqual([]);
  });
  test("drops 0 elements from [1, 2, 3], expected  to equal [1, 2, 3]", () => {
    expect(_.drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });
  test("drops '5' elements from [0, NaN, false, 0, 15, true], expected  to equal [ true ]", () => {
    expect(_.drop([0, NaN, false, 0, 15, true], "5")).toStrictEqual([true]);
  });
  test("drops 1 element from ['hello', 'world'], expected  to equal ['world']", () => {
    expect(_.drop(["hello", "world"], 1)).toStrictEqual(["world"]);
  });
  test("drops 3 elements from 'hello', expected  to equal [ 'l', 'o' ]", () => {
    expect(_.drop("hello", 3)).toStrictEqual(["l", "o"]);
  });
  test("drops -2 elements from 'hello', expected  to equal []", () => {
    expect(_.drop("hello", -2)).toStrictEqual([]);
  });
});
