const _ = require("../../custom-lodash");
const { people } = require("../../utils/data");

describe("Test toPairs method", () => {
  test("creates an array from key-value pairs of { 'a': 1, 'b': '2', 'c': 3 } ,expected  to equal [ [ 'a', 1 ], [ 'b', '2' ], [ 'c', 3 ] ]", () => {
    expect(_.toPairs({ a: 1, b: "2", c: 3 })).toStrictEqual([
      ["a", 1],
      ["b", "2"],
      ["c", 3],
    ]);
  });
  test("creates an array from key-value pairs of people ,expected  to equal [ [ '0', { user: 'barney', active: false } ],[ '1', { user: 'fred', active: false } ],[ '2', { user: 'pebbles', active: true } ],[ '3', { user: 'fred', active: true } ],[ '4', { user: 'mia', active: true } ] ]", () => {
    expect(_.toPairs(people)).toStrictEqual([
      ["0", { user: "barney", active: false }],
      ["1", { user: "fred", active: false }],
      ["2", { user: "pebbles", active: true }],
      ["3", { user: "fred", active: true }],
      ["4", { user: "mia", active: true }],
    ]);
  });
  test("creates an array from key-value pairs of { a: 1, b: '2', c: 3 }, {d: '4'} ,expected  to equal [ [ 'a', 1 ], [ 'b', '2' ], [ 'c', 3 ] ]", () => {
    expect(_.toPairs({ a: 1, b: "2", c: 3 }, { d: "4" })).toStrictEqual([
      ["a", 1],
      ["b", "2"],
      ["c", 3],
    ]);
  });
  test("creates an array from key-value pairs of [1, 2, 3, 4] ,expected  to equal [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', 4 ] ]", () => {
    expect(_.toPairs([1, 2, 3, 4])).toStrictEqual([
      ["0", 1],
      ["1", 2],
      ["2", 3],
      ["3", 4],
    ]);
  });
  test("creates an array from key-value pairs of 56777 ,expected  to equal []", () => {
    expect(_.toPairs(56777)).toStrictEqual([]);
  });
  test("creates an array from key-value pairs of '56777' ,expected  to equal [ [ '0', '5' ],[ '1', '6' ],[ '2', '7' ],[ '3', '7' ],[ '4', '7' ] ]", () => {
    expect(_.toPairs("56777")).toStrictEqual([
      ["0", "5"],
      ["1", "6"],
      ["2", "7"],
      ["3", "7"],
      ["4", "7"],
    ]);
  });
});
