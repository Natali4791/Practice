const readlineSync = require("readline-sync");
console.log(
  `37. Программа, которая форматирует число с плавающей точкой, оставляя два знака после запятой.`
);

function formatFloatNumber(number) {
  return parseFloat(number).toFixed(2);
}

function main() {
  console.log(`Введите число с плавающей точкой:`);
  let inputNumber = readlineSync.question("Enter a floating point number:");
  let formattedNumber = formatFloatNumber(inputNumber);
  console.log(formattedNumber);
}

main();
console.log();
