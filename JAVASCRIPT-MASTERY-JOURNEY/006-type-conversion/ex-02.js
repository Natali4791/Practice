//
console.log(`Отличия Number.isNaN() от isNaN() в JavaScript`);
console.log(`Глобальная функция isNaN() Можно ли значение преобразовать в число && = NaN`);
console.log(`isNaN("123"): ${isNaN("123")}`); // false,число не равно NaN
console.log(`isNaN("Привет"): ${isNaN("Привет")}`); // true
console.log(`isNaN(undefined): ${isNaN(undefined)}`);
console.log(`isNaN({}): ${isNaN({})}`);
console.log(`isNaN(NaN): ${isNaN(NaN)}`);
console.log();
console.log(`Метод Number.isNaN() Является ли значение NaN?`);
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`); // true
console.log(`Number.isNaN("123"): ${Number.isNaN("123")}`); // false
console.log(`Number.isNaN("Привет"): ${Number.isNaN("Привет")}`); // false
console.log(`Number.isNaN(undefined): ${Number.isNaN(undefined)}`);
console.log(`Number.isNaN({}): ${Number.isNaN({})}`);
console.log();
// Для проверки на NaN нельзя использовать операторы сравнения:
// console.log(NaN === NaN); // false
// console.log(Object.is(NaN, NaN)); // true

console.log(`метод Number.isFinite() является ли переданное значение конечным числом.`);
console.log(`Number.isFinite(0): ${Number.isFinite(0)}`); // true
console.log(`Number.isFinite(2e64): ${Number.isFinite(2e64)}`); // true
console.log(`Number.isFinite(Infinity): ${Number.isFinite(Infinity)}`); // false
console.log(`Number.isFinite(NaN): ${Number.isFinite(NaN)}`); // false
console.log(`Number.isFinite("0"): ${Number.isFinite("0")}`); // false (строка)
console.log();
console.log(`Функции parseInt и Number.parseInt преобразуют строку в целое число.`);
console.log(`parseInt("10"): ${parseInt("10")}`); // 10
console.log(`parseInt("10.5"): ${parseInt("10.5")}`); // 10
console.log(`parseInt("10", 2)(двоичная система): ${parseInt("10", 2)}`); // 2 (двоичная система)
console.log(
  `Number.parseInt("0xFF", 16)(шестнадцатеричная система): ${Number.parseInt("0xFF", 16)}`
); // 255 (шестнадцатеричная система)
console.log();

console.log(
  `Функции parseFloat и Number.parseFloat преобразуют строку в число с плавающей точкой.`
);
console.log(`parseFloat("10.5"): ${parseFloat("10.5")}`); // 10.5
console.log(`parseFloat("10"): ${parseFloat("10")}`); // 10
console.log(`Number.parseFloat("1e3"): ${Number.parseFloat("1e3")}`); // 1000
console.log();

console.log(`Метод Number.isInteger() определяет, является ли переданное значение целым числом.`);
console.log(`Number.isInteger(0): ${Number.isInteger(0)}`); // true
console.log(`Number.isInteger(1): ${Number.isInteger(1)}`); // true
console.log(`Number.isInteger(-100000): ${Number.isInteger(-100000)}`); // true
console.log(
  `Number.isInteger(99999999999999999999999): ${Number.isInteger(9999999999999999999999999)}`
); // false (вне диапазона)
console.log(`Number.isInteger(0.1): ${Number.isInteger(0.1)}`); // false
console.log(`Number.isInteger(Math.PI): ${Number.isInteger(Math.PI)}`); // false

console.log(`Number.isInteger(NaN): ${Number.isInteger(NaN)}`); // false
console.log(`Number.isInteger(Infinity): ${Number.isInteger(Infinity)}`); // false

console.log(`Number.isInteger("10"): ${Number.isInteger("10")}`); // false (строка)
console.log(`Number.isInteger(true): ${Number.isInteger(true)}`); // false
console.log(`Number.isInteger([1]): ${Number.isInteger([1])}`); // false
console.log();
console.log(
  `Метод Number.isInteger() подтверждает, что значение является именно целым числом, а не результатом вычислений с плавающей точкой или преобразования других типов данных.`
);
function isValidIndex(index) {
  return Number.isInteger(index) && index >= 0;
}
console.log(`isValidIndex(5): ${isValidIndex(5)}`); // true
console.log(`isValidIndex(5.5): ${isValidIndex(5.5)}`); // false
console.log(`isValidIndex(-1): ${isValidIndex(-1)}`); // false
console.log(
  `метод Number.isInteger() не считает целыми числами значения, выходящие за пределы безопасного диапазона целых чисел в JavaScript.`
);
console.log();
console.log(10 / 0);
