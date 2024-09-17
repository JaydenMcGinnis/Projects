// Main query selectors
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector("form");

// Array of books
const library = [];

// Book object creator
function Book(title, author, pages, read) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// test book
let book1 = new Book(
  "Harry Potter and the Deathly Hallows",
  "J. K. Rowling",
  607,
  false
);

// test book
let book2 = new Book("Atomic Habits", "James Clear", 320, false);

// Adding test books to library and displaying the initial book
addToLibrary(book1, library);
addToLibrary(book2, library);
displayBooks(library);

function addToLibrary(book, library) {
  // Add book to library
  library.push(book);
}

// Displays every book in library as a card
function displayBooks(library) {
  // Remove display or cards
  removeCards();
  // Create book object cards from library
  library.forEach((book, index) => {
    createCard(book, index);
  });
}

// Remove book object from list
function removeBook(book, library) {
  library.remove(book);
  displayBooks();
}

//remove all cards
function removeCards() {
  document.querySelectorAll(".card").forEach((e) => e.remove());
}

function toggleRead(index) {
  let toggleValue = library[index]["read"];
  toggleValue = toggleValue == "true" ? "false" : "true";
  library[index]["read"] = toggleValue;
}

// Card with the details of each book inside library list
function createCard(book, index) {
  // Create card div
  const card = document.createElement("div");
  card.classList.add("card");

  // Create book title heading
  const bookTitle = document.createElement("h3");
  bookTitle.innerText = book.title;

  // Create table for book information
  const bookTable = document.createElement("table");

  // Create table row for headers
  const headerRow = document.createElement("tr");
  const valueRow = document.createElement("tr");

  const toggleReadButton = document.createElement("button");
  toggleReadButton.classList.add("toggle-read");
  toggleReadButton.innerText = "toggle read";
  toggleReadButton.setAttribute("data-index", index);

  toggleReadButton.addEventListener("click", () => {
    toggleRead(index);
    displayBooks(library);
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("data-index", index);

  removeButton.addEventListener("click", () => {
    library.splice(index, 1);
    displayBooks(library);
  });

  // Object.keys(book) returns an array of property names
  Object.keys(book).forEach((key) => {
    // Create table header for each key
    const bookTableHead = document.createElement("th");
    bookTableHead.innerText = key;

    // Create table data for each corresponding value
    const bookTableData = document.createElement("td");
    bookTableData.innerText = book[key];

    // Append the header and data to their respective rows
    headerRow.appendChild(bookTableHead);
    valueRow.appendChild(bookTableData);
  });

  // Append the rows to the table
  bookTable.appendChild(headerRow);
  bookTable.appendChild(valueRow);

  // Assemble card by appending the title and the table
  card.appendChild(bookTitle);
  card.appendChild(bookTable);
  card.appendChild(toggleReadButton);
  card.appendChild(removeButton);

  // Append the card to the main container
  mainContainer.appendChild(card);
}

/** @description Create a book from the
 * values inside the form when button
 * is clicked
 */
function createBook(data) {
  const title = data.get("title");
  const author = data.get("author");
  const pages = data.get("pages");
  const read = data.get("read");

  let newBook = new Book(title, author, pages, read);
  addToLibrary(newBook, library);
  event.preventDefault();
}

// Remove values from all form inputs
function removeValues() {
  document.querySelectorAll("input[type='text']").forEach((e) => {
    e.value = "";
    document.querySelector("input[type='number']").value = 0;
  });
}

form.addEventListener(
  "submit",
  () => {
    const data = new FormData(form);
    createBook(data);
    displayBooks(library);
    removeValues();
    event.preventDefault();
  },
  false
);
