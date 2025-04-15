console.log(`21. Программ для удаления всех пробелов из заданной строки.`);
console.log(
  `function removeSpaces(inputString) {return inputString.replace(/обратный слэш_s/g, '');}`
);
console.log(
  `function main() {const input = prompt("Введите строку:");const result = removeSpaces(input);console.log(result);}`
);
console.log(`main();`);
function removeSpaces(inputString) {
  return inputString.replace(/\s/g, "");
}
const input1 = "Это тестовая строка";
const input2 = " Пробелы в начале и конце ";
const input3 = "Пробелы между словами";
const result1 = removeSpaces(input1);
console.log(result1);
const result2 = removeSpaces(input2);
console.log(result2);
const result3 = removeSpaces(input3);
console.log(result3);
// function main() {
//   const input = prompt("Введите строку:");
// const result = removeSpaces(input);
// console.log(result);
// }
// main();
console.log();
console.log(`22. Программа для расчета бонусных баллов за покупки.`);
console.log(
  `function calculateBonus(amount) {if (amount > 1000) {return "Вам начислено Доллар Скобка Math.floor(amount / 10)Скобка бонусных баллов";} else {`
);
console.log(`return "Сумма покупки не превышает порог для начисления бонусных баллов";}}`);
function calculateBonus(amount) {
  if (amount > 1000) {
    return `Вам начислено ${Math.floor(amount / 10)} бонусных баллов`;
  } else {
    return "Сумма покупки не превышает порог для начисления бонусных баллов";
  }
}
console.log(`console.log(calculateBonus(1500))`);
console.log(calculateBonus(1500));
console.log();
console.log(
  `23. Программа для определения типа треугольника (равносторонним, равнобедренным или разносторонним) по длинам его сторон.`
);
console.log(`проверить, могут ли введенные значения образовать треугольник.`);
console.log(`function checkTriangle(side1, side2, side3) `);
console.log(`{if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {`);
console.log(`  if (side1 === side2 && side2 === side3) {
            return "Равносторонний треугольник";`);
console.log(` } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "Равнобедренный треугольник";
        } else {
            return "Разносторонний треугольник";
        }`);
console.log(`    } else {
        return "Треугольник с такими сторонами не существует";
    }
}`);
function checkTriangle(side1, side2, side3) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
      return "Равносторонний треугольник";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Равнобедренный треугольник";
    } else {
      return "Разносторонний треугольник";
    }
  } else {
    return "Треугольник с такими сторонами не существует";
  }
}
console.log(`console.log(checkTriangle(2, 3, 4))`);
console.log(checkTriangle(2, 3, 4));
console.log();
console.log(`24. Программа для калькуляции количества дней до нового года.`);
console.log(`function daysUntilNewYear() {const today = new Date();`);
console.log(`const today = new Date();`);
console.log(`const nextYear = new Date(today.getFullYear() + 1, 0, 1);`);
console.log(`const daysLeft = Math.ceil((nextYear - today) / (1000 * 60 * 60 * 24));`);
console.log(`return daysLeft > 0 ? "До нового года осталось Доллар{daysLeft} дней." : "Сегодня уже новый год!";
}`);
function daysUntilNewYear() {
  const today = new Date();
  const nextYear = new Date(today.getFullYear() + 1, 0, 1);
  const daysLeft = Math.ceil((nextYear - today) / (1000 * 60 * 60 * 24));
  return daysLeft > 0 ? `До нового года осталось ${daysLeft} дней.` : "Сегодня уже новый год!";
}
console.log(`console.log(daysUntilNewYear())`);
console.log(daysUntilNewYear());
console.log();
console.log(`25. Программа для вывода всех четных чисел от 2 до N.`);
console.log(`function getEvenNumbers(N) {let result = [];
    for (let i = 2; i <= N; i += 2) {result.push(i);}return result;}`);
console.log(`function printNumbers(numbers) {for (let number of numbers) {console.log(number);}}`);
console.log(`let evenNumbers = getEvenNumbers(10); printNumbers(evenNumbers);`);
function getEvenNumbers(N) {
  let result = [];
  for (let i = 2; i <= N; i += 2) {
    result.push(i);
  }
  return result;
}
function printNumbers(numbers) {
  for (let number of numbers) {
    console.log(number);
  }
}
let evenNumbers = getEvenNumbers(10);
printNumbers(evenNumbers);
console.log();
console.log(`26. Программа для расчета факториала числа.`);
console.log(
  `function factorial(N) {if (N === 0 || N === 1) {return 1;}return N * factorial(N - 1);}`
);
console.log(
  `function inputNumber() {return parseInt(prompt("Введите число для расчета факториала:"));}`
);
console.log(
  `function printResult(result) {console.log("Факториал числа Доллар{result[0]}! = Доллар{result[1]}");}`
);
console.log(`let number = inputNumber();
let result = [number, factorial(number)];
printResult(result);`);

function factorial(N) {
  if (N === 0 || N === 1) {
    return 1;
  }
  return N * factorial(N - 1);
}

// function inputNumber() {
//   return parseInt(prompt("Введите число для расчета факториала:"));
// }

// function printResult(result) {
//   console.log(`Факториал числа ${result[0]}! = ${result[1]}`);
// }

// let number = inputNumber();
// let result = [number, factorial(number)];
// printResult(result);

let number = 10;
let result = [number, factorial(number)];
console.log(`Факториал числа ${result[0]}! = ${result[1]}`);
console.log();
console.log(`27. Программа для подсчета количества цифр в заданном целом числе.`);
console.log(`function countDigits(number) {`);
console.log(`return Math.abs(number).toString().length;}`);
console.log(`function inputNumber() {return parseInt(prompt("Введите целое число:"));}`);
console.log(
  `function printResult(number, count) {console.log("Количество цифр в числе Доллар{number}: Доллар{count}");}`
);
console.log(
  `let number = inputNumber(); let count = countDigits(number); printResult(number, count);`
);

function countDigits(number) {
  return Math.abs(number).toString().length;
}

// function inputNumber() {
//   return parseInt(prompt("Введите целое число:"));
// }
// function printResult(number, count) {
//   console.log(`Количество цифр в числе ${number}: ${count}`);
// }
// let number = inputNumber();
// let count = countDigits(number);
// printResult(number, count);

let number1 = 45;
let count = countDigits(number1);
console.log(`Количество цифр в числе ${number1}: ${count}`);
console.log();
console.log(`28. Программа для вывода первых N элементов последовательности Фибоначчи.`);
console.log(`function fibonacciSequence(N) {let sequence = [1, 1];`);
console.log(
  `  for (let i = 2; i < N; i++) {sequence.push(sequence[i - 1] + sequence[i - 2]);}return sequence;}`
);
console.log(
  `function inputNumber() {return parseInt(prompt("Введите количество элементов последовательности:"));}`
);
console.log(`function printResult(sequence) {console.log(sequence.join(', '));}`);
console.log(`let N = inputNumber();
let sequence = fibonacciSequence(N);
printResult(sequence);`);
function fibonacciSequence(N) {
  let sequence = [1, 1];
  for (let i = 2; i < N; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// function inputNumber() {
//   return parseInt(prompt("Введите количество элементов последовательности:"));
// }

// function printResult(sequence) {
//   console.log(sequence.join(", "));
// }

// let N = inputNumber();
// let sequence = fibonacciSequence(N);
// printResult(sequence);

let N = 5;
let sequence = fibonacciSequence(N);
console.log(sequence.join(", "));
console.log();
console.log(`29. Программа для определения, является ли заданное число простым.`);
console.log(`function isPrime(number) {if (number <= 1) {return false;}`);
console.log(`for (let i = 2; i <= Math.sqrt(number); i++) {`);
console.log(`  if (number % i === 0) {return false;}}return true;}`);
console.log(`function inputNumber() {return parseInt(prompt("Введите число:"));}`);
console.log(
  `function printResult(number, isPrime) {if (isPrime) {console.log("Число Доллар{number} является простым.");`
);
console.log(`} else {console.log("Число Доллар{number} не является простым.");}}`);
console.log(`let number = inputNumber(); let prime = isPrime(number); printResult(number, prime);`);

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// function inputNumber() {
// return parseInt(prompt("Введите число:"));
// }

function printResult(number, isPrime) {
  if (isPrime) {
    console.log(`Число ${number} является простым.`);
  } else {
    console.log(`Число ${number} не является простым.`);
  }
}

// let number = inputNumber();
// let prime = isPrime(number);
// printResult(number, prime);

let number2 = 13;
let prime = isPrime(number2);
printResult(number2, prime);
console.log();
console.log(`30. Программа для печати всех делителей заданного числа.`);
console.log(
  `Реализация должна быть разделена на функции для ввода числа, вычисления делителей и печати результата.`
);
console.log(`function calculateDivisors(N) {let divisors = [];`);
console.log(``);
console.log(`for (let i = 1; i <= N; i++) {if (N % i === 0) {divisors.push(i);}}`);
console.log(`return divisors;}`);
console.log(`function printDivisors(divisors) {console.log(divisors.join(', '));}`);
console.log(`function inputNumber() {return parseInt(prompt("Введите целое число:"));}`);
console.log(
  `function main() {let N = inputNumber();let divisors = calculateDivisors(N);printDivisors(divisors);}`
);
console.log(`main();`);
function calculateDivisors(N) {
  let divisors = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// function printDivisors(divisors) {
//   console.log(divisors.join(", "));
// }

// function inputNumber() {
//   return parseInt(prompt("Введите целое число:"));
// }

// function main() {
//   let N = inputNumber();
//   let divisors = calculateDivisors(N);
//   printDivisors(divisors);
// }

// main();

function main() {
  let N = 10;
  let divisors = calculateDivisors(N);
  console.log(divisors.join(", "));
}

main();
console.log();
