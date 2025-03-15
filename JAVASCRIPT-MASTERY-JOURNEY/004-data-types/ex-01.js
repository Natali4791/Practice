// Типы данных в JS
// 1. Число (Number)
let num = 10;
console.log(`в переменной num число`);
console.log(num); //10
console.log(`с типом данных `);
console.log(typeof num); //number
console.log();

let floatNum = 3.14;
console.log(`в переменной floatNum число`);
console.log(floatNum);
console.log(`с типом данных `);
console.log(typeof floatNum); //number
console.log();

// 2. Строка (String)
let str = "Привет мир!";
console.log(`в переменной str строка`);
console.log(str);
console.log(`с типом данных `);
console.log(typeof str);
console.log();

// 3. Логический (Boolean)
let isTrue = true;
console.log(`в переменной isTrue true`);
console.log(isTrue);
let isTrue1 = false;
console.log(`в переменной isTrue1 false`);
console.log(isTrue1);
let isTrue2 = 12 > 5;
console.log(`в переменной isTrue2 12 > 5`);
console.log(isTrue2);
let isTrue3 = 14 == 123;
console.log(`в переменной isTrue3 14 == 123`);
console.log(isTrue3);
let isTrue4 = 154 != 123;
console.log(`в переменной isTrue4 154 != 123`);
console.log(isTrue4);
console.log(`с типом данных `);
console.log(typeof isTrue);
console.log();

// 4. Null
let nullValue = null;
console.log(`в переменной nullValue значение null`);
console.log(nullValue);
console.log(`с типом данных `);
console.log(typeof nullValue);
console.log();

// 5. Undefined
let UndefinedValue;
console.log(`в переменной UndefinedValue нет значения`);
console.log(UndefinedValue);
console.log(`с типом данных `);
console.log(typeof UndefinedValue);
console.log();

// 6. Массив
let arr = [1, 2, 3, 4, 5];
console.log(`в переменной arr значения массива`);
console.log(arr);
console.log(`с типом данных `);
console.log(typeof arr);
console.log();

// 7. Объект (Object)
let obj = {
  name: "Jane",
  age: 30,
  city: "Smolensk",
};
console.log(`в переменной obj значения объекта`);
console.log(obj);
console.log(`с типом данных `);
console.log(typeof obj);
console.log();

// 7. Функция (Function)
function greet(name) {
  console.log("Привет, " + name + "!");
}
console.log(`в функции greet приветствие пользователя с входящим значением name`);
console.log(greet);
console.log(`с типом данных `);
console.log(typeof greet);
console.log();

//Стрелочная функция
console.log(`в стрелочной функции greet2 приветствие пользователя с входящим значением name`);
const greet2 = (name) => console.log("Привет, " + name + "!");
console.log();

// 8. Символ (Symbol)
let sym = Symbol("описание");
console.log(`в переменной sym значения Symbol ("описание")`);
console.log(sym);
console.log(`с типом данных `);
console.log(typeof sym);
console.log();

// 10. BigInt (Числа произвольной длины)
const BigNumber = 12345678912345678912345678789123456789123456789123456789n;
console.log(`в переменной BigNumber большое число произвольной длины  в конце 'n'`);
console.log(BigNumber);
console.log(`с типом данных `);
console.log(typeof BigNumber);
const BigNumber1 = 12345678912345678912345678789123456789123456789123456789;
console.log(`в переменной BigNumber большое число произвольной длины без 'n' в конце `);
console.log(BigNumber1);
console.log(`с типом данных `);
console.log(typeof BigNumber1);
console.log();
