'use strict';


// Complete the oddNumbers function below.
function oddNumbers(l, r) {
  const numbers = [];
  if (l > 0 && l <= r) {
    for (let i = l; i<=r; i++) {
      if (i % 2 === 1) numbers.push(i);
    }
  }
  return numbers;
}

console.log("oddNumbers: " + oddNumbers(3,9));