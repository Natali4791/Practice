//Создание строк
let str1 = "Привет мир!";
let str2 = "Hello, world!";
let str3 = `Это шаблонная строка`;
console.log(`str2: ${str2}`);
//Доступ к символам
let str = "JavaScript";
console.log(`str: ${str}`);
console.log(`str[0]: ${str[0]}`);
console.log(`str.charAt(1): ${str.charAt(1)}`);

//Длина строки
console.log(`str.length: ${str.length}`);

//Сложение строк - конкатенация
str1 = "Hello, ";
str2 = "world!";
let result = str1 + str2;
console.log(`str1 + str2: ${result}`);
console.log();

//Методы преобразования
str = "JavaScript";
console.log(`str.toUpperCase(): ${str.toUpperCase()}`);
console.log(`str: ${str}`);
console.log(`str.toLowerCase(): ${str.toLowerCase()}`);
console.log(`str: ${str}`);
str = str.toUpperCase();
console.log(`str = str.toUpperCase(): ${str}`);
str = str.toLowerCase();
console.log(`str = str.toLowerCase(): ${str}`);

//Поиск подстроки Индексация с нуля 0123456789
str = "JavaScript";
console.log(`str.indexOf("Script"): ${str.indexOf("Script")}`);
console.log(`str.lastIndexOf("pt"): ${str.lastIndexOf("pt")}`);
console.log(`str.lastIndexOf("a"): ${str.lastIndexOf("a")}`);
console.log(`str.IndexOf("a"): ${str.indexOf("a")}`);
console.log(str);
console.log(`str.lastIndexOf("s"): ${str.lastIndexOf("s")}`);
console.log(`str.lastIndexOf("S"): ${str.lastIndexOf("S")}`);
console.log(str);
//Проверка включения подстроки в строку
console.log(`str.includes("Java"): ${str.includes("Java")}`);
console.log(`str.includes("java"): ${str.includes("java")}`);
console.log();
//Обрезка строки
str = "JavaScript";
console.log(`str = "JavaScript": ${str}`);
console.log(`str.substring(0, 4): ${str.substring(0, 4)}`); //Java
console.log(`str.substring(4, 10): ${str.substring(4, 10)}`); //Script
console.log(`str.substring(4, 10): ${str.substring(4, 10)}`); //Script
console.log(`str.substring(4): ${str.substring(4)}`); //Script
console.log(`str = "JavaScript": ${str}`);
console.log(`str.slice(5): ${str.slice(5)}`);
console.log(`str.slice(-7): ${str.slice(-7)} , где 0:J, -1:t, -2:p`);
console.log();
//Удаление пробелов в начале и конце строки
str = "   Hello, world!   ";
console.log(`"   Hello, world!   :" 1${str}1`);
console.log(`str.trimStart() 1${str.trimStart()}1`);
console.log(`str.trimEnd() 1${str.trimEnd()}1`);
console.log(`str.trim() 1${str.trim()}1`);
console.log();
//Метод split разделяет строку по словам и выдает массив
str = "JavaScript is awesome";
console.log(str);
console.log(`str.split(" "): ${str.split(" ")}`);
console.log(str.split(" "));
console.log();
str = "JavaScript, is awesome";
console.log(str);
console.log(`str.split(" "): ${str.split(" ")}`);
console.log(str.split(" "));
console.log();
str = "JavaScript, is, awesome";
console.log(str);
console.log(`str.split(","): ${str.split(",")}`);
console.log(str.split(" "));
console.log();
//Метод replace заменяет часть исходной строки на новую
str = "JavaScript";
console.log(`str.replace("Java", "Type"): ${str.replace("Java", "Type")}`);
console.log(`str: ${str}`); // Исходная строка не меняется
console.log();
str = "JavaScriptJava";
console.log(`str.replace("Java", "Type"): ${str.replace("Java", "Type")}`);
console.log(`str: ${str}`); // меняет только первое вхождение
console.log();
str = "JavaScriptJava";
console.log(
  `str.replace("Java", "Type").replace("Java", "Type"): ${str
    .replace("Java", "Type")
    .replace("Java", "Type")}`
);
console.log(`str: ${str}`); // меняет только первое вхождение
console.log();
