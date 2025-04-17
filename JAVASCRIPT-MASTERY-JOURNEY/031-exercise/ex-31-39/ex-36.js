// console.log(`Считывание значений из терминала`);
const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(
  `36. Программа, которая сравнивает две строки без учета регистра и определяет, равны ли они.`
);
console.log(`function compareStringsIgnoreCase(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}

function main() {
    let string1 = prompt("Введите первую строку:");
    let string2 = prompt("Введите вторую строку:");
    let result = compareStringsIgnoreCase(string1, string2);
    console.log(result);
}

main();`);

function compareStringsIgnoreCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

function main() {
  console.log("Введите первую строку:");
  let string1 = readlineSync.question("Enter the first line:");
  console.log("Введите вторую строку:");
  let string2 = readlineSync.question("Enter the second line:");
  let result = compareStringsIgnoreCase(string1, string2);
  console.log(result);
}

main();
console.log();
