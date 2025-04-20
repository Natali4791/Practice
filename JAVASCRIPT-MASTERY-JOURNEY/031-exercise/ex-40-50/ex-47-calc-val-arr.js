console.log(
  `47. Программа, которая задает массив из 15 случайных целых чисел и определяет, сколько среди них положительных, отрицательных и нулевых значений.`
);
console.log(`function countNumbers(arr) {
    let positive = 0, negative = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    return { positive, negative, zero };
}

function main() {
    const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 21) - 10);
    console.log("Случайный массив:", arr);
    const counts = countNumbers(arr);
    console.log("Положительных:", counts.positive);
    console.log("Отрицательных:", counts.negative);
    console.log("Нулевых:", counts.zero);
}

main();`);
function countNumbers(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  return { positive, negative, zero };
}

function main() {
  const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 21) - 10);
  console.log("Случайный массив:", arr);
  const counts = countNumbers(arr);
  console.log("Положительных:", counts.positive);
  console.log("Отрицательных:", counts.negative);
  console.log("Нулевых:", counts.zero);
}

main();
console.log();
