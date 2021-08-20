const _ = require("../../custom-lodash");
const { people } = require("../../utils/data");

describe("Test dropWhile method", () => {
  test("drops elements until one element from [1, 2, 3, 4] returns falsy for (o) => {return o != 3} , expected  to equal [ 3, 4 ]", () => {
    expect(
      _.dropWhile([1, 2, 3, 4], (o) => {
        return o != 3;
      })
    ).toStrictEqual([3, 4]);
  });
  test("drops elements until one element from people returns falsy for (o) => {return o.user} , expected  to equal []", () => {
    expect(
      _.dropWhile(people, (o) => {
        return o.user;
      })
    ).toStrictEqual([]);
  });
  test("drops elements until one element from people returns falsy for (o) => {return !o.active} , expected  to equal [ { user: 'pebbles', active: true },{ user: 'fred', active: true },{ user: 'mia', active: true } ]", () => {
    expect(
      _.dropWhile(people, (o) => {
        return !o.active;
      })
    ).toStrictEqual([
      { user: "pebbles", active: true },
      { user: "fred", active: true },
      { user: "mia", active: true },
    ]);
  });
  test("drops elements until one element from 'hello' returns falsy for (o) => {return o != 'l'}, expected  to equal [ 'l', 'l', 'o' ]", () => {
    expect(
      _.dropWhile("hello", (o) => {
        return o != "l";
      })
    ).toStrictEqual(["l", "l", "o"]);
  });
  test("drops elements until one element from 'hello' returns falsy for (item, index, collection) => {return collection.indexOf(item) !== 3 && index !== 3}, expected  to equal [ 'l', 'o' ]", () => {
    expect(
      _.dropWhile("hello", (item, index, collection) => {
        return collection.indexOf(item) !== 3 && index !== 3;
      })
    ).toStrictEqual(["l", "o"]);
  });
  test("drops elements until one element from 'hello' returns falsy for (item, index) => {return item != 'o' && index != 2;}, expected  to equal ['l', 'l', 'o' ]", () => {
    expect(
      _.dropWhile("hello", (item, index) => {
        return item != "o" && index != 2;
      })
    ).toStrictEqual(["l", "l", "o"]);
  });
});
