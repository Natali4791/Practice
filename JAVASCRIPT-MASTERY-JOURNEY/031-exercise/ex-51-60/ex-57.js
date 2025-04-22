const readlineSync = require("readline-sync");

console.log(
  `Найти в массиве элемент, наиболее близкий к среднему арифметическому всех его элементов.`
);
console.log(
  `Программа должна принимать на вход массив чисел. Затем она должна вычислить среднее арифметическое всех элементов массива и найти элемент, который наиболее близок к этому среднему значению. Если таких элементов несколько, можно вернуть любой из них.`
);
console.log(`function closestToAverage(arr) {
    const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    let closest = arr[0];
    let minDiff = Math.abs(arr[0] - average);
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - average);
        if (diff < minDiff) {
            minDiff = diff;
            closest = arr[i];
        }
    }
    return closest;
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

console.log(`Вывод массива`);
function printArray(arr) {
  console.log(arr);
}
console.log(`Печать сгенерированного рандомного массива`);
const randomArray = generateRandomArray(input);
console.log("Сгенерированный рандомный массив:");
printArray(randomArray);

console.log(`Поиск числа наиболее близкого к среднему арифметическому этого массива`);
function closestToAverage(arr) {
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  let closest = arr[0];
  let minDiff = Math.abs(arr[0] - average);
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - average);
    if (diff < minDiff) {
      minDiff = diff;
      closest = arr[i];
    }
  }
  return closest;
}
console.log(closestToAverage(randomArray));
// Пример использования
// console.log("Пример 1:", closestToAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log("Пример 2:", closestToAverage([11, 22, 33, 44, 55, 66, 77, 88, 99]));
// console.log("Пример 3:", closestToAverage([2, 4, 6, 8, 10]));
