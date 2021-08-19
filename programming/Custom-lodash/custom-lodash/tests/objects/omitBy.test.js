const _ = require("../../custom-lodash")
const {users} = require("../../utils/data")

describe("Test omitBy method", () => {
    test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that don't return truthy for function(value, key) { return key === 'a'; } ,expected  to equal { b: '2', c: 3 }", () => {
      expect(
        _.omitBy({ 'a': 1, b: "2", c: 3 }, (value, key) => {
          return key === "a";
        })
      ).toStrictEqual({ b: "2", c: 3 });
    });
    test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that don't return truthy for function(value, key) { return value >= 2; } ,expected  to equal { a: 1 }", () => {
      expect(
        _.omitBy({ a: 1, b: "2", c: 3 },(value, key) => {
          return value >= 2;
        })
      ).toStrictEqual({ a: 1 });
    });
    test("creates new object from { 'a': 1, 'b': '2', 'c': 3 } with properties that don't return truthy for function(value, key) { return value} ,expected  to equal {}", () => {
      expect(
        _.omitBy({ a: 1, b: "2", c: 3 }, (value, key) => {
          return value;
        })
      ).toStrictEqual({});
    });
    test("creates new object from users with properties that don't return truthy for function(value, key) { return value.age === 40 } ,expected  to equal { '0': { user: 'barney', age: 36, active: true } }", () => {
      expect(
        _.omitBy(users, (value, key) => {
          return value.age === 40;
        })
      ).toStrictEqual({ 0: { user: "barney", age: 36, active: true } });
    });
    test("creates new object from 'hello' with properties that don't return truthy for function(value, key) { return !value} ,expected  to equal { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }", () => {
      expect(
        _.omitBy("hello", (value, key) => {
          return !value;
        })
      ).toStrictEqual({ 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" });
    });
    test("creates new object from 345 with properties that don't return truthy for function(value, key) { return !value} ,expected  to equal {}", () => {
      expect(
        _.omitBy(345, (value, key) => {
          return !value;
        })
      ).toStrictEqual({});
    });
    // test("creates new object from [1, 2, 3, 4, 5] with properties that don't return truthy for function(value, key) { return key === 5} ,expected  to equal { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }", () => {
    //   expect(_.omitBy([1, 2, 3, 4, 5], function(value, key) { return key === 5})).toStrictEqual({ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 });
    // });
  });