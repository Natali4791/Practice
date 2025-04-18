// Плохой пример: повторяющийся код без использования функций
// let x1 = 10;
// let y1 = 20;
// console.log(x1 + y1);

// let x2 = 30;
// let y2 = 40;
// console.log(x2 + y2);

// Хороший пример: использование функции для избежания повторения кода
console.log(`Хороший пример: использование функции для избежания повторения кода`);
console.log(`function sum(x, y) {return x + y}: `);
function sum(x, y) {
  return x + y;
}

console.log(`sum(10, 20): ${sum(10, 20)}`); // Выведет 30
console.log(`sum(30, 40): ${sum(30, 40)}`); // Выведет 70
console.log();

// Плохой пример: повторяющаяся логика без абстрагирования в функцию
// let isAdmin1 = true;
// if (isAdmin1) {
//   console.log("У вас есть права администратора");
// } else {
//   console.log("У вас нет прав администратора");
// }

// let isAdmin2 = false;
// if (isAdmin2) {
//   console.log("У вас есть права администратора");
// } else {
//   console.log("У вас нет прав администратора");
// }

// Хороший пример: абстрагирование повторяющейся логики в функцию
console.log(`Хороший пример: абстрагирование повторяющейся логики в функцию`);
console.log(`function checkAdminPrivileges(isAdmin) {if (isAdmin)`);
function checkAdminPrivileges(isAdmin) {
  if (isAdmin) {
    console.log("У вас есть права администратора");
  } else {
    console.log(`} else {`);
    console.log("У вас нет прав администратора");
  }
}
console.log();
console.log(`checkAdminPrivileges(true)`);
checkAdminPrivileges(true); // Выведет "У вас есть права администратора"
console.log();
console.log(`checkAdminPrivileges(false)`);
checkAdminPrivileges(false); // Выведет "У вас нет прав администратора"
console.log();
