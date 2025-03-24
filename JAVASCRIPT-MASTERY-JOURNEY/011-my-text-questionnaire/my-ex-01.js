let points = 0;
let quest1 = prompt("Сколько будет 2+2 ");
let quest2 = prompt("Сколько будет 2+2*2 ");
let quest3 = prompt("Сколько будет (2+2)*2 ");

if (quest1 == 4) {
  points = points + 10;
} else {
  alert("Ответ неправильный");
}
if (quest2 == 6) {
  points = points + 10;
} else {
  alert("Ответ неправильный");
}
if (quest3 == 8) {
  points = points + 10;
} else {
  alert("Ответ неправильный");
}
alert(`Общая сумма баллов: ${points}`);
