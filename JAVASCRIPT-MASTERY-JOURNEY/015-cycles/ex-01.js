//Цикл while
let j = 0;
console.log(`Цикл while:`);
while (j < 5) {
  console.log(j);
  j++;
}
console.log(`end`);
//Цикл for Выход из зацикливания Ctrl + C
console.log(`Цикл for перепроверять знак < :`);
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(`Выход из зацикливания Ctrl + C`);
console.log();
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}
//Цикл do...While
console.log(`Цикл do...While громоздкий:`);
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
console.log();
console.log(`Цикл do...While обернуть условным оператором:`);
k = 10;
if (k < 5) {
  do {
    console.log(k);
    k++;
  } while (k < 5);
}
console.log();
