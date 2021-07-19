const task1 = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

const fruits = {};
task1.forEach( fruitName => {
  const nameCapitalized = fruitName.charAt(0).toUpperCase() + fruitName.slice(1)
  if (!fruits[nameCapitalized]) fruits[nameCapitalized] = 1;
  else fruits[nameCapitalized] = fruits[nameCapitalized] + 1;
})
console.log(fruits);

const fruits2 = {
  "Apple": 0,
  "Pear": 0,
  "Lemon": 0,
  "Orange": 0,
  "Pineapple": 0,
  "Tomato": 0,
  "Mango": 0,
  "Banana": 0,
};
task1.forEach( fruitName => {
  const nameCapitalized = fruitName.charAt(0).toUpperCase() + fruitName.slice(1)
  if (fruits2.hasOwnProperty(nameCapitalized)) fruits2[nameCapitalized] = fruits2[nameCapitalized] + 1;
})
console.log(fruits2);
