const _ = require("../../custom-lodash");

describe("Test zip method", () => {
  test("creates arrays from elements with the same indexes in the origin arrays from ['a', 'b'], [1, 2], [true, false],expected  to equal [['a', 1, true], ['b', 2, false]]", () => {
    expect(_.zip(["a", "b"], [1, 2], [true, false])).toStrictEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
  test("creates arrays from elements with the same indexes in the origin arrays from  ['a', 'b', 'c', 'd'], [1], [true, false] ,expected  to equal [[ 'a', 1, true ],[ 'b', undefined, false ],[ 'c', undefined, undefined ],[ 'd', undefined, undefined ]]", () => {
    expect(_.zip(["a", "b", "c", "d"], [1], [true, false])).toStrictEqual([
      ["a", 1, true],
      ["b", undefined, false],
      ["c", undefined, undefined],
      ["d", undefined, undefined],
    ]);
  });
  test("creates arrays from elements with the same indexes in the origin arrays from 5,3,2 ,expected  to equal []", () => {
    expect(_.zip(5, 3, 2)).toStrictEqual([]);
  });
  test("creates arrays from elements with the same indexes in the origin arrays from  [1, 2], 'hello', 2 ,expected  to equal [ [ 1 ], [ 2 ] ]", () => {
    expect(_.zip([1, 2], "hello", 2)).toStrictEqual([[1], [2]]);
  });
  test("creates arrays from elements with the same indexes in the origin arrays from  [1, 2], 'hello', [3] ,expected  to equal [ [ 1, 3 ], [ 2, undefined ] ]", () => {
    expect(_.zip([1, 2], "hello", [3])).toStrictEqual([
      [1, 3],
      [2, undefined],
    ]);
  });
  test("creates arrays from elements with the same indexes in the origin arrays from  undefined ,expected  to equal []", () => {
    expect(_.zip()).toStrictEqual([]);
  });
});
