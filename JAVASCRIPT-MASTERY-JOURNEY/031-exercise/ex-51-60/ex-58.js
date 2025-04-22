const readlineSync = require("readline-sync");

console.log(
  `Программа должна сначала создать массив, заполненный случайными числами от -10 до 10. Затем она должна переместить все нули в конец массива, не меняя порядок других элементов.`
);
console.log(`function moveZerosToEnd(arr) {
    let nonZero = arr.filter(x => x !== 0);
    let zeros = arr.filter(x => x === 0);
    return nonZero.concat(zeros);
}`);
console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Генерация массива случайных чисел от -10 до 10`);
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 10) - 10);
  }
  return arr;
}

console.log(`Вывод массива`);
function printArray(arr) {
  console.log(arr);
}
console.log(`Печать сгенерированного рандомного массива`);
const randomArray = generateRandomArray(input);
console.log("Сгенерированный рандомный массив:");
printArray(randomArray);

console.log(`Перемещаем все нули в конец массива`);
function moveZerosToEnd(arr) {
  let nonZero = arr.filter((x) => x !== 0);
  let zeros = arr.filter((x) => x === 0);
  return nonZero.concat(zeros);
}
console.log(moveZerosToEnd(randomArray));

// Пример использования
// console.log("Пример 1:", moveZerosToEnd([1, 2, 3, 6, 5, 7, 8, 9, 22, 3, 4, 20]));
console.log(`Пример 2:, [-3, 0, 5, -10, 0, 8, 9, 0, -5, 6]`);
console.log("Пример 2:", moveZerosToEnd([-3, 0, 5, -10, 0, 8, 9, 0, -5, 6]));
console.log(`Пример 3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`);
console.log("Пример 3:", moveZerosToEnd([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
