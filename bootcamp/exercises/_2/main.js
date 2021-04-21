/////////////////////////////////////////////////////
// Block 1: Create a User builder to build a User instance
function User(name, firstLastName, secondLastName, email, age, city, productsCounter) {
  this.name = name;
  this.firstLastName = firstLastName;
  this.secondLastName = secondLastName;
  this.email = email;
  this.age = age;
  this.city = city;
  this.productsCounter = productsCounter;
  this.incrementProducts = function () {
    this.productsCounter++;
  },
  this.emptyProducts = function () {
    this.productsCounter = 0;
  }
}

// Addenda: make the builder more robust. If productsCounter is not 
// set, assign 0
// Hint: check the value received as argument. You can use the Or assignment operator (||=)

// Addenda: check the uniqueness of email value. We cannot have 2 users with the same email.
// Hint: You can save the used emails values in an array and check during user creation 
// (you must throw an error if repeated)


/////////////////////////////////////////////////////
// Block 2: Create some users using the builder 
const users = [
  new User("Mike", "Mondeo", "Smith", "mmondeos@gmail.com", 35, "NYC", 0),
  new User("Nathaniel", "Ford", "Mondeo", "nford@gmail.com", 41, "Seattle", 0),
  new User("Micaela", "Pratt", "Ton", "mpratt@gmail.com", 18, "Philadelphia", 0),
];
// Addenda: create the users array in a loop
// Addenda: initialize each user using a random name from a random array of names

/////////////////////////////////////////////////////
// Block 3: Add users to 'userSelect' select dropdown. Use a unique value for each
const select = document.getElementById("userSelect");
const newOption = document.createElement("option");
newOption.setAttribute("value", '###empty###'); 
newOption.textContent = '-- choose a user --';
select.appendChild(newOption)
users.forEach(user => {
  const newOption = document.createElement("option");
  newOption.setAttribute("value", user.email); 
  newOption.textContent = user.name;
  select.appendChild(newOption)
});

/////////////////////////////////////////////////////
// Block 4: Add a listener to incrementButton to fill the fields under userInfo 
// with the selected user in the dropdown
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");
const list = document.getElementById("userInfo");

function clearSelectedUser () {
  list.innerHTML = "";
}

function showSelectedUser(user) {
  clearSelectedUser();
  for (const propertyName in user) {
    const value = user [propertyName];
    if (typeof value !== "function") {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
      newListItem.classList.add("list-group-item");
      list.appendChild(newListItem);
    }
  }
}

select.addEventListener("change", (event) => {
  const emailToFind = event.target.value;
  const selectedUser = users.find(user => user.email === emailToFind);
  showSelectedUser(selectedUser);
});

/////////////////////////////////////////////////////
// Block 5: add a listener to the incrementButton that will call the method 
// increaseProducts on the selected user
function increment () {
  const emailToFind = select.value;
  const selectedUser = users.find(user => user.email === emailToFind);
  selectedUser.incrementProducts();
}
// incrementButton.addEventListener("click", increment);

/////////////////////////////////////////////////////
// Block 6: update the selected user after changing its data
function refreshUser(user) {
  showSelectedUser(user);
}
function incrementProductsOnUser (user) {
  user.incrementProducts();
}
incrementButton.addEventListener("click", (e) => { 
  const emailToFind = select.value;
  const selectedUser = users.find(user => user.email === emailToFind);
  incrementProductsOnUser(selectedUser);
  refreshUser(selectedUser);
});

/////////////////////////////////////////////////////
// Block 7: do the same as incrementButton for emptyButton
function emptyProductsOnUser (user) {
  user.emptyProducts();
}
emptyButton.addEventListener("click",(e) => { 
  const emailToFind = select.value;
  const selectedUser = users.find(user => user.email === emailToFind);
  emptyProductsOnUser(selectedUser);
  refreshUser(selectedUser);
});

// Addendas:
// A1 - write better code isolating the function to find the selected User
// A2 - keep track of the selected user without delegating on the select component
// A3 - Creating a DOM element is an expensive operation. 
//      Improve the code so you don't need to rebuild all the LIs under the UL 