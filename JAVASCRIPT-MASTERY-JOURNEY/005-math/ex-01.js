// Примеры использования объекта Math
//Константы
console.log(`Значение числа Пи: ${Math.PI}`);
//основание натурального логарифма
console.log(`Значение числа e: ${Math.E}`);
// Основные функции Math
console.log(`Абсолютное значение -10: ${Math.abs(-10)}`);
console.log(`Квадратный корень из 16: ${Math.sqrt(16)}`);
console.log(`2 в степени 3: ${Math.pow(2, 3)}`);
console.log(`Округление вверх 4.3: ${Math.ceil(4.3)}`);
console.log(`Округление вниз 4.7: ${Math.floor(4.7)}`);
console.log(`Математическое округление  4.5: ${Math.round(4.5)}`);
console.log(`Математическое округление  4.4: ${Math.round(4.4)}`);
console.log();
console.log(
  `Неполное частное от целочисленного деления, вместо mod - это округление вниз floor (11 / 4): ${Math.floor(
    11 / 4
  )}`
);
console.log(`Остаток от деления 11 % 4 = ${11 % 4}`);
console.log(`2*4+3=11`);
console.log();
console.log(`Псевдослучайное число от 0 до 1: ${Math.random()}`);
console.log();
let rand3 = Math.floor(Math.random() * 10 - 5);
console.log(`Псевдослучайное число от -5 до 5: ${rand3}`);
console.log();
console.log(`Псевдослучайное число от 1 до 100: ${Math.floor(Math.random() * 100)}`);
console.log();
//Тригонометрические функции
console.log(`Синус угла π радиан: ${Math.sin(Math.PI)}`);
console.log(`Косинус угла π радиан: ${Math.cos(Math.PI)}`);
console.log(`Тангенс угла π/4 радиан: ${Math.tan(Math.PI / 4)}`);

// Логарифмические функции
console.log(`Натуральный логарифм числа e: ${Math.log(Math.E)}`);
console.log(`Десятичный логарифм числа 100: ${Math.log10(100)}`);

// Прочие функции
console.log(`Минимальное число из (1, 2, 3): ${Math.min(1, 2, 3)}`);
console.log(`Максимальное число из (1, 2, 3): ${Math.max(1, 2, 3)}`);
console.log();

const rezult5 = 2 ** 3;
console.log(rezult5);
console.log();
