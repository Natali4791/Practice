const readlineSync = require("readline-sync");
console.log(
  `Программа, включающая функции для генерации массива случайными числами, сортировки выбором минимального элемента и вывода исходного и отсортированного массивов.`
);
console.log(`function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100)); // Случайные числа от 0 до 99
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function printArray(arr) {
  console.log(arr.join(', '));
}

// Пример использования
const size = 5; // Ввод размера массива
const randomArray = generateRandomArray(size);
console.log("Исходный массив:");
printArray(randomArray);
const sortedArray = selectionSort(randomArray);
console.log("Отсортированный массив:");
printArray(sortedArray);`);
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100)); // Случайные числа от 0 до 99
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function printArray(arr) {
  console.log(arr.join(", "));
}

// Пример использования
const size = 10; // Ввод размера массива
const randomArray = generateRandomArray(size);
console.log("Исходный массив:");
printArray(randomArray);
const sortedArray = selectionSort(randomArray);
console.log("Отсортированный массив:");
printArray(sortedArray);
console.log();
