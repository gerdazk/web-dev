const { take } = require("../../custom-lodash");

describe("Test take method", () => {
  test("returns array containing first undefined elements from , expected  to equal [1]", () => {
    expect(take([1, 2, 3])).toStrictEqual([1]);
  });
  test("returns array containing first 2 elements from [1, 2, 3], expected  to equal [1, 2]", () => {
    expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
  });
  test("returns array containing first 0 elements from [1, 2, 3], expected  to equal []", () => {
    expect(take([1, 2, 3], 0)).toStrictEqual([]);
  });
  test("returns array containing first 5 elements from [1, 2, 3], expected  to equal [1, 2, 3]", () => {
    expect(take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
  });
  test("returns array containing first 2 elements from [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected  to equal [[1, 2, 3], [4, 5, 6]]", () => {
    expect(
      take(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        2
      )
    ).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  test("returns array containing first 1 element from ['hello', 'world'], expected  to equal ['hello']", () => {
    expect(take(["hello", "world"], 1)).toStrictEqual(["hello"]);
  });
  test("returns array containing first 3 elements from 5, expected  to equal []", () => {
    expect(take(5, 3)).toStrictEqual([]);
  });
  test("returns array containing first 2 elements from 'hello', expected  to equal [ 'h', 'e' ]", () => {
    expect(take("hello", 2)).toStrictEqual(["h", "e"]);
  });
});
