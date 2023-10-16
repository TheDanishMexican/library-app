import { showBooks } from "./showBooks.js";
import { myLibrary } from "/index.js";

export function toggleReadStatus(book) {
    const bookIndex = myLibrary.findIndex(item => book.title === item.title);

    if (myLibrary[bookIndex].readStatus === 'not read') {
        myLibrary[bookIndex].readStatus = 'read';
    } else if (myLibrary[bookIndex].readStatus === 'read') {
        myLibrary[bookIndex].readStatus = 'not read';
    }

    showBooks(myLibrary);
}