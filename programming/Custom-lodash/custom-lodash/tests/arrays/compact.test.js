const _ = require("../../custom-lodash");

describe("Test compact method", () => {
  test("removes falsy values from [0, 1, false, 2, '', 3], expected  to equal [1, 2, 3]", () => {
    expect(_.compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
  });
  test("removes falsy values from [0, NaN, false, 0, 15, true], expected  to equal [ 15, true ]", () => {
    expect(_.compact([0, NaN, false, 0, 15, true])).toStrictEqual([15, true]);
  });
  test("removes falsy values from true, expected  to equal []", () => {
    expect(_.compact(true)).toStrictEqual([]);
  });
  test("removes falsy values from [], expected  to equal []", () => {
    expect(_.compact([])).toStrictEqual([]);
  });
  test("removes falsy values from 1, expected  to equal []", () => {
    expect(_.compact(1)).toStrictEqual([]);
  });
  test("removes falsy values from {'a': false, 'b': 5}, expected  to equal []", () => {
    expect(_.compact({ a: false, b: 5 })).toStrictEqual([]);
  });
});
