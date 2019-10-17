"use strict";

var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));

var _bikeNames = _interopRequireDefault(require("./bike-names.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  all: _bikeNames["default"],
  random: (0, _uniqueRandomArray["default"])(_bikeNames["default"])
};