const bill = document.getElementById("bill");
const tips = document.getElementById("tips");
const guest = document.getElementById("guest");

// bill = Number.parseFloat("Сумма счета: "); //преобразуют строку в число с плавающей точкой.
// tips = Number.parseFloat("Процент чаевых: ");
// guest = Number.parseInt("Количество человек: "); //преобразуют строку в целое число.

//Глобальная функция isNaN() Можно ли значение преобразовать в число && = NaN/ isNaN("123"): false
// if (isNaN(guest) || isNaN(bill) || isNaN(tips) || guest <= 0 || bill <= 0 || tips < 0) {
// alert("Пожалуйста введите корректные значения");
// } else {
let totalAmount = bill + (tips * bill) / 100;
let billPerPerson = totalAmount / guest;
// alert(`Количество гостей:  ${guest}`);
// alert(`Сумма счета:  ${bill}`);
// alert(`Процент чаевых:  ${tips}`);
// alert(`Счет на одного гостя:  ${billPerPerson}`);
// }
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");

addListBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.textContent = `Новый элемент списка`;

  listContainer.appendChild(listItem);
});

// listContainer.listItem.textContent = `Чаевые: ${tips}`;
