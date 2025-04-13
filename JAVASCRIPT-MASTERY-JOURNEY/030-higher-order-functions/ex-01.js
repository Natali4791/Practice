console.log(`Функция select принимает массив и имя сотрудника, кладет в массив temp`);
const select = (items, employee) => {
  const temp = [];
  for (const item of items) {
    temp.push(employee(item));
  }
  return temp;
};
console.log(`Функция where принимает массив и логику, кладет в массив temp`);
const where = (items, logic) => {
  const temp = [];
  for (const item of items) {
    if (logic(item)) {
      temp.push(item);
    }
  }
  return temp;
};
// console.log(`Функция doble принимает значение value и умножает на 2`);
const doble = (value) => {
  return value * 2;
};
// console.log(`Функция decimal принимает значение value и умножает на 10`);
const decimal = (value) => {
  return value * 10;
};
let numbers = [10, 25, 38, 41, 10];
console.log(`Заданный массив numbers: `);
console.log(numbers);
console.log(`Функция doble принимает значение value и умножает на 2`);
let res = select(numbers, doble);
console.log(res);
console.log(`Функция decimal принимает значение value и умножает на 10`);
let res1 = select(numbers, decimal);
console.log(res1);

console.log(`Функция logic принимает значение el и возвращает четные числа`);
const logic = (el) => {
  return el % 2 === 0;
};
console.log(`Не знаю как вывести на печать: return el % 2 === 0;`);

console.log(`Функция where принимает значение e и возвращает числа кратные трем`);
res = where(numbers, (e) => e % 5 === 0);
console.log(res);
console.log();
