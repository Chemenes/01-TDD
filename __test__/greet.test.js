'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
  describe('testing #greet', () => {
    test('greet should return Hello World', () => {
      expect(greet('World')).toEqual('Hello World');
    });

    test('testing #greet returns null when supplying non-string values', () => {
      expect(greet(123)).toBeNull();
      expect(greet(null)).toBeNull();
      expect(greet({})).toBeNull();
      
    });
  });