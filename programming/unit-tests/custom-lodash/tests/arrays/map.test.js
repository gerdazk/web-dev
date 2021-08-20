const _ = require("../../custom-lodash");
const { users, square } = require("../../utils/data");

describe("Test map method", () => {
  test("iterates over the elements of users and returns an array of elements that are returned for function(o) { return o.active; }, expected  to equal [ true, false ]", () => {
    expect(
      _.map(users, (o) => {
        return o.active;
      })
    ).toStrictEqual([true, false]);
  });
  test("iterates over the elements of [1, 2, 3, 4] and returns an array of elements that are returned for function square, expected  to equal [ 1, 4, 9, 16 ]", () => {
    expect(_.map([1, 2, 3, 4], square)).toStrictEqual([1, 4, 9, 16]);
  });
  test("iterates over the elements of [1, 2, 3, 4, 'hello'] and returns an array of elements that are returned for function square, expected  to equal [ 1, 4, 9, 16, NaN ]", () => {
    expect(_.map([1, 2, 3, 4, "hello"], square)).toStrictEqual([
      1,
      4,
      9,
      16,
      NaN,
    ]);
  });
  test("iterates over the elements of users and returns an array of elements that are returned for 'user' expected  to equal [ 'barney', 'fred' ]", () => {
    expect(_.map(users, "user")).toStrictEqual(["barney", "fred"]);
  });
  test("iterates over the elements of users and returns an array of elements that are returned for 5, expected  to equal [ undefined, undefined ]", () => {
    expect(_.map(users, 5)).toStrictEqual([undefined, undefined]);
  });
  test("iterates over the elements of 'hello' and returns an array of elements that are returned for function(o) { return o; }, expected  to equal [ 'h', 'e', 'l', 'l', 'o' ]", () => {
    expect(
      _.map("hello", (o) => {
        return o;
      })
    ).toStrictEqual(["h", "e", "l", "l", "o"]);
  });
  test("iterates over the elements of 'hello' and returns an array of elements that are returned for function(o) { return o + '1'; }, expected  to equal [ 'h1', 'e1', 'l1', 'l1', 'o1' ]", () => {
    expect(
      _.map("hello", (o) => {
        return o + "1";
      })
    ).toStrictEqual(["h1", "e1", "l1", "l1", "o1"]);
  });
  test("iterates over the elements of [1, 2, 3, 4] and returns an array of elements that are returned for function (item, i) => {return item + i}, expected  to equal [1, 3, 5, 7]", () => {
    expect(
      _.map([1, 2, 3, 4], (item, i) => {
        return item + i;
      })
    ).toStrictEqual([1, 3, 5, 7]);
  });
  test("iterates over the elements of [1, 2, 3, 4] and returns an array of elements that are returned for function (item, i, collection) => {return collection[i] * item}, expected  to equal [1, 4, 9, 16]", () => {
    expect(
      _.map([1, 2, 3, 4], (item, i, collection) => {
        return collection[i] * item;
      })
    ).toStrictEqual([1, 4, 9, 16]);
  });
  test("iterates over the elements of '5' and returns an array of elements that are returned for 5, expected  to equal []", () => {
    expect(_.map('5', 5)).toStrictEqual([]);
  });
});
