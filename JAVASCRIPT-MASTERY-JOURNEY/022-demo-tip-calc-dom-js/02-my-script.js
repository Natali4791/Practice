//00
function newNameBtnClick() {
  const tb = document.getElementById("textBox");
  tb.value = `Привет, ${tb.value} !`;
}
const btn = document.getElementById("btnAction");

btn.addEventListener("click", newNameBtnClick);

//01

const changeTextBtn = document.getElementById("changeTextBtn");
const textContainer = document.getElementById("textContainer");

changeTextBtn.addEventListener("click", btnClick);
function btnClick() {
  textContainer.textContent = `Неформатированный текст`;
}
// textContainer.innerHTML = "<b><u>Новый текст</u></b>";

//02
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");
addListBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.textContent = "Новый элемент списка";
  listContainer.appendChild(listItem);
});
//03
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", function () {
  box.style.transition = "background-color 1s ease-in-out";
  box.style.backgroundColor = "blue";

  setTimeout(() => {
    box.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.background = "yellow";
    box.style.border = "solid 50px pink";
    box.style.color = "black";
  }, 1000);
});
