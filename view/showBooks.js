import { deleteBook } from "../controller/deleteBook.js";
import { toggleReadStatus } from "./toggleReadStatus.js";

export function showBooks(booksArray) {
    const library = document.querySelector("#library");

    library.innerHTML = '';

    booksArray.forEach(book => {
        const html = /*html*/
            `
            <div class="book">
                <article class="book-info">
                    "${book.title}" by ${book.author}, ${book.pages} pages.
                </article> 
                <article class="book-read-status">Read status: <strong>${book.readStatus}</strong>
                </article>
                <button class="delete-button">Delete</button>
                <button class="toggle-button">Change read status</button>
            </div>
            `;

        library.insertAdjacentHTML('beforeend', html);

        library.lastElementChild.querySelector('.toggle-button').addEventListener('click', () => { toggleReadStatus(book); });

        library.lastElementChild.querySelector('.delete-button').addEventListener('click', () => { deleteBook(book); });

    });


}