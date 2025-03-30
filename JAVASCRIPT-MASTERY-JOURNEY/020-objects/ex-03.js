//Описание человека
console.log(`Описание человека:`);
const person = {
  firstName: "Сергей",
  lastName: "Ка.",
  age: 33,
  gender: "мужской",
  occupation: "Наставник",
  address: {
    street: "123 Главная улица",
    city: "Какой-то город",
    country: "Россия",
  },
  hobbies: ["чтение", "бег", "готовка"],
  greet: function () {
    console.log(`Привет, меня зовут ${this.firstName} ${this.lastName}`);
  },
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}
console.log();
//описание продукта
console.log(`описание продукта:`);
const product = {
  name: "Смартфон",
  brand: "Samsung",
  price: 599.99,
  inStock: true,
  specifications: {
    screenSize: "6.5 дюймов",
    RAM: "8 ГБ",
    storage: "128 ГБ",
  },
  displayDetails: function () {
    console.log(`Товар: ${this.brand} ${this.name}, Цена: $${this.price}`);
  },
};
for (const key in product) {
  console.log(key + ": " + product[key]);
}
console.log();
//Описание машины
console.log(`Описание машины:`);
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "синий",
  mileage: 5000,
  owner: {
    firstName: "Евгения",
    lastName: "Иванова",
    age: 35,
  },
  drive: function () {
    console.log("Машина движется...");
  },
};
for (const key in car) {
  console.log(key + ": " + car[key]);
}
//Описание банковского аккаунта
console.log(`Описание банковского аккаунта`);
const bankAccount = {
  accountNumber: "1234567890",
  balance: 5000,
  currency: "Руб",
  owner: {
    firstName: "Василий",
    lastName: "Пупкин",
    age: 40,
  },
  deposit: function (amount) {
    this.balance += amount;
    console.log(`Внесено $${amount}. Новый баланс: $${this.balance}`);
  },
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Снято $${amount}. Новый баланс: $${this.balance}`);
    } else {
      console.log("Недостаточно средств.");
    }
  },
};
for (const key in bankAccount) {
  console.log(key + ": " + bankAccount[key]);
}
console.log();
