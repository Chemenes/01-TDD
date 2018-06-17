'use strict';

const sum = require('./../src/lib/arithmetic');

describe('testing #sum', () => {
  describe('testing #sum.add', () => {
    test('testing #sum.add should return sum', () => {
      expect(sum.add(1, 2)).toEqual(sum);
    });

    test('testing #sum.add non-number should return null', () => {
      expect(sum.add({}, null)).toEqual(null);
      expect(sum.add(1)).toEqual(null);
      expect(sum.add(null, 1)).toEqual(null);
      expect(sum.add(1, null)).toEqual(null);
      expect(sum.add(null)).toEqual(null);
      expect(sum.add(1, {})).toEqual(null);
    });
  });

  describe('testing #sum.sub', () => {
    test('testing #sum.sub should return sum', () => {
      expect(sum.sub(1, 2)).toEqual(1);
    });
    test('testing #sum.sub non-number should return null', () => {
      expect(sum.sub({}, null)).toEqual(null);
      expect(sum.sub(1)).toEqual(null);
      expect(sum.sub(null, 1)).toEqual(null);
      expect(sum.sub(1, null)).toEqual(null);
      expect(sum.sub(null)).toEqual(null);
      expect(sum.sub(1, {})).toEqual(null);
    });
  });
});
