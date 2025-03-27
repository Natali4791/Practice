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

console.log(`Функция, определяющая максимальное из трех чисел`);
console.log(`Создали функцию: function assiatantMax(num1, num2, num3) `);
console.log(`вместо вывода на экран, сохраняем временную переменную: return tempMax 
  `);
function assistantMax(num1, num2, num3) {
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

  console.log(`return tempMax`);
  return tempMax;
}

console.log();
console.log(`max1 = assistantMax(a1, a2, a3) `);
max1 = assistantMax(a1, a2, a3);
console.log(`max1: ${max1}`);
console.log();
console.log(`max2 = assistantMax(a4, a5, a6) `);
max2 = assistantMax(a4, a5, a6);
console.log(`max2: ${max2}`);
console.log();
console.log(`max3 = assistantMax(a7, a8, a9) `);
max3 = assistantMax(a7, a8, a9);
console.log(`max3: ${max3}`);
console.log();
console.log(`max = assistantMax(max1, max2, max3) `);
max = assistantMax(max1, max2, max3);
console.log(`max: ${max}`);
console.log();
