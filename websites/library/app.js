// Array of books
const library = [];

function Book(title, author, pages, read) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

let Harry_Potter_and_the_Deathly_Hallows = new Book("Harry Potter and the Deathly Hallows",
                                                    "J. K. Rowling",
                                                    607,
                                                    false
);

let Atomic_Habits = new Book("Atomic Habits",
    "James Clear",
    320,
    false
);

function addToLibrary(book, library) {
    // Add book to library
    library.push(book);
};

addToLibrary(Harry_Potter_and_the_Deathly_Hallows, library);
addToLibrary(Atomic_Habits, library)

function displayBooks(library) {
    // Loop through library array and create new cards
    library.forEach(book => {
        createCard(book);
    });
};

// Get the main-container element
const mainContainer = document.querySelector(".main-container");

function createCard(book) {
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

    // Append the card to the main container
    mainContainer.appendChild(card);
}

// Create a function that gets all the innerText from each input and then plugs
// them into a book() func to create a new book instance and store that in
// library list
function createBook() {
    const title = document.getElementById("#title")
    const author = document.getElementById("#author")
    const pages = document.getElementById("#pages")
    const read = document.getElementById("#read")

    
}

displayBooks(library);
