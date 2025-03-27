// Задача поменялась, надо минимальное число из девяти
console.log(`Задача поменялась, надо минимальное число из девяти`);
console.log(`Функция, определяющая минимальное из трех чисел`);
console.log(`Создали функцию: function assiatantMin(num1, num2, num3) `);
console.log(`значение, которое возвращает функция, с помошью служебного слова return сохраняем в переменную tempMax: return tempMax 
  `);
function assistantMin(num1, num2, num3) {
  let tempMin;
  if (num1 < num2 && num1 < num3) {
    tempMin = num1;
  } else {
    if (num2 < num3) {
      tempMin = num2;
    } else {
      tempMin = num3;
    }
  }

  console.log(`return tempMin`);
  return tempMin;
}

let a1 = 11;
let a2 = 3;
let a3 = 5;

let a4 = 108;
let a5 = 501;
let a6 = 1;

let a7 = 80;
let a8 = -300;
let a9 = 8100;

console.log(a1, a2, a3);
console.log(`min1 = assistantMin(a1, a2, a3) `);
let min1 = assistantMin(a1, a2, a3);
console.log(`min1: ${min1}`);
console.log(a4, a5, a6);
console.log(`min2 = assistantMin(a4, a5, a6) `);
let min2 = assistantMin(a4, a5, a6);
console.log(`min2: ${min2}`);
console.log(a7, a8, a9);
console.log(`min3 = assistantMin(a7, a8, a9) `);
let min3 = assistantMin(a7, a8, a9);
console.log(`min3: ${min3}`);
console.log();
console.log(`min = assistantMin(min1, min2, min3) `);
let min = assistantMin(min1, min2, min3);
console.log(`min: ${min}`);
console.log();
