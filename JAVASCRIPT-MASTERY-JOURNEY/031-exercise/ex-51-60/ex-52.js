const readlineSync = require("readline-sync");

console.log(
  `Программа должна создать массив из N случайных чисел, найти среди них минимальное и максимальное значение, а затем вернуть разность между ними.`
);
console.log(`function findDifference(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}`);

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
console.log(`Печать исходного массива`);
const randomArray = generateRandomArray(input);
console.log("Исходный массив:");
printArray(randomArray);

console.log(`Разность между максимальным и минимальным элементами массива: `);
function findDifference(randomArray) {
  const max = Math.max(...randomArray);
  const min = Math.min(...randomArray);
  return max - min;
}
const difference = findDifference(randomArray);
printArray(difference);
console.log();
