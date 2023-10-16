import { showBooks } from "../view/showBooks.js";
import { myLibrary } from "/index.js";

export function deleteBook(book) {
    const bookTitle = book.title;
    const indexToDelete = myLibrary.findIndex(item => bookTitle === item.title);

    myLibrary.splice(indexToDelete, 1);

    showBooks(myLibrary);
};