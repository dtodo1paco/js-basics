'use strict';

//
// A
//
const tail = arr => {
  if (Array.isArray(arr)) {
    return arr.slice(1);
  }
  return null;
}

//
// B
//
const capitalize = aString => {
  if (typeof aString === 'string' || aString instanceof String) {
    return `${aString.charAt(0).toUpperCase()}${aString.slice(1)}`;
  }
  return '';
}
const capitalizeArray = arrayOfStrings => {
  if (Array.isArray(arrayOfStrings)) {
    return arrayOfStrings.map( str => capitalize(str));
  }
  return null;
}


//
// C
//
const join = arrayOfStrings => {
  if (Array.isArray(arrayOfStrings)) return arrayOfStrings.join('');
  return null;
}

//
// D
//
const asyncFunc = (cb) => {
  setTimeout( () => cb(null, "async executed"), 0);
};
const sum = (a,b) => a+b;
const sumAsync = (a,b) => {
  return new Promise(
    resolve => {
      setTimeout(() => resolve(sum(a,b)), 0)
    }
  );
}

//
// E
//
const Promify = fn => (...args) => new Promise((resolve, reject) => {
  const ar = {...args};
  fn(...args, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});


/////////////////////////////
// TEST CASES FOR tail
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = null;
const arr3 = undefined;
const testTail = [arr1, arr2, arr3];

testTail.forEach( test => {
  console.log("tail ["+test+"]: " + tail(test));
});

/////////////////////////////
// TEST CASES FOR capitalize
const capitalize1 = ["one", "TWO", "thRee", "four"];
const capitalize2 = [];
const capitalize3 = undefined;
const testCapitalize = [capitalize1, capitalize2, capitalize3];
testCapitalize.forEach( test => {
  console.log("capitalize ["+test+"]: " + capitalizeArray(test));
});


/////////////////////////////
// TEST CASES FOR join
const join1 = ["one", "TWO", "thRee", "four"];
const join2 = [];
const join3 = undefined;
const testJoin = [join1, join2, join3];
testJoin.forEach( test => {
  console.log("join ["+test+"]: " + join(test));
});

/////////////////////////////
// Sum
console.log("sum " + sum(1,3));
// Sum Async
sumAsync(1,3).then(result => console.log("sumAsync " +  result));
// Async Promyifyed
const testSumAsync = Promify(asyncFunc);
testSumAsync()
  .then(result => console.log("sumPromyfied " +  result))
  .catch( err => console.log("err: " + err));

console.log("-- Done --");
