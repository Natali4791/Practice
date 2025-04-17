const readlineSync = require("readline-sync");

console.log(`программу для генерации уникальных идентификаторов (ID) фиксированной длины.`);
// console.log(`function generateRandomID(length) {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let id = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         id += chars.charAt(randomIndex);
//     }
//     return id;
// }

// function main() {
//     const length = prompt("Введите длину ID:");
//     const randomID = generateRandomID(parseInt(length));
//     console.log(randomID);
// }

// main();`);
function generateRandomID(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIndex);
  }
  return id;
}

function main() {
  console.log(`Введите длину ID:`);
  const length = readlineSync.question("Enter ID length:");
  const randomID = generateRandomID(parseInt(length));
  console.log(randomID);
}

main();
console.log();
