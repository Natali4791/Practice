const readlineSync = require("readline-sync");
console.log(
  `51. Программа должна создать массив, где каждый элемент равен квадрату его индекса, а затем вывести этот массив на экран.`
);
console.log(`function generateSquareArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i * i);
    }
    return arr;
}`);

console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Печать исходного массива`);
function printArray(input) {
  let arr1 = [];
  for (let i = 0; i < input; i++) {
    arr1.push(i * 1);
  }
  return arr1;
}
const arr3 = printArray(input);
console.log(arr3);
console.log();

console.log(`Массив квадрат индекса`);
function generateSquareArray(input) {
  let arr2 = [];
  for (let i = 0; i < input; i++) {
    arr2.push(i * i);
  }
  return arr2;
}
const arr4 = generateSquareArray(input);
console.log(arr4);
console.log();
