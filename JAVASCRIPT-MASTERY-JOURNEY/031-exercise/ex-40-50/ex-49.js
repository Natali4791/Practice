const readlineSync = require("readline-sync");
console.log(
  `49. Программа, которая "сжимает" массив, удаляя из него все 0 (нулевые элементы) и сохраняя порядок остальных элементов.`
);
console.log(`function compressArray(arr) {
    return arr.filter(elem => elem !== 0);
}`);

// 1. Запрос количества элементов массива
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

// Генерация массива случайных чисел
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100) - 50); // Случайные числа от 0 до 99
  }
  return arr;
}

// Вывод массива
function printArray(arr) {
  // console.log(randomArray);
  console.log(arr.join(", "));
}

// Печать исходного массива
const randomArray = generateRandomArray(input);
console.log("Исходный массив:");
printArray(randomArray);

// Сжатие массива
function compressArray(arr) {
  return arr.filter((elem) => elem !== 0);
}

const elem = randomArray.filter(function (elem) {
  return elem !== 0;
});
// console.log(elem);

const sortedArray = compressArray(randomArray);

// Вывод сжатого массива
console.log("Сжатый массив:");
printArray(sortedArray);
console.log(`конец`);

//Проба
console.log(
  `Функция filter также принимает функцию и использует её для выбора определенных чисел массива`
);
const array = [1, 0, 2, 0, 3, 4, 0, 5];
console.log("Исходный массив:");
console.log(array);
const elem1 = array.filter(function (elem1) {
  return elem1 !== 0;
});
console.log("Сжатый массив:");
console.log(elem1);
