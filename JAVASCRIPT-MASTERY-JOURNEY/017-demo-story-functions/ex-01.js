//Поиск максимального числа из девяти
let a1 = 11;
let a2 = 3100;
let a3 = 5;

let a4 = 108;
let a5 = 501;
let a6 = 100;

let a7 = 80;
let a8 = 300;
let a9 = 8100;

let max1;
let max2;
let max3;
let max;

//Выбираем победителя первой тройки a1-a3
// if (a1 > a2 && a1 > a3) {
//   max1 = a1;
// } else {
//   if (a2 > a3) {
//     max1 = a2;
//   } else {
//     max1 = a3;
//   }
// }
// console.log();
// console.log(`a1, a2, a3: `);
// console.log(a1, a2, a3);
// console.log(`max1: ${max1}`);
// console.log();
console.log(`закоментили первую тройку игроков`);
//Выбираем победителя второй тройки a4-a6
// if (a4 > a5 && a4 > a6) {
//   max2 = a4;
// } else {
//   if (a5 > a6) {
//     max2 = a5;
//   } else {
//     max2 = a6;
//   }
// }
// console.log(`a4, a5, a6: `);
// console.log(a4, a5, a6);
// console.log(`max2: ${max2}`);
// console.log();
console.log(`закоментили вторую тройку игроков`);
//Выбираем победителя третьей тройки a7-a9
// if (a7 > a8 && a7 > a9) {
//   max3 = a7;
// } else {
//   if (a8 > a9) {
//     max3 = a8;
//   } else {
//     max3 = a9;
//   }
// }
// console.log(`a7, a8, a9: `);
// console.log(a7, a8, a9);
// console.log(`max3: ${max3}`);
// console.log();
console.log(`закоментили третью тройку игроков`);

//Выбираем победителя финальной тройки max1-max3
// if (max1 > max2 && max1 > max3) {
//   max = max1;
// } else {
//   if (max2 > max3) {
//     max = max2;
//   } else {
//     max = max3;
//   }
// }
// console.log(`max1, max2, max3: `);
// console.log(max1, max2, max3);
// console.log(`max: ${max}`);
// console.log();
console.log(`закоментили финальную тройку игроков`);

// Функция, определяющая максимальное из трех чисел
console.log(`Функция, определяющая максимальное из трех чисел`);
console.log(`Создали функцию function assiatantMax(num1, num2, num3) `);
//Создали функцию function assiatantMax(num1, num2, num3) {
function assiatantMax(num1, num2, num3) {
  let tempMax;
  if (num1 > num2 && num1 > num3) {
    tempMax = num1;
  } else {
    if (num2 > num3) {
      tempMax = num2;
    } else {
      tempMax = num3;
    }
  }
  console.log(`num1, num2, num3: `);
  console.log(num1, num2, num3);
  console.log(`tempMax: ${tempMax}`);
  console.log();
}
console.log(`вызвали функцию: assiatantMax(a1, a2, a3) `);
console.log();
console.log(`assiatantMax(a1, a2, a3)`);
assiatantMax(a1, a2, a3);
console.log(`assiatantMax(a4, a5, a6)`);
assiatantMax(a4, a5, a6);
console.log(`assiatantMax(a7, a8, a9)`);
assiatantMax(a7, a8, a9);
