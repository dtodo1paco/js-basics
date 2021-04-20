function sayHi1() {
  console.log(name); // 'undefined'
  var name = 'Mark'; // name is defined at first, look at sayHi2
}

function sayHi2() {
  var name = undefined;
  console.log(name); // 'undefined'
  name = 'Mark';
}

function sayHi3() {
  console.log(name); // 'ReferenceError' (name does not exists)
  let name = 'Mark';
}

// sayHi1 and sayHi2 are the same
sayHi1();
sayHi2();



