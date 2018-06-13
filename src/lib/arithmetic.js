'use strict';

const arr = [2, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  if (sum === isNAN) {
    throw new Error('Num must be a number');
  } else {
    return sum;
  }
}
