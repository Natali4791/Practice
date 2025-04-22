const readlineSync = require("readline-sync");

console.log(
  `Создать массив, в котором каждый элемент является суммой его индекса и значения предыдущего элемента массива. Первый элемент равен 0.`
);
console.log(
  `Программа должна принимать на вход размер массива. Затем она должна создать массив такой длины и заполнить его значениями, где каждый элемент равен сумме его индекса и значения предыдущего элемента. Первый элемент массива равен 0, а остальные вычисляются по формуле arr[i] = i + arr[i-1].`
);

console.log(`function generateArray(size) {
    let arr = [0];
    for (let i = 1; i < size; i++) {
        arr.push(i + arr[i - 1]);
    }
    return arr;
}`);

console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Последовательность от 0 до введенного числа, где arr[i] = i + arr[i-1].`);
function generateArray(size) {
  let arr = [0];
  for (let i = 1; i < size; i++) {
    arr.push(i + arr[i - 1]);
  }
  return arr;
}

console.log(`Вывод массива`);
function printArray(arr) {
  console.log(arr);
}
console.log(`Печать полученного массива`);
const randomArray = generateArray(input);
console.log("Последовательность от 0 до введенного числа, где arr[i] = i + arr[i-1]: ");
printArray(randomArray);
console.log();

// Пример использования
// console.log("Пример 1:", generateArray(5));
// console.log("Пример 2:", generateArray(8));
// console.log("Пример 3:", generateArray(3));
