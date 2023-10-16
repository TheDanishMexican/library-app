import { addBookToLibrary } from "./controller/addBookToLibrary.js";
import { closeDialogNormal, closeDialogSpecial } from "./view/closeDialog.js";
import { resetForm } from "./view/resetForm.js";
import { showDialog } from "./view/showDialog.js";

export function NewBookButtonInitialized() {
    const button = document.querySelector("#newBookButton");

    button.addEventListener("click", (event) => {
        showDialog(event.target.id);
    });
}

export function submitInNewBookInitialized() {
    const submitButton = document.querySelector("#newBookForm");

    submitButton.addEventListener("submit", (event) => {
        addBookToLibrary(event);
        closeDialogNormal();
        resetForm();
    });
}

export function closeDialogInitialized() {
    document.addEventListener('click', (event) => {
        closeDialogSpecial(event);
    });
}
