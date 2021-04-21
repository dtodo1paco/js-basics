/////////////////////////////////////////////////////
// Block 1: Build a Employee builder with the following properties
// - title:string
// - performance: 2 decimal number between 0 and 1
// - salary: number 
// Create a random number from 3 to 10 employees using this builder
// Make some helpers for random stuff

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function EmployeeBuilder(title, performance, salary) {
  this.title = title;
  this.performance = performance;
  this.salary = salary;
  // Hint. We can use this in here because we are in a function. What about using it in a method?
}

const employees = [];
const numberOfEmployees = getRandomInt(3,10);
for (i = 0; i < numberOfEmployees; i++) {
  const title = `Employee ${i+1}`;
  const performance = Math.random().toFixed(2);
  const salary = getRandomInt(1000,3000);
  const newEmployee = new EmployeeBuilder(title, performance, salary);
  employees.push(newEmployee);
}
console.log(`Employees generated`, employees);

/////////////////////////////////////////////////////
// Block 2 - Sort by performance using external function
function sortByPerformance(emp1, emp2) {
  return emp1.performance - emp2.performance;
}
employees.sort(sortByPerformance);
console.log(`Employees ordered by performance`, employees);

/////////////////////////////////////////////////////
// Block 3 - Sort by salary using anonymous function and arrow function
employees.sort(function(emp1, emp2) {
  return emp1.salary - emp2.salary;
});
employees.sort((emp1, emp2) => {
  return emp1.salary - emp2.salary;
});
employees.sort((emp1, emp2) => emp1.salary - emp2.salary);
console.log(`Employees ordered by salary`, employees);


/////////////////////////////////////////////////////
// Block 4 - Filter those which salary is over 2500
const richEmployees = employees
  .filter(emp => emp.salary > 2500)
// Addenda: use a named function with the minimum salary to filter "filterSalaryOver(minSalary){}"
console.log(`Employees with higher salary`, richEmployees);

/////////////////////////////////////////////////////
// Block 5 - Increase in 10% the salary of those under 2000
employees
  .filter(emp => emp.salary < 2000)
  .forEach( emp => emp.salary = emp.salary + emp.salary * 0.10)
console.log(`Poorest employees with increased salary`, employees);

/////////////////////////////////////////////////////
// Block 6 - Transform the title of each employee with `Senior` prefix
employees.map( emp => emp.title = `Senior ${emp.title}`);
console.log(`Employees with new title `, employees);

/////////////////////////////////////////////////////
// Block 7 - Get the total amount of salaries for the company (each salary must be increased by 15% by taxes)
const totalAmount = employees.reduce(
  (total, emp) => {
    total = total + emp.salary * 1.15
    return total;
  },
  0 // initial value is 0
);
console.log(`Total cost for the company `, totalAmount);


/////////////////////////////////////////////////////
// Block 8 - Find the following data:
// - employees under performance of 0.4
// - average salary of all the employees
// - increase salary for most performant employees (>0.85)
const lowerPerformantEmployees = employees.filter(emp => emp.performance < 0.4);
console.log(`Lower performant employees `, lowerPerformantEmployees);
const sumSalary = employees.reduce((total,emp) => total + emp.salary,0);
const averageSalary = (sumSalary / employees.length).toFixed(2);
console.log(`Average salary `, averageSalary);

const rewardedEmployees = employees.map(emp => {
  if(emp.performance > 0.8) {
    emp.salary = emp.salary * 1.25;
  }
  return emp;
}); // Improve me !!! 
console.log(`Employees after rewards `, rewardedEmployees);
// Addenda: Improve the performance to get those last 3 data by reducing the amount of iterations over the loop


// Addenda: create a method and add it to each employee to update the salary with the following criteria:
// - salary for employees with performance under 0.2 must be reduced by 5%
// - salary for employees with performance over 0.6 but under 0.85 must be increased by 10%
// - salary for employees with performance over 0.85 must be increased by 15%