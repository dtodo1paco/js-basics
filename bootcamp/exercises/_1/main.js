
/////////////////////////////////////////////////////
// Block 1: Add 2 <p> elements to the 'block1' div
const block1DIV = document.getElementById("block1");

const p1 = document.createElement("p");
p1.textContent = "some funny text";
// Q&A: why can we change the textContent if p1 is a const?
block1DIV.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "c'mon, this is my second p"
block1DIV.appendChild(p2)

// Addenda: repeat for 500 <p> elements

/////////////////////////////////////////////////////
// Block 2: change the document background when clicking the button
const colorButton = document.getElementsByTagName("button")[0];
// be aware that getElementsByTagName returns an Array
colorButton.addEventListener("click", function (){
  document.body.style.backgroundColor = "red";
});

// Addenda: repeat for random color. 
// Hint: a color can be specified in RGB form: rgb(R,G,B)
// where R, G and B are numbers from 0 to 255
// you can use Math.random() to generate random numbers


/////////////////////////////////////////////////////
// Block 3
// listen for click on each LI element and get the text content of 
// the element. Use it to set the IMG src attribute.

//const changeImage = (e) => image.src = e.target.textContent;
const image = document.querySelector("img");
function changeImage(e) {
  const link = e.target.textContent;
  image.src = link;
}
const listItems = document.getElementsByTagName("li");
listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// Addenda: What about having 2 image holders? 
// How will you change the listener?
// Hint: the 2nd argument to addEventListener is a function receiving an event.
// it is possible to create a function to call your customized function (e) => myFunc(e, image1)

/////////////////////////////////////////////////////
// Block 4
// using and input and a button, listen for
// 4.1 click on the button, must change the <p id='block4.1'> content
const p41 = document.getElementById("block4.1");
const block4Input = document.querySelector("input");
const block4Button = document.querySelectorAll("button")[1];
// [1] because we have a previous button in the document (Block 2 - Turn red)
block4Button.addEventListener("click", () => {
  p41.textContent = block4Input.value; 
  block4Input.value = '';
});

// 4.2 key pressed on input, must change the <p id='block4.2'> content
const p42 = document.getElementById("block4.2");
block4Input.addEventListener("keyup", 
  () => p42.textContent = block4Input.value
);

// Addenda: cleanup mirror p42 after button has been clicked

/////////////////////////////////////////////////////
// Block 5
// listen on a textarea and change style when the length of the content is over 20
const textarea = document.querySelector("#textArea");
textarea.addEventListener("input", e => {
  if (e.target.value.length > 20) {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "green";
  }
});

// Addenda. Add a label (p) to show the current length of the content
// Hint: update it on each input change

/////////////////////////////////////////////////////
// Block 6
// listen on button click to validate the input field content
const evenInput = document.querySelector("#evenNumberInput");
// look at the way we are getting the element: querySelector using # Vs. getElementById
// https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/#:~:text=With%20a%20querySelector%20statement%2C%20you,clearly%20gets%20the%20job%20done.
const validateButton = evenInput.nextElementSibling;
validateButton.addEventListener("click",() => {
  const isEven = evenInput.value % 2 === 0;
  if (!isEven) {
    evenInput.style.border = "2px solid red";
  } else {
    evenInput.style.border = "2px solid green";
  }
});

/////////////////////////////////////////////////////
// Block 7
// add 10 elements to <ul id='listToFill'>
const ul = document.getElementById("listToFill");
for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `${i}th element` ;
    ul.appendChild(newLi); 
}

/////////////////////////////////////////////////////
// Block 8 
// make the link 'googleLink' 
const newTabButton = document.getElementById("newTab");
const link = document.getElementById("googleLink");
newTabButton.addEventListener("click", () => {
  link.target = "blank"
});
// Addenda: change the link text when the behavior changes
// so the user can be warned about the change


/////////////////////////////////////////////////////
// Block 9
// change the color of the text in 'colorsParagraph'
// according to what is selected in 'colorsSelect'
const colorsParagraph = document.getElementById("colorsParagraph");
const colorsSelect = document.getElementById("colorsSelect");
colorsSelect.addEventListener("change", e => {
  colorsParagraph.style.color = e.target.value;
});

// Addenda 1
// add a default option

// Addenda 2
// add a random color option

/////////////////////////////////////////////////////
// Block 10 - random and track
// add a click listener to 'click' event on 'randomButton'
// it has to generate a random number between 1 and 100
// it has to keep track of total generated numbers and show how many
// of them are odd and even.
const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");
const randomButton = document.getElementById("randomButton");
randomButton.onclick = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  currentRandom.textContent = randomNumber;
  totalNumbers.textContent++;
  const isOdd = randomNumber % 2 !== 0;
  if (isOdd) {
    oddNumbers.textContent++;
  } else {
    evenNumbers.textContent++;    
  }
};

// Addenda: show the percentage of even and odd numbers 
// regarding the total of numbers generated

/////////////////////////////////////////////////////
// Block 11 - list validation
// add a click listener on button 'button-11'. It must
// add the element typed on 'input-11' to the 'ul-11' list
// but ONLY if the element has not been added before
// It must be added at the begining of the list
const ul_11 = document.getElementById("ul-11");
const input_11 = document.getElementById("input-11");
const valuesEntered = [];
function addNumber() {
  const num = input_11.value;
  if (valuesEntered.includes(num)) {
    alert(`Duplicated element: ${num}`);
  } else { // add the element
    const li = document.createElement("li");
    ul_11.prepend(li);
    li.textContent = num;
    valuesEntered.push(num);
  }
}
const button_11 = document.getElementById("button-11");
button_11.addEventListener("click", addNumber);
// Addenda: fix the empty input case ignoring the input

/////////////////////////////////////////////////////
// Block 12 - toggle class
const togglerButton = document.getElementById("btn12");
function toggleDisabled(e) {
  e.target.classList.toggle("enabled");
  e.target.classList.toggle("disabled");
}
togglerButton.onclick = toggleDisabled;
// Addenda. Change the button text to inform the user
