// console.log(`Считывание значений из терминала`);
const readlineSync = require("readline-sync");
console.log(`const readlineSync = require("readline-sync")`);
console.log(`31. Программа для вычисления среднего арифметического последовательности чисел.`);
function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  let arithmeticMean = sum / numbers.length;
  return arithmeticMean.toFixed(2);
}
console.log(`let input = prompt("Введите числа через запятую:")`);
console.log(`let input = readlineSync.question("Enter numbers separated by commas:")`);
function inputNumbers() {
  let input = readlineSync.question("Enter numbers separated by commas:");
  return input.split(",").map(Number);
}

function printAverage(average) {
  console.log(`alert("Среднее арифметическое: " + average)`);
  console.log(`console.log("Среднее арифметическое: " + average)`);
  console.log("Среднее арифметическое: " + average);
}

function main() {
  let numbers = inputNumbers();
  let average = calculateAverage(numbers);
  printAverage(average);
}

main();
console.log();
