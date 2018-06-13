'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
  describe('testing #greet.hi', () => {
    test('greet.hi should return Hello World', () => {
      expect(greet.hi('World')).toEqual('Hello World');
    });

    test('should return -1 in case of no input', () => {
      expect(greet.hi('')).toEqual(-1);
      expect(greet.hi()).toEqual(-1);
    });
  });
});
