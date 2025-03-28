// Ничего не возвращают
// Ничего не принимают
function printHello() {
  console.log("Привет!");
}

// Ничего не возвращают
// Принимают аргументы
function printHello(nickname) {
  console.log(`Привет ,${nickname}!`);
}

// Возвращают результат
// Ничего не принимают
function getHelloText() {
  return "Привет!";
}

// Возвращают результат
// Принимают аргументы
function getHelloTextForUser(nickname) {
  return `Привет ,${nickname}!`;
}

// Пример объявления и вызова именованной функции
function greet(username) {
  console.log(`Привет, ${username}!`);
}

greet("Аля"); // Выведет "Привет, Аля!"

// Пример функции с возвращаемым значением
// function add(a, b) {
//     return a + b;
// }

// let result = add(3, 5); // result равен 8

// Пример использования переменных внутри функции
function sayHello(username) {
  let message = `Привет, ${username}!`;
  console.log(message);
}

sayHello("Иван"); // Выведет "Привет, Иван!"

// ***
console.log();
// Пример замыкания (closures)
console.log(`Пример замыкания (closures)`);
console.log(`внешняя функция: function outerFunction()`);
function outerFunction() {
  let outerVariable = "Я СНАРУЖИ  😎 !";
  console.log(`внешняя переменная: let outerVariable = "Я СНАРУЖИ  😎 !"`);
  function innerFunction() {
    console.log(`внутренняя функция: function innerFunction()`);
    console.log(outerVariable);
  }
  console.log(`Возврат значения внутренней функции: return innerFunction`);
  return innerFunction;
}
console.log(
  `присвоение результата внешней функции в переменную: const myFunction = outerFunction(`
);
const myFunction = outerFunction();
console.log(`вывод переменной: myFunction()`);
myFunction(); // Выведет "Я снаружи!"
console.log();

// Пример функции высшего порядка: функция, принимающая другую функцию в качестве аргумента
console.log(`функции высшего порядка: функция, принимающая другую функцию в качестве аргумента`);
console.log(`function applyOperation(x, y, operation) {return operation(x, y);}`);
function applyOperation(x, y, operation) {
  return operation(x, y);
}
console.log(`// function add(x, y) {
//   return x + y;
// }`);
console.log(`переход к стрелочной функции`);
console.log(`const add = (x, y) => x + y`);
const add = (x, y) => x + y;
console.log(`const div = (x, y) => x / y`);
const div = (x, y) => x / y;
console.log(`let result1 = applyOperation(5, 3, add)`);
let result1 = applyOperation(5, 3, add);
console.log(`result1: ${result1}`);
console.log(`let result = applyOperation(12, 3, div)`);
let result = applyOperation(12, 3, div); // Возвращает 4
console.log(`result: ${result}`);
console.log();

// Пример объявления и вызова анонимной функции
console.log(`объявление и вызов анонимной функции`);
console.log(`const multiply = function (a, b) {return a * b;}`);
const multiply = function (a, b) {
  return a * b;
};
console.log(`let result2 = multiply(4, 6)`);
let result2 = multiply(4, 6); // result2 равен 24
console.log(`result2: ${result2}`);
console.log();
let result3 = applyOperation(12, 3, multiply); // Возвращает 4
console.log(`let result3 = applyOperation(12, 3, multiply)`);
console.log(`result3: ${result3}`);
console.log();

console.log(`const sayHi = function (firstName) {console.log(ПрЮвет, firstName!)};`);
const sayHi = function (firstName) {
  console.log(`ПрЮвет, ${firstName}!`);
};
console.log(`вызов функции: sayHi("волку!!")`);
sayHi("волку!!"); //
console.log();
// Пример стрелочной функции
console.log(`function assistantMin(num1, num2) {let tempMin;`);
// function assistantMin(num1, num2) {
//   let tempMin;

//   if (num1 < num2) {
//     tempMin = num1;
//   } else {
//     tempMin = num2;
//   }
//   console.log("всё что до 'return tempMin' выполнится");
//   return tempMin;
//   console.log(`не будет печатать`);
// }
// console.log(`let res = assistantMin(14, 21)`);
// let res = assistantMin(14, 21);
// console.log(`res: ${res}`);
// console.log();
//Переход к стрелочной функции
console.log(`Переход к стрелочной функции`);
console.log(`const assistantMin = (num1, num2) => (num1 < num2 ? num1 : num2)`);
const assistantMin = (num1, num2) => (num1 < num2 ? num1 : num2);
console.log(`let res = assistantMin(14, 21)`);
let res = assistantMin(14, 21);
console.log(`res: ${res}`);
console.log();
console.log();
