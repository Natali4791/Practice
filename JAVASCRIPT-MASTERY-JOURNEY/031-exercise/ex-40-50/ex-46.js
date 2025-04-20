const readlineSync = require("readline-sync");
console.log(
  `Создать массив, заполненный числами трибоначчи (каждое следующее число равно сумме трех предыдущих, начальные числа - 0, 1, 1), и вывести его на экран`
);
console.log(`function generateTribonacci(n) {
  if (n < 1) return [];
  let tribonacci = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    tribonacci[i] = tribonacci[i-1] + tribonacci[i-2] + tribonacci[i-3];
  }
  return tribonacci.slice(0, n);
}

function printArray(arr) {
  console.log(arr.join(', '));
}

// Пример использования
const n = 10; // Ввод
const tribonacciArray = generateTribonacci(n);
printArray(tribonacciArray);`);
function generateTribonacci(n) {
  if (n < 1) return [];
  let tribonacci = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    tribonacci[i] = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
  }
  return tribonacci.slice(0, n);
}

function printArray(arr) {
  console.log(arr.join(", "));
}

console.log(`Введите количество чисел последовательности трибоначчи: `);
const n = readlineSync.question("Enter the number of numbers in the tribonacci sequence: ");
// Пример использования
// const n = 11; // Ввод
const tribonacciArray = generateTribonacci(n);
printArray(tribonacciArray);
console.log();
