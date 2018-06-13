'use strict';

const greet = module.exports = {};
greet.hi = (name) => {
  try {
    if (name === '' || typeof name !== 'string') {
      throw new Error('Name must be a string or not empty');
    }
    return `Hello ${name}`;
  } catch (err) {}
};

