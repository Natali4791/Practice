//Создание массива с использованием литералов массива
console.log();
console.log("const arr1 = [1, 2, 3, 4, 5];");
const arr1 = [1, 2, 3, 4, 5];
arr1[1] = 20;
console.log(`arr1: ${arr1}`);
console.log();
//Создание массива с использованием конструктора new Array()
console.log('const arr2 = new Array("яблоко", "банан", "апельсин");');
const arr2 = new Array("яблоко", "банан", "апельсин");
console.log(`arr2: ${arr2}`);
console.log();
//Доступ к элементам массива по индексу
console.log(`arr2[0]: ${arr2[0]}`);
console.log();
//Добавление элемента массива
arr2.push("грейпфрут");
console.log(`arr2.push("грейпфрут") - Добавление элемента в конец массива`);
console.log(`arr2: ${arr2}`);
console.log();
//Удаление последнего элемента массива
arr2.pop();
console.log("arr2.pop() - Удаление последнего элемента массива");
console.log(`arr2: ${arr2}`);
console.log();
//Извлечение последнего элемента массива в переменную item
console.log("Извлечение последнего элемента массива в переменную item");
let item = arr1.pop();
console.log(`let item = arr1.pop()`);
console.log(`item: ${item}`);
console.log(`arr1: ${arr1}`);
console.log();
//Извлечение первого элемента массива в переменную item1
console.log("Извлечение первого элемента массива в переменную item1");
let item1 = arr1.shift();
console.log("let item1 = arr1.shift()");
console.log(`item1: ${item1}`);
console.log(`arr1: ${arr1}`);
console.log();
//Добавление элемента в начало массива
console.log("Добавление элемента в начало массива");
arr2.unshift("kiwi");
console.log('arr2.unshift("kiwi")');
console.log(`arr2: ${arr2}`);
console.log();
//Обход массива с использованием цикла for
console.log("Обход массива с использованием цикла for");
console.log("for (let i = 0; i < arr1.length; i++):");
for (let i = 0; i < arr1.length; i++) {
  console.log(`arr1[i]: ${arr1[i]}`);
}
console.log();
// Обход массива с использованием цикла for...of (не можем менять, но читать можем)
// for (let fruit of arr) {
//   console.log(fruit);
// }
// Использование цикла for...of для вывода значений массива array
console.log(`Использование цикла for...of `);
console.log("for (const value of array):");
const array = [10, 20, 30, 40, 50];
for (const value of array) {
  console.log(`value: ${value}`);
}
console.log();

//Использование метода slice для создания подмассива
console.log(`Использование метода slice для создания подмассива`);
console.log(`arr1: ${arr1}`);
const subArr = arr1.slice(1, 3);
console.log(`const subArr = arr1.slice(1, 3), от нулевого, 
  не включая последний третий:`);
console.log(`subArr: ${subArr}`);
console.log();
