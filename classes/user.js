
class User {
  // properties
  name;
  lastName;
  fullName;
  birthday;
  bankTotal;

  // constructor
  constructor(_name, _lastName) {
    this.name = _name;
    this.lastName = _lastName;
    this.fullName = `${_name} - ${_lastName}`;
  }

  // methods
  getAge() {
    // something smart
  };

}


const user1 = new User('juan', 'perez'); // class instance === object
console.log(user1.fullName) // juan - perez
const user3 = new User('juan', 'perez');
console.log("user1 is 3equal to user3 -> ", user1 === user3);
console.log("user1 is 2equal to user3 -> ", user1 == user3);
// they will NEVER be equal, cause they are different objects
// no matter the values the hold inside

// we can compare properties to decide if they are equal
console.log("user1.name is 3equal to user3.name -> ", user1.name === user3.name);
user1.bankTotal = 10;
user3.bankTotal = 20;
console.log("user1.bankTotal is 3equal to user3.bankTotal -> ", user1.bankTotal === user3.bankTotal);

// custom build of user object
const user2 = {
  name : undefined,
  lastName : undefined,
  birthday : undefined,
  bankTotal: undefined,
  getAge : function() {},
}

// or we can create a function to build Users (kind of constructor)
function MyUser(_name, _lastName) {
  this.name = _name;
  this.lastName = _lastName;
  this.fullName = `${_name} - ${_lastName}`;
}
// using the builder to build a user
const user10 = new MyUser('juan', 'perez');
// and they are still different even with the same values
console.log("user1 is 3equal to user10 -> ", user1 === user10);
console.log("user1 is 2equal to user10 -> ", user1 == user10);


// creating a static array of users
let array1 = [
  new User('juan','perez'),
  new User('laura','ochoa')
];

// creating an empty array of users
let array2 = [];
// filling the array with some users
for (let i = 1; i < 5; i = i + 1) {
  const myNewFancyUser = new User(`pepe${i}`, `garcia`);
  array2.push(myNewFancyUser);
}

console.log("array2 of users", array2);

/**
 * Memory map
 * a :: 7
 * b :: 8
 * c :: 9
 * sum :: [code(a,b)]
 * res :: 9
 * User :: [code]
 * user1 :: { name: 'juan'', lastName: undefined, birthday: undefined, getAge: [code] }
 * user3 :: { name: 'pepe', lastName: undefined, birthday: undefined, getAge: [code] }
 * user2 :: { name: undefined, lastName: undefined, birthday: undefined, getAge: [code] }
 */



