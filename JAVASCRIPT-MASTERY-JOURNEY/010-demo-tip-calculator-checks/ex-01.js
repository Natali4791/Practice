let guest = Number.parseInt(prompt("Количество гостей: ")); //преобразуют строку в целое число.
let bill = Number.parseFloat(prompt("Сумма счета: ")); //преобразуют строку в число с плавающей точкой.
let tips = Number.parseFloat(prompt("Процент чаевых: "));
//Глобальная функция isNaN() Можно ли значение преобразовать в число && = NaN/ isNaN("123"): false
if (isNaN(guest) || isNaN(bill) || isNaN(tips) || guest <= 0 || bill <= 0 || tips < 0) {
  alert("Ошибка ввода данных");
} else {
  let billPerPerson = (bill + (tips * bill) / 100) / guest;
  alert(`Количество гостей:  ${guest}`);
  alert(`Сумма счета:  ${bill}`);
  alert(`Процент чаевых:  ${tips}`);
  alert(`Счет на одного гостя:  ${billPerPerson}`);
}
