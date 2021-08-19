const _ = require("../../custom-lodash")

describe("Test merge method", () => {
    test("Recursively merges own and inherited enumerable string keyed properties of {'a': [{ 'b': 2 }, { 'd': 4 }]} and {'a': [{ 'c': 3 }, { 'e': 5 }]} into the destination object , expected  to equal { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }", () => {
      expect(
        _.merge({ 'a': [{ 'b': 2 }, { 'd': 4 }] }, { 'a': [{ 'c': 3 }, { 'e': 5 }] })
      ).toStrictEqual({
        'a': [
          { 'b': 2, 'c': 3 },
          { 'd': 4, 'e': 5 },
        ],
      });
    });
    test("Recursively merges own and inherited enumerable string keyed properties of {'a': [{ 'b': 2 }, { 'd': 4 }]} and {'a': [{ 'c': 3 }, { 'e': 5 }]} and {'a': [{ 'e': 3 }, { 'f': 5 }]} into the destination object , expected  to equal { 'a': [ { 'b': 2, 'c': 3, 'e': 3 }, { 'd': 4, 'e': 5, 'f': 5 } ] }", () => {
      expect(
        _.merge(
          { 'a': [{ 'b': 2 }, { 'd': 4 }] },
          { 'a': [{ 'c': 3 }, { 'e': 5 }] },
          { 'a': [{ 'e': 3 }, { 'f': 5 }] }
        )
      ).toStrictEqual({
        'a': [
          { 'b': 2, 'c': 3, 'e': 3 },
          { 'd': 4, 'e': 5, 'f': 5 },
        ],
      });
    });
    test("Recursively merges own and inherited enumerable string keyed properties of {'a': [{ 'b': 2 }, { 'd': 4 }]} and {'b': [{ 'c': 3 }, { 'e': 5 }]} into the destination object , expected  to equal { 'a': [ { 'b': 2 }, { 'd': 4 } ], 'b': [ { 'c': 3 }, { 'e': 5 } ] }", () => {
      expect(
        _.merge({ 'a': [{ 'b': 2 }, { 'd': 4 }] }, { 'b': [{ 'c': 3 }, { 'e': 5 }] })
      ).toStrictEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }], 'b': [{ 'c': 3 }, { 'e': 5 }] });
    });
    test("Recursively merges own and inherited enumerable string keyed properties of { 'a': [{ 'b': 2 }, { 'd': 4 }] }, { 'b': [{ 'c': 3 }, { 'e': 5 }] }, { 'c': [{ 'c': 3 }, { 'e': 5 }] } into the destination object , expected  to equal { 'a': [ { 'b': 2 }, { 'd': 4 } ],'b': [ { 'c': 3 }, { 'e': 5 } ],'c': [ { 'c': 3 }, { 'e': 5 } ] }", () => {
      expect(
        _.merge({ 'a': [{ 'b': 2 }, { 'd': 4 }] }, { 'b': [{ 'c': 3 }, { 'e': 5 }] }, { 'c': [{ 'c': 3 }, { 'e': 5 }] })
      ).toStrictEqual({ 'a': [ { 'b': 2 }, { 'd': 4 } ],
        'b': [ { 'c': 3 }, { 'e': 5 } ],
        'c': [ { 'c': 3 }, { 'e': 5 } ] });
    });
    test("Recursively merges own and inherited enumerable string keyed properties of { 'a': [{ 'b': 2 }, { 'd': 4 }, {'f': 6}] }, { 'b': [{ 'c': 3 }, { 'e': 5 }, { 'g': 7}] } into the destination object , expected  to equal { 'a': [ { 'b': 2 }, { 'd': 4 }, { 'f': 6 } ] 'b': [ { 'c': 3 }, { 'e': 5 }, { 'g': 7 } ] }", () => {
      expect(
        _.merge({ 'a': [{ 'b': 2 }, { 'd': 4 }, {'f': 6}] }, { 'b': [{ 'c': 3 }, { 'e': 5 }, { 'g': 7}] })
      ).toStrictEqual({ 'a': [ { 'b': 2 }, { 'd': 4 }, { 'f': 6 } ],
        'b': [ { 'c': 3 }, { 'e': 5 }, { 'g': 7 } ] });
    });
  });