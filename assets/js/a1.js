// A1

// Задача: Разработать скрипт который рассчитывает индекс массы тела пользователя.
// Задача: в зависимости от полученного результата выводить сообщение о том, что означает индекс (текстом, в соответствии с Wikipedia). «Многоэтажных» if поможет в этом.

let height = +prompt("Please, enter your height (in meters ex. 1.70):")
let weight = +prompt("Set your weight (in kg):")
let BMI = weight / (height ** 2); // BMI counter

console.log(`Your BMI (Body Mass Index) equals: ${BMI}`);
if (BMI <= 16) {
    console.log("Выраженный дефицит массы тела");
} else if (BMI >= 16.001 && BMI <= 18.500) {
    console.log("Недостаточная (дефицит) масса тела");
} else if (BMI >= 18.501 && BMI <= 25.000) {
    console.log("BMI is normal");
} else if (BMI >= 25.001 && BMI <= 30.000) {
    console.log("Избыточная масса тела (предожирение)");
} else if (BMI >= 30.001 && BMI <= 35.000) {
    console.log("Ожирение 1 степени");
} else if (BMI >= 35.001 && BMI <= 40.000) {
    console.log("Ожирение 2 степени");
} else if (BMI >= 40) {
    console.log("Ожирение 3 степени");
} else {console.log("Undefined BMI");}
