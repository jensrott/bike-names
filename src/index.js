import uniqueRandomArray from 'unique-random-array';

import bikesNames from './bike-names.json';

module.exports = {
  all: bikesNames,
  random: uniqueRandomArray(bikesNames),
};
