const _ = require("../../custom-lodash");

describe("Test includes method", () => {
  test("checks if [1, 2, 3] includes 1, starting from index undefined, expected  to be true", () => {
    expect(_.includes([1, 2, 3], 1)).toBe(true);
  });
  test("checks if 5 includes 5 starting from index undefined, expected  to be false", () => {
    expect(_.includes(5, 5)).toBe(false);
  });
  test("checks if [1, 2, 3] includes 1 , starting from index 2 , expected  to be false", () => {
    expect(_.includes([1, 2, 3], 1, 2)).toBe(false);
  });
  test("checks if { 'a': 1, 'b': 2 } includes 1 , starting from index undefined , expected  to be true", () => {
    expect(_.includes({ a: 1, b: 2 }, 1)).toBe(true);
  });
  test("checks if 'abcd' includes 'bc' , starting from index undefined , expected  to be true", () => {
    expect(_.includes("abcd", "bc")).toBe(true);
  });
  test("checks if 'ab5dhdhj' includes 5 , starting from index undefined , expected  to be true", () => {
    expect(_.includes("ab5dhdhj", 5)).toBe(true);
  });
  test("checks if 'ab5dhdhj' includes 5 , starting from index 4 , expected  to be false", () => {
    expect(_.includes("ab5dhdhj", 5, 4)).toBe(false);
  });
});
