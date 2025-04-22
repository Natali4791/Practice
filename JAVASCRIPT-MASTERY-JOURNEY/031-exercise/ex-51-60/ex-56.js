const readlineSync = require("readline-sync");

console.log(
  `Разделить массив на два: в одном будут четные числа из исходного массива, в другом - нечетные.`
);
console.log(`function splitArray(arr) {
    let even = [];
    let odd = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return { even, odd };
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

console.log(`Сортировка массива на четные и нечетные числа`);
function splitArray(arr1) {
  let even = [];
  let odd = [];
  for (let num of arr1) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return { even, odd };
}

console.log(splitArray(randomArray));
console.log();

// Пример использования
// console.log("Пример 1:", splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log("Пример 2:", splitArray([11, 22, 33, 44, 55, 66, 77, 88, 99]));
// console.log("Пример 3:", splitArray([2, 4, 6, 8, 10]));
