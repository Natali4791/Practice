// console.log(`Считывание значений из терминала`);
const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(
  `32. Программа, которая запрашивает у пользователя ввод чисел и суммирует их до тех пор, пока не будет введено число 0.`
);
console.log(`function sumNumbers() {let sum = 0;let number;`);

console.log(
  `do {number = Number(prompt("Введите число (для завершения введите 0):"));sum += number;`
);
console.log(` } while (number !== 0);return sum;}`);
console.log(
  `function main() {let totalSum = sumNumbers();console.log("Итоговая сумма:", totalSum);}`
);
console.log(`main();`);

function sumNumbers() {
  let sum = 0;
  let number;
  do {
    console.log("Введите число (для завершения введите 0):");
    number = Number(readlineSync.question("Enter a number (enter 0 to complete):"));
    sum += number;
  } while (number !== 0);
  return sum;
}

function main() {
  let totalSum = sumNumbers();
  console.log("Итоговая сумма:", totalSum);
}

main();
console.log();
