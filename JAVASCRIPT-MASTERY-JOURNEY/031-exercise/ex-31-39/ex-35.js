// console.log(`Считывание значений из терминала`);
const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(
  `35. Программа, которая заменяет все вхождения заданного символа в строке на другой символ.`
);
console.log(`function replaceChar(inputString, charToReplace, replacementChar) {
    return inputString.split(charToReplace).join(replacementChar);
}

function main() {
    let inputString = prompt("Введите строку:");
    let charToReplace = prompt("Введите символ для замены:");
    let replacementChar = prompt("Введите символ, на который заменить:");
    let replacedString = replaceChar(inputString, charToReplace, replacementChar);
    console.log(replacedString);
}

main();`);
function replaceChar(inputString, charToReplace, replacementChar) {
  return inputString.split(charToReplace).join(replacementChar);
}

function main() {
  console.log("Введите строку:");
  let inputString = readlineSync.question("Enter the string:");
  console.log("Введите символ для замены:");
  let charToReplace = readlineSync.question("Enter the character to replace:");
  console.log("Введите символ, на который заменить:");
  let replacementChar = readlineSync.question("Enter the character to replace with:");
  let replacedString = replaceChar(inputString, charToReplace, replacementChar);
  console.log(replacedString);
}

main();
console.log();
