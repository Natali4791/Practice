// console.log(`Считывание значений из терминала`);
const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(
  `33. Программа, которая выводит на экран квадрат из звездочек (*), сторона квадрата равна N, где N — число, введенное пользователем.`
);
console.log(`function printSquare(size) {let row = "*".repeat(size);`);
console.log(`  for (let i = 0; i < size; i++) {
        console.log(row);
    }
}`);
console.log(`function main() {
    let size = parseInt(readlineSync.question("Введите размер квадрата:"));
    printSquare(size);
}`);
console.log(`main();`);
function printSquare(size) {
  let row = "*".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}

function main() {
  console.log("Введите размер квадрата:");
  let size = parseInt(readlineSync.question("Enter the size of the square:"));
  printSquare(size);
}

main();
console.log(`main();`);
console.log();
