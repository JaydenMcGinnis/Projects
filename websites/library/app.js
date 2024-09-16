// Get the main-container element
const mainContainer = document.querySelector(".main-container");

// Array of books
const library = [];

// Book object creator
function Book(title, author, pages, read) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// test book
let book1 = new Book(
    "Harry Potter and the Deathly Hallows",
    "J. K. Rowling",
    607,
    false
);

// test book
let book2 = new Book(
    "Atomic Habits",
    "James Clear",
    320,
    false
);

addToLibrary(book1, library);
addToLibrary(book2, library)

function addToLibrary(book, library) {
    // Add book to library
    library.push(book);
};

// Displays every book in library as a card
function displayBooks(library) {
    removeCards()
    // Loop through library array and create new cards
    library.forEach((book, index) => {
        createCard(book, index);
    });
};

displayBooks(library);

// Remove book object from list
function removeBook(book, library) {
    library.remove(book);
    displayBooks()
}

//remove all cards
function removeCards() {
    document.querySelectorAll(".card").forEach(e => e.remove());
}

// Card with the details of each book inside library list
function createCard(book, index) {
    // Create card div
    let card = document.createElement("div");
    card.classList.add("card");

    // Create book title heading
    let bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;

    // Create table for book information
    let bookTable = document.createElement("table");

    // Create table row for headers
    let headerRow = document.createElement("tr");
    let valueRow = document.createElement("tr");

    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button")
    removeButton.innerText = "Remove";
    removeButton.setAttribute("data-index", index)

    removeButton.addEventListener("click", () => {
        library.splice(index, 1);
        displayBooks(library)
        console.log(library)
    })

    // Object.keys(book) returns an array of property names
    Object.keys(book).forEach(key => {
        // Create table header for each key
        let bookTableHead = document.createElement("th");
        bookTableHead.innerText = key;

        // Create table data for each corresponding value
        let bookTableData = document.createElement("td");
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
    card.appendChild(removeButton);

    // Append the card to the main container
    mainContainer.appendChild(card);
};

/** @description Create a book from the 
 * values inside the form when button 
 * is clicked
 */
function createBook() {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").value
    
    let newBook = new Book(title, author, pages, read);
    addToLibrary(newBook, library);
    event.preventDefault();
}

// Remove values from all form inputs
function removeValues() {
    document.querySelectorAll("input[type='text']").forEach(e => {
        e.value = "";
    })
}

// listen for button click event
const btn = document.querySelector("input[type='submit']");
btn.addEventListener("click", () => {
    createBook();
    displayBooks(library)
    removeValues()
});
