'use strict';

const sum = require('./../src/lib/arithmetic');

describe('testing #sum', () => {
  describe('testing #sum', () => {
    test('greet.hi should return sum, () => {
      expect(sum('World')).toEqual(sum);
    });

    test('should return null, () => {
      expect(sum('')).isNAN();
      expect(sum()).isNAN();
    });
  });
});
