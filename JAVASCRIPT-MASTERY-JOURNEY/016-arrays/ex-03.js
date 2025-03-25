//Заполнить массив случайными числами и вывести на экран
console.log();
console.log(`Заполнить массив случайными числами и вывести на экран`);
const array = [];
console.log(array);
console.log(`добавить пять эл-тов (положительных целых чисел от 0 до 9) в цикле`);
console.log(`for (let index = 0; index < 5; index++) {array.push(Math.floor(Math.random() * 10))}`);
for (let index = 0; index < 5; index++) {
  const el = Math.floor(Math.random() * 10);
  array.push(el);
}
console.log(array);
console.log();
const array1 = [];
console.log(`добавить пять эл-тов (и отрицательных целых чисел) в цикле`);
console.log(
  `for (let index = 0; index < 5; index++) {array.push(Math.floor(Math.random() * 10)-5)}`
);
for (let index = 0; index < 5; index++) {
  const el = Math.floor(Math.random() * 10) - 5;
  array1.push(el);
}
console.log(array1);
console.log();
// Найти сумму элементов массива
console.log(`Найти сумму элементов массива при его формировании (sum += el1)`);
const array2 = [];
let sum = 0;
for (let index = 0; index < 5; index++) {
  const el1 = Math.floor(Math.random() * 10) - 5;
  array2.push(el1);
  sum += el1;
}
console.log(array2);
console.log(`sum: ${sum}`);
console.log();
// Найти сумму элементов массива
console.log(`Найти сумму элементов готового массива  (sum += el1)`);
const array3 = [];

for (let index = 0; index < 5; index++) {
  const el2 = Math.floor(Math.random() * 10) - 5;
  array3.push(el2);
}
console.log(array3);

let sum1 = 0;
for (let i = 0; i < array3.length; i++) {
  const element = array3[i];
  console.log(`[${element}]`);
  sum1 += element;
}
console.log(`sum: ${sum1}`);
console.log();
//Подключение строк в массиве
console.log(`Подключение строк в массиве`);
let strOut = "";
for (let i = 0; i < array3.length; i++) {
  const element2 = array3[i];
  strOut += `[${element2}]`;
}
console.log(strOut);
console.log();
