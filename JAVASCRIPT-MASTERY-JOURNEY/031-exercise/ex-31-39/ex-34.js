const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(
  `34. Программа, которая инвертирует (переворачивает) заданную строку и выводит ее длину.`
);
// console.log(`function reverseAndPrintLength(inputString) {
//     let reversedString = inputString.split('').reverse().join('');
//     console.log(`Инвертированная строка: ${reversedString}`);
//     console.log(`Длина строки: ${inputString.length}`);
// }

// function main() {
//     let inputString = prompt("Введите строку:");
//     reverseAndPrintLength(inputString);
// }

// main();`);
function reverseAndPrintLength(inputString) {
  let reversedString = inputString.split("").reverse().join("");
  console.log(`Инвертированная строка: ${reversedString}`);
  console.log(`Длина строки: ${inputString.length}`);
}

function main() {
  console.log(`Введите строку:`);
  let inputString = readlineSync.question("Enter the line:");
  reverseAndPrintLength(inputString);
}

main();
console.log();
