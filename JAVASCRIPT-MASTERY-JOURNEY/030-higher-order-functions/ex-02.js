console.log(
  `Функция высших порядков - это функция, которая принимает функцию как аргумент или возвращает функцию как результат`
);
console.log();
console.log(`Пример 1: Функция, принимающая другую функцию как аргумент`);
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i); // Вызов переданной функции
  }
}
console.log(`Использование функции высших порядков for (let i = 0; i < times; i++) {action(i);`);
console.log(`repeat(3, console.log) выведет 0, 1, 2 в консоль`);
repeat(3, console.log);

console.log(`Пример 2: Функция, возвращающая другую функцию: function multiplier(factor)`);
console.log(
  `Возвращаемая функция умножает аргумент на factor: return function (number) {return number * factor}`
);
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
console.log(`Создание функции, которая удваивает значение: let twice = multiplier(2)`);
console.log(`console.log(twice(5)): Выведет 10`);
let twice = multiplier(2);
console.log(twice(5));

console.log(`Пример 3: Использование функций высших порядков с массивами: `);
console.log(`numbers = [1, 2, 3, 4, 5]`);
const numbers = [1, 2, 3, 4, 5];
console.log(`Функция map принимает другую функцию и применяет её к каждому элементу массива `);
console.log(
  `Удваиваем каждое число: const doubled = numbers.map(function (number) {return number * 2`
);
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);
console.log(
  `Функция filter также принимает функцию и использует её для выбора четных чисел массива`
);
const evens = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evens);
console.log(
  `Пример 4: Функции высших порядков в современном JavaScript с использованием стрелочных функций`
);

console.log(`Утраиваем каждое число: numbers.map((number) => number * 3):`);
const tripled = numbers.map((number) => number * 3); //
console.log(tripled); // Выведет [3, 6, 9, 12, 15]
console.log(`Оставляем числа больше 3: numbers.filter((number) => number > 3)`);
const greaterThanThree = numbers.filter((number) => number > 3);
console.log(greaterThanThree); // Выведет [4, 5]
console.log();
