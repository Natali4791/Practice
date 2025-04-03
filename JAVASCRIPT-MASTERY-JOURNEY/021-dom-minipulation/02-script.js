// Получаем ссылку на кнопку и контейнер списка
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");

//Получение анонимной функции из обычной
// function addListItem() {
//   const listItem = document.createElement(li);
//   listItem.textContent = "Новый элемент списка";
//   listContainer.appendChild(listItem);
// }
// addListBtn.addEventListener("click", addListItem);

//Повесить слушателя, используя анонимную функцию
addListBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.textContent = "Новый элемент списка";
  listContainer.appendChild(listItem);
});
//По нажатию кнопки добавлять пять элементов
// addListBtn.addEventListener("click", function () {
//   for (let i = 0; i < 5; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${i + 1}-й элемент списка`;
//     listContainer.appendChild(listItem);
//   }
// });

//Добавление appendChild(listItem) в кнопку addListBtn, а не в контейнер listContainer (строка 35)
// const addListBtn = document.getElementById("addListBtn");
// const listContainer = document.getElementById("listContainer");
// addListBtn.addEventListener("click", function () {
//   for (let i = 0; i < 5; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${i + 1}-й элемент списка`;
//     addListBtn.appendChild(listItem);
//   }
// });
