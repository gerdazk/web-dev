const _ = require("../../custom-lodash");
const { users } = require("../../utils/data");

describe("Test filter method", () => {
  test("iterates over the elements of [1, 2, 3, 'hello', null, true] and returns an array of elements that return truthy for (o) => {return typeof o !== 'number';}, expected  to equal ['hello', null, true]", () => {
    expect(
      _.filter([1, 2, 3, "hello", null, true], (o) => {
        return typeof o !== "number";
      })
    ).toStrictEqual(["hello", null, true]);
  });
  test("iterates over the elements of [[1, 2, 3], [2, 4, 55], [3, 6, 9]] and returns an array of elements that return truthy for (o) => {return o.includes(2)}, expected  to equal [[1, 2, 3], [2, 4, 55]]", () => {
    expect(
      _.filter(
        [
          [1, 2, 3],
          [2, 4, 55],
          [3, 6, 9],
        ],
        (o) => {
          return o.includes(2);
        }
      )
    ).toStrictEqual([
      [1, 2, 3],
      [2, 4, 55],
    ]);
  });
  test("iterates over the elements of [1, 2, 3] and returns an array of elements that return truthy for 3, expected  to equal []", () => {
    expect(_.filter([1, 2, 3], 3)).toStrictEqual([]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for function(o) { return !o.active; }, expected  to equal [ { user: 'fred', age: 40, active: false } ]", () => {
    expect(
      _.filter(users, (o) => {
        return !o.active;
      })
    ).toStrictEqual([{ user: "fred", age: 40, active: false }]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for 'active', expected  to equal [ { user: 'barney', age: 36, active: true } ]", () => {
    expect(_.filter(users, "active")).toStrictEqual([
      { user: "barney", age: 36, active: true },
    ]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for 'age', expected  to equal [ { user: 'barney', age: 36, active: true },{ user: 'fred', age: 40, active: false } ]", () => {
    expect(_.filter(users, "age")).toStrictEqual([
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for function(o) { return o.user; }, expected  to equal [ { user: 'barney', age: 36, active: true },{ user: 'fred', age: 40, active: false } ]", () => {
    expect(
      _.filter(users, (o) => {
        return o.user;
      })
    ).toStrictEqual([
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for true, expected  to equal []", () => {
    expect(_.filter(users, true)).toStrictEqual([]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for users, (o) => {return o.user.includes('b');}, expected  to equal [ { user: 'barney', age: 36, active: true }]", () => {
    expect(
      _.filter(users, (o) => {
        return o.user.includes("b");
      })
    ).toStrictEqual([{ user: "barney", age: 36, active: true }]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for (user, index, collection) => {return collection.indexOf(user) === 1;}, expected  to equal [ { user: 'fred', age: 40, active: false }]", () => {
    expect(
      _.filter(users, (user, index, collection) => {
        return collection.indexOf(user) === 1;
      })
    ).toStrictEqual([{ user: "fred", age: 40, active: false }]);
  });
  test("iterates over the elements of users and returns an array of elements that return truthy for (user, index) => {return index === 1 && user.user.includes('f');}, expected  to equal [ { user: 'fred', age: 40, active: false }]", () => {
    expect(
      _.filter(users, (user, index) => {
        return index === 1 && user.user.includes("f");
      })
    ).toStrictEqual([{ user: "fred", age: 40, active: false }]);
  });
});
