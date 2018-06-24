'use strict';

const arithmetic = require('./../src/lib/arithmetic');


describe('testing #arithmetic.add', () => {
  test('testing #arithmetic.add should return sum', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
    expect(arithmetic.add({}, null)).toEqual(null);
  });
  

  describe('testing #arithmetic.sub', () => {
    test('testing #arithmetic.sub should return sum', () => {
      expect(arithmetic.sub(1, 2)).toEqual(1);
      expect(arithmetic.sub({}, null)).toEqual(null);
    });
  });
});

