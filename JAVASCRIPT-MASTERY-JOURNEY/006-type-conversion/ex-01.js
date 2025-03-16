// 1. Преобразование к строке
let numToStr = 10;
let toStr = String(numToStr);
console.log(`Строковое значение toStr: ${toStr}`);
console.log(`Тип данных toStr: ${typeof toStr}`);
console.log(`Тип данных начальной переменной numToStr: ${typeof numToStr}`);
console.log();

// 2. Преобразование к числу
let strToNum = "10";
console.log(`Строчное значение strToNum: ${strToNum}`);
console.log(`Тип данных strToNum: ${typeof strToNum}`);
console.log(`Числовое значение strToNum: ${Number(strToNum)}`);
console.log(`Числовое значение Number(strToNum): ${typeof Number(strToNum)}`);
console.log(`Number(11 == 11) значение: ${Number(11 == 11)}`); // будет 1
console.log(`Number(11 == 12) значение: ${Number(11 == 12)}`); // будет 0
console.log();

// 3. Преобразование к логическому типу
let strToBool = "Hello";
console.log(`Boolean(strToBool) ${Boolean(strToBool)}`);
let strToBool1 = "";
console.log(`Boolean(strToBool1) ${Boolean(strToBool1)}`);
console.log();

// 4.1 Неявное преобразование числа к строке
let implicitConversion = 10 + "20";
console.log(`10 + "20" получим строку: ${implicitConversion}`);
// 4.2 Неявное преобразование строки к числу
let implicitConversion1 = 10 + +"20";
console.log(`10 + +"20" получим число: ${implicitConversion1}`);
console.log();

// 5. Неявное преобразование при сравнении. JS - это язык динамической типизации
let num = 10;
let str = "10";
console.log(`10 == "10" будет ${num == str}`);
let num1 = 11;
let str1 = "10";
console.log(`11 == "10" будет ${num1 == str1}`);
let num2 = 10;
let str2 = "10";
console.log(`10 === "10" будет ${num2 === str2}`);
console.log();
