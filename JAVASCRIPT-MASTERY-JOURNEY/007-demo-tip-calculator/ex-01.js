let guest = Number.parseInt(prompt("Количество гостей: "));
let bill = Number.parseFloat(prompt("Сумма счета: "));
let tips = Number.parseFloat(prompt("Процент чаевых: "));
let billPerPerson = (bill + (tips * bill) / 100) / guest;

alert(`"Количество гостей: " ${guest}`);
alert(`"Сумма счета: " ${bill}`);
alert(`"Процент чаевых: " ${tips}`);
alert(`"Счет на одного гостя: " ${billPerPerson}`);
