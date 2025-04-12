console.log(`numbers = [1, 2, 3, 4, 15, 1, 2, 3, 40, 5, 1, 9]`);
const numbers = [1, 2, 3, 4, 15, 1, 2, 3, 40, 5, 1, 9];
console.log(`Создание массива четных чисел из заданного массива`);
const result = [];
for (let i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  if (item % 2 === 0) {
    result.push(item);
  }
}
console.log(result);

const numbers1 = [1, 2, 3, 4, 15, 1, 2, 3, 40, 5, 1, 9];
console.log(`Создание массива чисел кратных пяти из заданного массива`);
console.log(`с помощью функции getItems(items, div)`);
console.log(`первы аргумент - массив, второй - функция`);
function getItems(items, div) {
  const result1 = [];
  for (let i = 0; i < items.length; i++) {
    const item1 = items[i];
    if (item1 % div === 0) {
      result1.push(item1);
    }
  }
  return result1;
}
const result2 = getItems(numbers1, 5);
console.log(result2);

const numbers2 = [1, 2, 3, -4, -15, 1, -2, 3, -40, 5, 1, -9];
console.log(`Создание массива четных чисел, включая меньше нуля из заданного массива`);
console.log(`с помощью функции getItems(items, checkItem`);
console.log(`первы аргумент - массив, второй - внутрення функция`);

const div2 = (el) => el % 2 === 0;

function getItems1(items1, checkItem) {
  const result3 = [];
  for (let i = 0; i < items1.length; i++) {
    const item2 = items1[i];
    if (checkItem(item2)) {
      result3.push(item2);
    }
  }
  return result3;
}
const result4 = getItems1(numbers2, div2);
console.log(result4);
console.log(`вторым аргументом анонимная функция целиком getItems(numbers2, (e) => e % 2 === 0)`);
const result5 = getItems1(numbers2, (e) => e % 2 === 0);
console.log(result5);
console.log(`теперь можно просто менять кратность getItems1(numbers2, (e) => e % 5 === 0`);
const result6 = getItems1(numbers2, (e) => e % 5 === 0);
console.log(result6);
console.log(`теперь можно просто менять условие getItems1(numbers2, (e) => e < 0)`);
const result7 = getItems1(numbers2, (e) => e < 0);
console.log(result7);
console.log(`теперь можно просто менять условие getItems1(numbers2, (e) => e > 0)`);
const result8 = getItems1(numbers2, (e) => e > 0);
console.log(result8);

console.log(`Метод filter для массивов numbers2.filter((e) => e < 0)`);
const resFilter = numbers2.filter((e) => e < 0);
console.log(resFilter);
console.log();
console.log(`numbers3 = [1, 2, 3, 4]`);
const numbers3 = [1, 2, 3, 4];
function select(items, logic) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    result.push(logic(element));
  }
  return result;
}
res = select(numbers3, (e) => e ** 2);
console.log(`select(numbers3, (e) => e ** 2):`);
console.log(res);
const resSelect = select(numbers3, (e) => Math.pow(e, 2));
console.log(`select(numbers3, (e) => Math.pow(e, 2))`);
console.log(resSelect);
console.log();
const resSelect1 = select(numbers3, (e) => e + 1);
console.log(`select(numbers3, (e) => e + 1)`);
console.log(resSelect1);
console.log(`numbers3.map((e) => e ** 2)`);
const resSelect2 = numbers3.map((e) => e ** 2);
console.log(resSelect2);
console.log();
