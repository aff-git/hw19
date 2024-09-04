let year = +prompt("Enter year:");

if (year % 100 == 0 && year % 400 !== 0 ) {
    console.log(`Введенный год ${year} - обычный год (исключение)`);
} else if (year % 400 == 0 || year % 4 == 0)
    {console.log(`Введенный год ${year} - Высокосный год`);
} else
    {console.log(`Введенный год ${year} - обычный год`);
}