//Создание простого объекта
console.log("Создание простого объекта");
const user = {
  name: "John",
  age: 30,
};
console.log(`user["name"]: ${user["name"]}`);
console.log();
//Создание объекта с методом
console.log(`Создание объекта с методом`);
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`"Hello, my name is " + this.name: ${"Hello, my name is " + this.name}`);
  },
};
//Вывод на экран свойств объекта
console.log(`Вывод на экран свойств объекта`);
console.log(`person.age: ${person.age}`);
//Вывод на экран метода объекта
console.log(`person.name: ${person.name}`);
console.log(`Вывод на экран метода объекта person.greet()`);
person.greet();

console.log();
//Изменение и вывод на экран
console.log(`Изменение person.name = "Jane"`);
person.name = "Jane";
person.age = 21;
console.log(`вывод на экран person.greet()`);
person.greet();
person["name"];
console.log(`Вывод на экран свойства объекта`);
console.log(`person["name"]: ${person["name"]}`);
console.log(`person["age"]: ${person["age"]}`);
console.log();
//Использование стрелочной функции
console.log(`Использование стрелочной функции person.newLogic = () => {`);
person.newLogic = () => {
  console.log("Новая логика внутри стрелочной функции");
};
console.log(`Вызов метода person.newLogic()`);
person.newLogic();
console.log();
//Конструктор newObject
console.log(`Конструктор newObject const car = new Object()`);
const car = new Object();
car.mark = "Toyota";
car.model = "Corolla";
car.year = 2020;
console.log(`Вызов свойства car.year: ${car.year} `);
console.log();
//Функция-конструктор
console.log(`Функция-конструктор function Book(title, author) {`);
console.log(`this.author = author`);
function Book(title, author) {
  this.title = title;
  this.author = author;
}
console.log(`заполнение базы const book = new Book("Книга", "Автор книги")`);
const book = new Book("Моя книга", "Автор книги Я");
console.log();
console.log(`вывод на экран автора book.author: ${book.author}`);
console.log(`console.log(book)`);
console.log(book);
console.log();
//Цикл for...in для перебора всех ключей нашего объекта
console.log(`Цикл for...in для перебора всех ключей нашего объекта`);
console.log(`for (const key in person) {console.log(key)}`);
for (const key in person) {
  console.log(key);
}
console.log();
//Цикл for...in для перебора всех значений нашего объекта Не будет ИМЕНИ
// console.log(
//   `Цикл for...in для перебора всех значений нашего объекта if (typeof item === "function")`
// );
// console.log(`for (const key in person) {const item = person[key];`);
// for (const key in person) {
//   const item = person[key];
//   if (typeof item === "function") {
//     item();
//   } else {
//     console.log(item);
//   }
// }
// console.log();
//Цикл for...in для перебора всех значений нашего объекта связать item с person
console.log(`Цикл for...in для перебора всех значений нашего объекта связать item с person`);
console.log(`for (const key in person) {const item = person[key];`);
console.log(`const func = item.bind(person)`);
for (const key in person) {
  const item = person[key];
  if (typeof item === "function") {
    const func = item.bind(person);
    func();
  } else {
    console.log(item);
  }
}
console.log();
