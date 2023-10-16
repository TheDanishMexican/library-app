import { Book } from "../model/Book.js";
import { showBooks } from "../view/showBooks.js";
import { myLibrary } from "/index.js";

export function addBookToLibrary(event) {
    event.preventDefault();

    const form = event.target;
    const titleInput = form.title.value.trim();
    const authorInput = form.author.value.trim();
    const pagesInput = form.pages.value;
    const authorNames = authorInput.split(" ");
    const readStatus = form.readStatus.value;

    const title = `${titleInput.charAt(0).toUpperCase()}${titleInput.slice(1).toLowerCase()}`;

    const author = authorNames.map(name => `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`).join(' ');

    const newBook = new Book(title, author, pagesInput, readStatus);

    myLibrary.push(newBook);

    showBooks(myLibrary);
}