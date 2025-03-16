Дополнительные возможности преобразования
Отличия Number.isNaN() от isNaN() в JavaScript
В JavaScript есть две функции для проверки значений на NaN (Not-a-Number): глобальная функция isNaN() и метод Number.isNaN(). Хотя они кажутся похожими, между ними есть важные различия, которые нужно понимать.

Глобальная функция isNaN()
Функция isNaN() пытается преобразовать переданное ей значение в число, а затем проверяет, является ли результат NaN. Это может привести к неожиданным результатам:

isNaN("Привет"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("123"); // false
В этих примерах isNaN() возвращает true не только для NaN, но и для строк, которые нельзя преобразовать в число, а также для undefined и объектов.

Метод Number.isNaN()
Number.isNaN(), в отличие от глобальной функции, не пытается преобразовать значение в число. Он просто проверяет, является ли переданное значение числом и равно ли оно NaN:

Number.isNaN(NaN); // true
Number.isNaN("Привет"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("123"); // false
Number.isNaN() возвращает true только для значения NaN и false для всех остальных значений, даже если их нельзя преобразовать в число.

Когда использовать?
Используйте Number.isNaN(), когда вам нужно точно определить, является ли значение именно NaN.
Используйте isNaN(), если вам нужно проверить, можно ли значение успешно преобразовать в число.
Практический пример
console.log(isNaN("123")); // false
console.log(isNaN("Привет")); // true
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN("Привет")); // false
console.log(Number.isNaN(NaN)); // true
Обратите внимание, что isNaN("Привет") возвращает true, потому что "Привет" нельзя преобразовать в число. Однако Number.isNaN("Привет") возвращает false, потому что "Привет" не является значением NaN.

И ещё: NaN - это единственное значение в JavaScript, которое не равно самому себе. Поэтому для проверки на NaN нельзя использовать операторы сравнения:

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
Number.isFinite()
Number.isFinite() - это метод в JavaScript, который проверяет, является ли переданное значение конечным числом.

Синтаксис
Number.isFinite(value)
Особенности
Возвращает true только для конечных чисел.
Возвращает false для NaN, Infinity, -Infinity и нечисловых значений.
Не выполняет приведение типов (в отличие от глобальной функции isFinite()).
Примеры

Number.isFinite(0); // true
Number.isFinite(2e64); // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite("0"); // false (строка)

Функции парсинга чисел в JavaScript
parseInt и Number.parseInt
Эти функции преобразуют строку в целое число.

Функция Описание
parseInt(string, radix) Глобальная функция
Number.parseInt(string, radix) Метод объекта Number (идентичен глобальной функции)
Параметры:

string: строка для парсинга
radix (необязательный): основание системы счисления (от 2 до 36, по умолчанию 10)
Особенности:

Игнорирует пробелы в начале и конце строки
Парсит до первого некорректного символа
Возвращает NaN, если первый символ не может быть преобразован в число
parseFloat и Number.parseFloat
Эти функции преобразуют строку в число с плавающей точкой.

Функция Описание
parseFloat(string) Глобальная функция
Number.parseFloat(string) Метод объекта Number (идентичен глобальной функции)
Параметр:

string: строка для парсинга
Особенности:

Игнорирует пробелы в начале строки
Парсит до первого некорректного символа
Распознает десятичную точку и экспоненциальную запись
Возвращает NaN, если первый символ не может быть преобразован в число
Примеры

parseInt("10"); // 10
parseInt("10.5"); // 10
parseInt("10", 2); // 2 (двоичная система)
Number.parseInt("0xFF", 16); // 255 (шестнадцатеричная система)

parseFloat("10.5"); // 10.5
parseFloat("10"); // 10
Number.parseFloat("1e3"); // 1000

Number.isInteger()

Number.isInteger() - это метод в JavaScript, который определяет, является ли переданное значение целым числом.

Синтаксис
Number.isInteger(value)
Параметры
value: значение, которое нужно проверить на целочисленность.

Возвращаемое значение
true, если значение является целым числом.
false, если значение не является целым числом или не является числом вообще.
Особенности
Метод возвращает true для целых чисел в диапазоне -(2^53 - 1) до 2^53 - 1.
Не выполняет приведение типов: строки, содержащие целые числа, будут давать false.
Возвращает false для NaN, Infinity, -Infinity и любых дробных чисел.
Примеры

Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // false (вне диапазона)

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false

Number.isInteger("10"); // false (строка)
Number.isInteger(true); // false
Number.isInteger([1]); // false

Применение
Этот метод особенно полезен, когда нужно убедиться, что значение является именно целым числом, а не результатом вычислений с плавающей точкой или преобразования других типов данных.

function isValidIndex(index) {
return Number.isInteger(index) && index >= 0;
}

console.log(isValidIndex(5)); // true
console.log(isValidIndex(5.5)); // false
console.log(isValidIndex(-1)); // false

Примечание: В отличие от проверки typeof value === 'number' && value % 1 === 0, метод Number.isInteger() не считает целыми числами значения, выходящие за пределы безопасного диапазона целых чисел в JavaScript.

Исходник
