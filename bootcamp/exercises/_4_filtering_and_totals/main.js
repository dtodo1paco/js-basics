/////////////////////////////////////////////////////
// from previous exercise
/////////////////////////////////////////////////////
function Book(id, title, author , sales, price) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.sales = sales;
  this.price = price;
};

let books = [
  new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
  new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
  new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
  new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
  new Book(5, "The Selfish Genetist", "Richard Dawkins", 231578, 14),
  new Book(6, "The God Delusion 2", "Richard Dawkins", 56484, 13),
];
const booksTbody = document.getElementById("books-body");
function emptyTable () {
  booksTbody.innerHTML = "";
}

const tableFooter = document.getElementById("books-footer");
function refreshTable(booksToDisplay) {
  emptyTable();
  booksToDisplay.forEach(book => {
      booksTbody.innerHTML += `
      <tr>
          <td>${book.id}</td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.sales}</td>
          <td>${book.price}</td>
          <td>
              <button class = "btn btn-danger" id ="${book.id}">Remove</button>
          </td>
      </tr>`;  
  });
  refreshFooter(booksToDisplay);
}
booksTbody.onclick = e => {
  if(e.target.tagName === "BUTTON") {
      books = books.filter(book => book.id != e.target.id);
      doFilterAndRefresh();
  }  
};

refreshTable(books);
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", e => {
  e.preventDefault();
  const newID = books[books.length-1].id + 1;
  books.push(new Book(
    newID, 
    titleInput.value, 
    authorInput.value, 
    salesInput.value, 
    priceInput.value)
  );
  // refresh data
  doFilterAndRefresh();
  // clear the form
  titleInput.value = "";
  authorInput.value = "";
  salesInput.value = "";
  priceInput.value = "";
});

/////////////////////////////////////////////////////
// Block 1 - listen for any changes in the filter field `filterInput`
// filter books containing the typed sequence in the title

function filterBooksByTitle(title) {
  if (!title || title.length === 0) return books;
  return books.filter(book => {
    const upperTitle = book.title.toUpperCase();
    const upperInputValue = title.toUpperCase();
    return upperTitle.includes(upperInputValue);
  });
}

// Addenda: make the filter able to filter by title or author matching the typed data
// Addenda: how can we improve the way we are filtering? 
// Hint: consider adding a hidden field to each record, to make the search easier

const filterInput = document.getElementById("filterInput");
filterInput.addEventListener("input",  e => refreshTable(filterBooksByTitle(e.target.value)));
const doFilter = () => filterBooksByTitle(filterInput.value);
const doFilterAndRefresh = () => refreshTable(doFilter());

/////////////////////////////////////////////////////
// Block 2 - add the ability to sort by price
let ascendingOrder = true;
const priceHeader =  document.getElementById("priceHeader");
const priceTitle = priceHeader.innerText;
priceHeader.style.cursor = "pointer";
function sortBooksByPrice(booksToSort) {
  ascendingOrder = !ascendingOrder;
  console.log("asc", ascendingOrder);
  const newTitle = `${priceTitle} ${ascendingOrder === true ? '▲' : '▼'}`;
  priceHeader.innerText  = newTitle;
  return booksToSort.sort(
    (book1, book2) => ascendingOrder 
      ? book1.price - book2.price
      : book2.price - book1.price
  )
}

const doSort = () => sortBooksByPrice(filterBooksByTitle(filterInput.value));
const doSortAndRefresh = () => refreshTable(doSort());
priceHeader.addEventListener("click", doSort);

// Addenda: How will you improve the way we are sorting? can we avoid repeated function definition? (memoize)
// Addenda: sort by more than 1 field. Hint. Keep track of sort fields in a separate variable { sortBy: {price: asc, title: desc, ... } }

/////////////////////////////////////////////////////
// Block 3 - calculate the total amount of price on filtered records
function refreshFooter (booksToConsider) {
  const totalPrice = booksToConsider.reduce((priceSum, book) => priceSum = priceSum + book.price, 0);
  tableFooter.textContent = `Total price ${totalPrice}`;
}

// Addenda: Think on a different approach to improve performance. What is the cost?