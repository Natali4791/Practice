console.log();
//Конкатенация
let str1 = "Hello, ";
let str2 = "world!";
result = str1 + str2;
console.log(result);
//Шаблонные или интерполированные строки
let firstName = "Alice";
let greeting = `Привет, ${firstName}!`;
console.log(greeting);
//Метод конкат
str1 = "Привет, ";
str2 = "мир!";
result = str1.concat(str2);
result2 = str2.concat(str1);
console.log(result);
console.log(result2);
//Шаблон замены replace
let age = 16;
firstName = "Алиса";
greeting = "Привет, {firstName}, ты стала взрослой, праздник наступил и тебе уже {age} лет."
  .replace("{firstName}", firstName)
  .replace("{age}", age);
console.log(greeting);
//Интерполяция переменных
age = 16;
firstName = "Алиса";
greeting = `Привет, ${firstName}, ты стала взрослой, праздник наступил и тебе уже ${age} лет.`;
console.log(greeting);
//Интерполяция выражений
let x = 10;
let y = 5;
result = `Сумма ${x} и ${y} равна ${x + y}`;
console.log(result);
//Многострочные строки
let multiLine = `
Это
многострочная
строка
`;
console.log(multiLine);
//Интерполяция символов
let symbol = `\u{1F60A}`;
console.log(symbol);
//Скейт последовательности
multiLine = "Это многострочная строка";
console.log(multiLine);
console.log(symbol);
multiLine = "Это\nмногострочная\nстрока";
console.log(multiLine);
console.log(symbol);
multiLine = "Это\n \tмногострочная\nстрока";
console.log(multiLine);
console.log(symbol);
multiLine = `Это\n \tмного\`строчная\nстрока`;
console.log(multiLine);
console.log(symbol);
console.log();
