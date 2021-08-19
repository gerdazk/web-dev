const chunk = require("./arrays/chunk");
const compact = require("./arrays/compact");
const drop = require("./arrays/drop");
const dropWhile = require("./arrays/dropWhile");
const filter = require("./arrays/filter");
const find = require("./arrays/find");
const includes = require("./arrays/includes");
const map = require("./arrays/map");
const take = require("./arrays/take");
const zip = require("./arrays/zip");
const merge = require("./objects/merge");
const omit = require("./objects/omit");
const omitBy = require("./objects/omitBy");
const pick = require("./objects/pick");
const pickBy = require("./objects/pickBy");
const toPairs = require("./objects/toPairs");

module.exports = {
  chunk,
  compact,
  drop,
  take,
  includes,
  zip,
  omit,
  pick,
  filter,
  map,
  omitBy,
  find,
  pickBy,
  toPairs,
  merge,
  dropWhile,
};

