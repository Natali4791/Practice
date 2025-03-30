const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
//Цикл for...in для перебора всех ключей нашего объекта
console.log(`Цикл for...in для перебора всех ключей нашего объекта`);
console.log(`for (const key in person) {console.log(key)}`);
for (const key in person) {
  console.log(key);
}
console.log();
// Использование цикла for...in для вывода значений объекта person
console.log(`Использование цикла for...in для вывода ключ:значений объекта person`);
console.log(`for (const key in person) {`);
console.log(`console.log(key + ": " + person[key])`);
for (const key in person) {
  console.log(key + ": " + person[key]);
}
console.log();

const product = {
  id: 123456,
  name: "Smartphone",
  brand: "Samsung",
  model: "Galaxy S20",
  price: 799.99,
  features: {
    processor: "Exynos",
    ram: "8 GB",
    storage: "128 GB",
    battery: "4000 mAh",
  },
};
console.log(`Описание объекта для передачи между клиентом (браузером) и сервером`);
console.log(`с помощью формата json`);
console.log(product);
console.log();
