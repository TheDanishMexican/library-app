export function closeDialogSpecial(event) {
    const dialog = document.querySelector("#newBookDialog");

    if (event.target === dialog) {
        dialog.close();
    }
}

export function closeDialogNormal() {
    const dialog = document.querySelector("#newBookDialog");

    dialog.close();
}