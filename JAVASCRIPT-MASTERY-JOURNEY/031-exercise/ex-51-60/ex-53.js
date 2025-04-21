const readlineSync = require("readline-sync");

console.log(
  `Программа создания массива из N элементов, где каждый элемент будет являться следующим четным числом. `
);
console.log(`function generateEvenNumbers(N) {
    const result = [];
    let current = 2;
    for (let i = 0; i < N; i++) {
        result.push(current);
        current += 2;
    }
    return result;
}`);

console.log(`Запрос количества элементов массива`);
console.log(`Введите количество чисел массива: `);
const input = readlineSync.question("Enter the number of numbers in the array: ");

console.log(`Массив четных чисел`);
function generateEvenNumbers(input) {
  const result = [];
  let current = 2;
  for (let i = 0; i < input; i++) {
    result.push(current);
    current += 2;
  }
  return result;
}
const even = generateEvenNumbers(input);
console.log(even);
console.log();
console.log(`Пример использования`);
console.log("Пример 1:", generateEvenNumbers(5));
console.log("Пример 2:", generateEvenNumbers(3));
console.log("Пример 3:", generateEvenNumbers(0));
console.log();
