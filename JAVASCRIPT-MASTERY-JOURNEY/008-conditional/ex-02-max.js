// Найти максимальное из трех чисел (каскад if)
let a = 111,
  b = 21,
  c = 3;
if (a > b && a > c) {
  console.log(`max a = ${a}`);
} else if (b > c) {
  console.log(`max b = ${b}`);
} else {
  console.log(`max c = ${c}`);
}
