// Пример с использованием if
let age = 115;
if (age >= 18) {
  console.log("вы совершеннолетний");
} else {
  console.log("вы несовершеннолетний");
}
// Пример с использованием if...else if...else
let num = 10;

if (num > 0) {
  console.log("Число положительное");
} else if (num < 0) {
  console.log("Число отрицательное");
} else {
  console.log("Число равно нулю");
}

// Пример с использованием нескольких блоков else if
let temperature = -25;

if (temperature < 0) {
  console.log("На улице морозно");
} else if (temperature >= 0 && temperature < 15) {
  console.log("На улице прохладно");
} else if (temperature >= 15 && temperature < 25) {
  console.log("На улице тепло");
} else {
  console.log("На улице жарко");
}

// Пример с использованием вложенного if
let num1 = 103;
let num2 = 500;
if (num1 > num2) {
  if (num1 % 2 === 0) {
    console.log("первое число больше второго и является четным");
  } else {
    console.log("первое число больше второго, но не является четным");
  }
} else {
  console.log("первое число не больше второго");
}
