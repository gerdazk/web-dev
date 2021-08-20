const _ = require("../../custom-lodash");

describe("Test pick method", () => {
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with paths that match 'e' ,expected  to equal { e: -1 }", () => {
    expect(
      _.pick({ a: true, b: "20", c: 3, d: "hello", e: -1 }, "e")
    ).toStrictEqual({ e: -1 });
  });
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with paths that match ['e', 'b']  ,expected  to equal { e: -1, b: '20' }", () => {
    expect(
      _.pick({ a: true, b: "20", c: 3, d: "hello", e: -1 }, ["e", "b"])
    ).toStrictEqual({ e: -1, b: "20" });
  });
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with paths that match ['f', 'g'] ,expected  to equal {}", () => {
    expect(
      _.pick({ a: true, b: "20", c: 3, d: "hello", e: -1 }, ["f", "g"])
    ).toStrictEqual({});
  });
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with paths that match undefined ,expected  to equal {}", () => {
    expect(_.pick({ a: true, b: "20", c: 3, d: "hello", e: -1 })).toStrictEqual(
      {}
    );
  });
  test("creates new object from ['e', 5, 6, true] with paths that match ['e', 5, 6] ,expected  to equal {}", () => {
    expect(_.pick(["e", 5, 6, true], ["e", 5, 6])).toStrictEqual({});
  });
  test("creates new object from { 'a': undefined, 'b': '20', 'c': 3, 'd': 'hello', 'e': -1 } with paths that match 'a' ,expected  to equal { a: undefined }", () => {
    expect(
      _.pick({ a: undefined, b: "20", c: 3, d: "hello", e: -1 }, "a")
    ).toStrictEqual({ a: undefined });
  });
  test("creates new object from { 'a': true, 'b': '20', 'c': 3, 'd': 'hello', 5: -1 } with paths that match 5,expected  to equal { '5': -1 }", () => {
    expect(
      _.pick({ a: true, b: "20", c: 3, d: "hello", 5: -1 }, "5")
    ).toStrictEqual({ 5: -1 });
  });
});
