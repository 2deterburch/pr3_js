"use strict";

class User {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    display() {
        return `Користувач: ${this.name}, вік: ${this.age}, професія: ${this.profession}`;
    }
}

class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession);
        this.role = role;
    }

    display() {
        return `Адміністратор: ${this.name}, вік: ${this.age}, професія: ${this.profession}, роль: ${this.role}`;
    }
}

function createUserLibrary() {
    const name = prompt("Введіть ім'я:");
    const age = Number(prompt("Введіть вік:"));
    const profession = prompt("Введіть професію:");
    const type = prompt("Введіть тип: user або admin");

    if (!name || !profession || isNaN(age) || age <= 0) {
        alert("Помилка! Перевірте правильність введених даних.");
        console.log("Помилка валідації");
        return;
    }

    let person;

    if (type === "admin") {
        const role = prompt("Введіть роль адміністратора:");

        if (!role) {
            alert("Роль адміністратора не може бути порожньою.");
            return;
        }

        person = new Admin(name, age, profession, role);
    } else {
        person = new User(name, age, profession);
    }

    console.log(person);
    console.log(person.display());
    alert(person.display());
}
