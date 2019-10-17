"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('bike-names', function () {
  test('It exists', function () {
    expect(_index["default"].all).toBeDefined();
  });
});
describe('random', function () {
  test('It exists', function () {
    expect(_index["default"].random()).toBeDefined();
  });
  test('Should return a random item from the bikeNames.all', function () {
    var randomItem = _index["default"].random();

    expect(_index["default"].all).toContain(randomItem);
  });
});