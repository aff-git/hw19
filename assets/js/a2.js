let year = +prompt("Enter year:");

if (year % 4 == 0) {
    console.log(`Введенный год ${year} - высокосный год`);
} else {console.log(`Введенный год ${year} - обычный год`);}


// Реализовано через деление на 4 без остатка