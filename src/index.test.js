import bikeNames from './index';

describe('bike-names', () => {
  test('It exists', () => {
    expect(bikeNames.all).toBeDefined();
  });
});


describe('random', () => {
  test('It exists', () => {
    expect(bikeNames.random()).toBeDefined();
  });

  test('Should return a random item from the bikeNames.all', () => {
    const randomItem = bikeNames.random();
    expect(bikeNames.all).toContain(randomItem);
  });
});
