const _ = require("../../custom-lodash");
const { users } = require("../../utils/data");

describe("Test pickBy method", () => {
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that returns truthy for function(value, key) { return key !== 'a'; } ,expected  to equal { b: '2', c: 3 }", () => {
    expect(
      _.pickBy({ a: 1, b: "2", c: 3 }, (value, key) => {
        return key !== "a";
      })
    ).toStrictEqual({ b: "2", c: 3 });
  });
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that returns truthy for function(value, key) { return key !== 'a' && value !== 3; } ,expected  to equal { b: '2'}", () => {
    expect(
      _.pickBy({ a: 1, b: "2", c: 3 }, (value, key) => {
        return key !== "a" && value !== 3;
      })
    ).toStrictEqual({ b: "2" });
  });
  test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that returns truthy for function(value, key) { return value > 2; } ,expected  to equal { c: 3 }", () => {
    expect(
      _.pickBy({ a: 1, b: "2", c: 3 }, (value, key) => {
        return value > 2;
      })
    ).toStrictEqual({ c: 3 });
  });
  test("creates new object from users with properties that returns truthy for function(value) { return value.age === 40 } ,expected  to equal { '1': { user: 'fred', age: 40, active: false } }", () => {
    expect(
      _.pickBy(users, (value) => {
        return value.age === 40;
      })
    ).toStrictEqual({ 1: { user: "fred", age: 40, active: false } });
  });
  test("creates new object from 'hello' with properties that returns truthy for function(value) { return value} ,expected  to equal { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }", () => {
    expect(
      _.pickBy("hello", (value) => {
        return value;
      })
    ).toStrictEqual({ 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" });
  });
  test("creates new object from 345 with properties that returns truthy for function(value) { return value} ,expected  to equal {}", () => {
    expect(
      _.pickBy(345, (value) => {
        return value;
      })
    ).toStrictEqual({});
  });
  test("creates new object from [1, 2, 3, 4, 5] with properties that returns truthy for function(value) { return value === 3} ,expected  to equal { '2': 3 }", () => {
    expect(
      _.pickBy([1, 2, 3, 4, 5], (value) => {
        return value === 3;
      })
    ).toStrictEqual({ 2: 3 });
  });
});
