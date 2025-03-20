//Оператор равенства
console.log(`5 == 5 будет ${5 == 5}`);
console.log(`5 == '5' будет ${5 == "5"}`);
console.log(`5 == 10 будет ${5 == 10}`);
console.log();
//Оператор строгого равенства
console.log(`5 === 5 будет ${5 === 5}`);
console.log(`5 === '5' будет ${5 === "5"}`);
console.log();
//Оператор неравенства
console.log(`5 != 10 будет ${5 != 10}`);
console.log(`5 != "5" будет ${5 != "5"}`);
console.log();
//Оператор строгого неравенства
console.log(`5 !== "5" будет ${5 !== "5"}`);
console.log(`5 !== 10 будет ${5 !== 10}`);
console.log(`5 !== 5 будет ${5 !== 5}`);
console.log();
//Операторы больше или равно и меньше или равно
console.log(`5 >= 5 будет ${5 >= 5}`);
console.log(`5 >= 3 будет ${5 >= 3}`);
console.log(`5 <= 3 будет ${5 <= 3}`);
console.log();
//Логические операции
console.log(`true && true будет ${true && true}`);
console.log(`true && false будет ${true && false}`);
console.log(`false && false будет ${false && false}`);
console.log(`true или true будет ${true || true}`);
console.log(`true || false будет ${true || false}`);
console.log(`false || false будет ${false || false}`);
console.log(`!true будет ${!true}`);
console.log(`!false будет ${!false}`);
console.log();
//Проверка данных на заполненность
//проверка наличия данных
let data = "";
if (!data) {
  console.log("!data: Внимание! Данные не введены. Поле должно быть заполнено!");
}
console.log();
//Двойная инверсия
//проверка отсутствия данных
let data1 = "1";
if (!!data1) {
  console.log("!!data1: Внимание! Данные введены. Поле должно остаться пустым.");
}
console.log();
//проверка отсутствия данных без инверсии
let data2 = "1";
if (data2) {
  console.log("data2: Внимание! Данные введены. Поле должно остаться пустым.");
}
console.log();

// Преобразование к логическому типу
console.log(!!0); // false
console.log(!!1); // true
console.log(!!""); // false
console.log(!!"hello"); // true
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
console.log();
