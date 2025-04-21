const readlineSync = require("readline-sync");

console.log(
  `50. Программа, которая инвертирует элементы массива (первый элемент становится последним, второй предпоследним и так далее).`
);
console.log(`function reverseArray(arr) {
    return arr.slice().reverse();
}
`);

console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Генерация массива случайных чисел от -50 до 50`);
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100) - 50);
  }
  return arr;
}
console.log();
console.log(`Вывод массива`);
function printArray(arr) {
  console.log(arr);
  // console.log(arr.join(", "));
  // console.log(`[${arr.join(", ")}]`);
}
console.log();
console.log(`Печать исходного массива`);
const randomArray = generateRandomArray(input);
console.log("Исходный массив:");
printArray(randomArray);

console.log(`Инвертирование элементов массива `);
function reverseArray(arr1) {
  return arr1.slice().reverse();
}
const array = reverseArray(randomArray);
printArray(array);
console.log();
