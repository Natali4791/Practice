console.log(
  `60. Программа, которая определяет, является ли массив строго возрастающей последовательностью.`
);
console.log(
  `Программа должна принимать на вход массив и проверять, является ли каждый следующий элемент массива больше предыдущего.`
);
console.log(`function isStrictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Пример использования
console.log("Пример 1:", isStrictlyIncreasing([1, 2, 3, 4, 5]));
console.log("Пример 2:", isStrictlyIncreasing([5, 4, 3, 2, 1]));
console.log("Пример 3:", isStrictlyIncreasing([1, 3, 5, 7, 9]));`);
console.log(`Проверка возрастания последовательности`);
function isStrictlyIncreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Пример использования
console.log("Пример 1:", isStrictlyIncreasing([1, 2, 3, 4, 5]));
console.log("Пример 2:", isStrictlyIncreasing([5, 4, 3, 2, 1]));
console.log("Пример 3:", isStrictlyIncreasing([1, 3, 5, 7, 9]));
