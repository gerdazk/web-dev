const _ = require("../../custom-lodash");

describe("Test omit method", () => {
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with ['a', 'c'] paths omitted ,expected  to equal { 'b': '2' }", () => {
    expect(_.omit({ a: 1, b: "2", c: 3 }, ["a", "c"])).toStrictEqual({
      b: "2",
    });
  });
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3, 5: true, 'e': '' } with ['a', 'c'] paths omitted ,expected  to equal { '5': true, b: '2', e: '' }", () => {
    expect(
      _.omit({ a: 1, b: "2", c: 3, 5: true, e: "" }, ["a", "c"])
    ).toStrictEqual({ 5: true, b: "2", e: "" });
  });
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with 'e' paths omitted ,expected  to equal { 'a': true, 'b': '20', 'c': 3, 'd': 'hello'}", () => {
    expect(
      _.omit({ a: true, b: "20", c: 3, d: "hello", e: -1 }, "e")
    ).toStrictEqual({ a: true, b: "20", c: 3, d: "hello" });
  });
  test("creates new object from ['a', 'b', 'c'] with ['a', 'c'] paths omitted ,expected  to equal { '0': 'a', '1': 'b', '2': 'c' }", () => {
    expect(_.omit(["a", "b", "c"], ["a", "c"])).toStrictEqual({
      0: "a",
      1: "b",
      2: "c",
    });
  });
  test("creates new object from true with ['a', 'c'] paths omitted ,expected  to equal {}", () => {
    expect(_.omit(true, ["a", "c"])).toStrictEqual({});
  });
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with 0 paths omitted ,expected  to equal { 'a': 1, 'b': '2', 'c': 3 }", () => {
    expect(_.omit({ a: 1, b: "2", c: 3 }, 0)).toStrictEqual({
      a: 1,
      b: "2",
      c: 3,
    });
  });
});
