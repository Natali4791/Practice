const readlineSync = require("readline-sync");

console.log(
  `54. Программа, возвращающая индекс первого вхождения числа в массиве, если нет, то вернуть "-1" `
);

console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Генерация массива случайных чисел от 0 до 100`);
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
console.log();

console.log(`Вывод массива`);
function printArray(arr) {
  console.log(arr);
}
console.log(`Печать сгенерированного рандомного массива`);
const randomArray = generateRandomArray(input);
console.log("Сгенерированный рандомный массив:");
printArray(randomArray);

console.log(`Введите искомое число в массиве: `);
const number = readlineSync.question("Enter the desired number in the array: ");
console.log(`Поиск первого вхождения числа в массиве`);
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      console.log(`индекс числа в массиве: ${i}`);
      return i;
    }
  }
  console.log("число в массиве не найдено, вернуть '-1'");
  return -1;
}
console.log(findIndex(randomArray, number));
