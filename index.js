import { book1, book2, book3 } from "./controller/someBooks.js";
import { NewBookButtonInitialized, closeDialogInitialized, submitInNewBookInitialized } from "./eventlisteners.js";
import { showBooks } from "./view/showBooks.js";

window.addEventListener("load", initalizeApp);

export const myLibrary = [book1, book2, book3];

function initalizeApp() {
    showBooks(myLibrary);
    NewBookButtonInitialized();
    submitInNewBookInitialized();
    closeDialogInitialized();
}