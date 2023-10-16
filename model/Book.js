export class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    getBookInfo() {
        return `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.readStatus}.`;
    }
}