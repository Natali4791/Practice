//Часть 1: Операторы
let x = 10;
let y = 5;
console.log(`Сумма: ${x + y}`);
console.log(`Разность: ${x - y}`);
console.log(`Произведение: ${x * y}`);
console.log(`Частное: ${x / y}`);
console.log(`Частное: ${10 / 4}`);
console.log(`Остаток: ${x % y}`);
console.log(`Частное: ${10 % 4}`);

//Часть 2: Операторы и приоритет операций
let a = 9;
let b = 2;
console.log(`Порядок операций: ${(2 + 3) * 4}`);
console.log(`Порядок операций: ${(2 + a) * b}`);

//Часть 3: Инкремент и декремент
let count1 = 5;
count1++;
console.log(`Инкремент: ${count1}`);

let count2 = 10;
count2--;
console.log(`Декремент: ${count2}`);

//Присваивание с арифметикой
let num = 5;
num += 3;
console.log(`Присваивание с добавлением: ${num}`);

num -= 2;
console.log(`Присваивание с вычитанием: ${num}`);

num *= 4;
console.log(`Присваивание с умножением: ${num}`);

num /= 4;
console.log(`Присваивание с делением: ${num}`);

//Замечание по поводу инкремента и декремента
let count = 10;
console.log(`count = ${count} `);
// count++;
// console.log(`count = ${count} - постфиксный инкремент`);
++count;
console.log(`count = ${count} - префиксный инкремент`);

// Возьмем новую переменную (инкременты)
// let oldCount = 10;
// let newCount = 0;
// console.log(`count: ${oldCount}; newCount: ${newCount}`);
// newCount = ++oldCount;
// console.log(`oldCount: ${oldCount} - префиксный инкремент`);
// console.log(`oldCount: ${oldCount}; newCount: ${newCount}`);

// let oldCount1 = 10;
// let newCount1 = 0;
// console.log(`oldCount1: ${oldCount1}; newCount1: ${newCount1}`);
// newCount1 = oldCount1++;
// console.log(`oldCount1: ${oldCount1} - постфиксный инкремент`);
// console.log(`oldCount1: ${oldCount1}; newCount1: ${newCount1}`);

// Возьмем новую переменную (декременты)
let oldCount = 10;
let newCount = 0;
console.log(`count: ${oldCount}; newCount: ${newCount}`);
newCount = --oldCount;
console.log(`oldCount: ${oldCount} - префиксный декремент`);
console.log(`oldCount: ${oldCount}; newCount: ${newCount}`);

let oldCount1 = 10;
let newCount1 = 0;
console.log(`oldCount1: ${oldCount1}; newCount1: ${newCount1}`);
newCount1 = oldCount1--;
console.log(`oldCount1: ${oldCount1} - постфиксный декремент`);
console.log(`oldCount1: ${oldCount1}; newCount1: ${newCount1}`);
