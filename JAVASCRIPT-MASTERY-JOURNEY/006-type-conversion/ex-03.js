// Примеры ошибок и путаницы при преобразовании типов

// Непонимание различий между типами данных
let confusionExample = num + str;
console.log(confusionExample); // "1020"

// Неявное преобразование типов
let implicitExample = num.toString() + str;
console.log(implicitExample); // "1020"

// Преобразование строки в число
let intFromString = Number.parseInt("10");
console.log(`Преобразование строки "10" в целое число: ${intFromString}`);

let floatFromString = Number.parseFloat("10.5");
console.log(`Преобразование строки "10.5" в число с плавающей точкой: ${floatFromString}`);

// Проверка на NaN и целое число
console.log(`Является ли "abc" NaN: ${Number.isNaN(Number("abc"))}`); // Исправлено

console.log(`Является ли 5 целым числом: ${Number.isInteger(5)}`);
console.log(`Является ли 5.5 целым числом: ${Number.isInteger(5.5)}`);

// Проверка на конечное число
console.log(`Является ли 5.5 конечным числом: ${Number.isFinite(5.5)}`); // Исправлено

// Деление на ноль
console.log(`Результат деления -10 на 0: ${-10 / 0}`); // Добавлено пояснение
