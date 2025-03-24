//Цикл for
console.log(`Цикл for:`);
let str = "hello world!";
for (let index = 0; index < str.length; index++) {
  const element = str[index];
  console.log(`>${element}<`);
}
console.log(`✔`);
//Цикл for.. of
console.log(`Цикл for... of:`);
for (const e of str) {
  console.log(`[${e}]`);
}
console.log(`✔`);
//Цикл for...in
console.log(`Цикл for...in будет рассмотрен в теме Объекты`);
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}
