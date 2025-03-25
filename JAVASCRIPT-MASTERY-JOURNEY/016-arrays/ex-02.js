const arr = [1, 2, 3, 4, 5];
const array = [10, 20, 30, 40, 50];
const arr2 = new Array("яблоко", "банан", "апельсин");

// Использование метода concat для объединения массивов
console.log(`Использование метода concat для объединения массивов`);
const newArr = arr.concat(["pineapple", "melon"]); // Создает новый массив, объединяя текущий массив и переданный массив
console.log(newArr); // Выведет ["apple", "grape", "watermelon", "orange", "pineapple", "melon"]

// Использование метода splice для удаления и вставки элементов
console.log(`Использование метода splice для удаления и вставки элементов`);
arr2.splice(1, 1, "grape", "watermelon"); // Удаляет один элемент с индексом 1 и вставляет "grape" и "watermelon" на его место
console.log(arr2); // Выведет ["apple", "grape", "watermelon", "orange"]

// Обход массива с использованием цикла for...in (не рекомендуется для массивов)
console.log(`Обход массива с использованием цикла for...in (не рекомендуется для массивов)`);
for (let index in arr) {
  console.log(arr[index]);
}

// Использование метода slice для создания подмассива
console.log(`Использование метода slice для создания подмассива`);
console.log(array);

// Использование метода reverse для изменения порядка элементов
console.log(`Использование метода reverse для изменения порядка элементов`);
arr.reverse(); // Меняет порядок элементов в массиве на обратный
console.log(arr); // Выведет ["orange", "watermelon", "grape", "apple"]

// Использование метода sort для сортировки элементов
console.log(`Использование метода sort для сортировки элементов`);
arr.sort(); // Сортирует элементы массива в алфавитном порядке
console.log(arr); // Выведет ["apple", "grape", "orange", "watermelon"]

// Обход массива с использованием метода forEach
console.log(`Обход массива с использованием метода forEach`);
arr.forEach(function (element) {
  console.log(element);
});
console.log();
