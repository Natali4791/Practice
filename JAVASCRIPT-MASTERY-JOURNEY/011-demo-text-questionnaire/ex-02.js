let score = 0;
let question = "Что означает слово 'cat'? [кошка, собака]";
let answer = prompt(question);
if (answer === "кошка") {
  score = score + 10;
  alert("Всё верно! 👍");
} else {
  alert("Нужно ещё подумать 😒");
}
question = "Что означает слово 'dog'? [кошка, собака]";
answer = prompt(question);
if (answer === "собака") {
  score = score + 10;
  alert("Всё верно! 👍");
} else {
  alert("Нужно ещё подумать 😒");
}
alert("Счет: " + score);
