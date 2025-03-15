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
