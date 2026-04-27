"use strict";

class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value) {
            this._title = value;
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value) {
            this._author = value;
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value > 0) {
            this._year = value;
        }
    }

    display() {
        return `Книга: "${this.title}", автор: ${this.author}, рік: ${this.year}`;
    }
}

class Ebook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    display() {
        return `Електронна книга: "${this.title}", автор: ${this.author}, рік: ${this.year}, формат: ${this.format}`;
    }
}

function createBookProject() {
    const title = prompt("Введіть назву книги:");
    const author = prompt("Введіть автора:");
    const year = Number(prompt("Введіть рік видання:"));
    const type = prompt("Введіть тип: book або ebook");

    if (!title || !author || isNaN(year) || year <= 0) {
        alert("Помилка! Перевірте правильність введених даних.");
        console.log("Помилка валідації книги");
        return;
    }

    let book;

    if (type === "ebook") {
        const format = prompt("Введіть формат електронної книги:");

        if (!format) {
            alert("Формат не може бути порожнім.");
            return;
        }

        book = new Ebook(title, author, year, format);
    } else {
        book = new Book(title, author, year);
    }

    console.log(book);
    console.log(book.display());
    alert(book.display());
}
