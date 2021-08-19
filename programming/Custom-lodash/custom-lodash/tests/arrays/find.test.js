const _ = require("../../custom-lodash");
const { users } = require("../../utils/data");

describe("Test find method", () => {
  test("returns first element from users that returns truthy for (o) => { return o.age < 40; } , expected  to equal [ { user: 'fred', age: 40, active: false } ]", () => {
    expect(
      _.find(users, (o) => {
        return o.age < 40;
      })
    ).toStrictEqual({ user: "barney", age: 36, active: true });
  });

  test("returns first element from users that returns truthy for (o) => {return  !o.active} , expected  to equal { user: 'fred', age: 40, active: false }", () => {
    expect(
      _.find(users, (o) => {
        return !o.active;
      })
    ).toStrictEqual({ user: "fred", age: 40, active: false });
  });
  test("returns first element from [1, 2, 3, 4, 5] that returns truthy for (o) => {o > 3} , expected  to equal 4", () => {
    expect(
      _.find([1, 2, 3, 4, 5], (o) => {
        return o > 3;
      })
    ).toStrictEqual(4);
  });
  test("returns first element from [1, 2, 3, 4, '5', '6', 7] that returns truthy for (o) => {return typeof o === 'string'} , expected  to equal '5", () => {
    expect(
      _.find([1, 2, 3, 4, "5", "6", 7], (o) => {
        return typeof o === "string";
      })
    ).toStrictEqual("5");
  });
  test("returns first element from [1, 2, 3, 4, '5', '6', 7] that returns truthy for (o) => {return typeof o === 'object'} , expected  to be undefined", () => {
    expect(
      _.find([1, 2, 3, 4, "5", "6", 7], (o) => {
        return typeof o === "object";
      })
    ).toBeUndefined();
  });
  test("returns first element from 'hello' that returns truthy for (o) => {return ['e', 'k', 'g'].includes(o)} , expected  to equal 'e'", () => {
    expect(
      _.find("hello", (o) => {
        return ["e", "k", "g"].includes(o);
      })
    ).toStrictEqual("e");
  });
  test("returns first element from 5748839 that returns truthy for (o) => {return o} , expected  to be undefined", () => {
    expect(
      _.find(5748839, (o) => {
        return o;
      })
    ).toBeUndefined();
  });
});
