// Create object through function
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "have read" : "not read yet";
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

let theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info())