const _ = require("../../custom-lodash");

describe("Test chunk method", () => {
  test("splits ['a', 'b', 'c', 'd'] into groups the length of 2, expected  to equal [['a', 'b'], ['c', 'd']]", () => {
    expect(_.chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  test("splits ['a', 'b', 'c', 'd'] into groups the length of 3, expected  to equal [['a', 'b', 'c'], ['d']]", () => {
    expect(_.chunk(["a", "b", "c", "d"], 3)).toStrictEqual([
      ["a", "b", "c"],
      ["d"],
    ]);
  });

  test("splits ['a', 'b', 'c', 'd'] into groups the length of undefined, expected  to equal [['a'], ['b'], ['c'], ['d']]", () => {
    expect(_.chunk(["a", "b", "c", "d"])).toStrictEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"],
    ]);
  });

  test("splits ['a', 'b', 'c', 'd'] into groups the length of 'hello', expected  to equal []", () => {
    expect(_.chunk(["a", "b", "c", "d"], "hello")).toStrictEqual([]);
  });

  test("splits ['a', 'b', 'c', 'd'] into groups the length of 5, expected  to equal [['a', 'b', 'c', 'd']]", () => {
    expect(_.chunk(["a", "b", "c", "d"], 5)).toStrictEqual([
      ["a", "b", "c", "d"],
    ]);
  });

  test("splits 'hello' into groups the length of 2, expected  to equal [ [ 'h', 'e' ], [ 'l', 'l' ], [ 'o' ] ]", () => {
    expect(_.chunk("hello", 2)).toStrictEqual([["h", "e"], ["l", "l"], ["o"]]);
  });
  test("splits ['a', 'b', 'c', 'd'] into groups the length of true, expected  to equal [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ] ]", () => {
    expect(_.chunk(["a", "b", "c", "d"], true)).toStrictEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"],
    ]);
  });

  test("splits ['a', 'b', 'c', 'd'] into groups the length of { a: 2 }, expected  to equal []", () => {
    expect(_.chunk(["a", "b", "c", "d"], { a: 2 })).toStrictEqual([]);
  });
  test("splits ['a', 'b', 'c', 'd'] into groups the length of 0, expected  to equal []", () => {
    expect(_.chunk(["a", "b", "c", "d"], 0)).toStrictEqual([]);
  });
  test("splits {'a': 5, 'b': 4} into groups the length of 1, expected  to equal []", () => {
    expect(_.chunk({ a: 5, b: 4 }, 1)).toStrictEqual([]);
  });
  test("splits 564333 into groups the length of 1, expected  to equal []", () => {
    expect(_.chunk(564333, 1)).toStrictEqual([]);
  });
});
