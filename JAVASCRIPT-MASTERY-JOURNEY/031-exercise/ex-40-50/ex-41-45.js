const readlineSync = require("readline-sync");

console.log(`41. Программа для подсчета количества слов в предложении.`);
console.log(`function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

function main() {
    const sentence = prompt("Введите предложение:");
    const wordCount = countWords(sentence);
    console.log(wordCount);
}

main();`);
function countWords(sentence) {
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

function main1() {
  console.log(`Введите предложение:`);
  const sentence = readlineSync.question("Enter offer: ");
  const wordCount = countWords(sentence);
  console.log(wordCount);
}

main1();
console.log();
console.log(
  `42. Программа, которая определяет, содержит ли строка только цифры (ответ: да или нет).`
);
console.log(`function containsOnlyDigits(inputString) {
    return /^\d+$/.test(inputString);
}

function main() {
    const inputString = prompt("Введите строку:");
    const result = containsOnlyDigits(inputString);
    console.log(result);
}

main();`);
function containsOnlyDigits(inputString) {
  return /^\d+$/.test(inputString);
}

function main2() {
  console.log(`Введите строку:`);
  const inputString = readlineSync.question("Enter the line: ");
  const result = containsOnlyDigits(inputString);
  console.log(result);
}

main2();
console.log();
console.log(
  `43. Программа, которая находит самое длинное слово в предложении и выводит его длину.`
);
console.log(`function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

function main() {
    const sentence = prompt("Введите предложение:");
    const longestWordLength = findLongestWordLength(sentence);
    console.log(longestWordLength);
}

main();`);
function findLongestWordLength(sentence) {
  let words = sentence.split(" ");
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

function main3() {
  console.log(`Введите предложение:`);
  const sentence = readlineSync.question("Enter offer: ");
  const longestWordLength = findLongestWordLength(sentence);
  console.log(longestWordLength);
}

main3();
console.log();
console.log(
  `44. Программа, которая преобразует каждое слово в строке так, чтобы оно начиналось с заглавной буквы, а остальные были строчными.`
);
console.log(`function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}

function main() {
    const sentence = prompt("Введите строку:");
    const capitalizedSentence = capitalizeWords(sentence);
    console.log(capitalizedSentence);
}

main();`);
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

function main4() {
  console.log(`Введите строку:`);
  const sentence = readlineSync.question("Enter the line: ");
  const capitalizedSentence = capitalizeWords(sentence);
  console.log(capitalizedSentence);
}

main4();
console.log();
console.log(
  `45. Программа, которая принимает строку от пользователя и подсчитывает количество использования каждой буквы в строке, выводя их в формате словаря {'а': 5, }.`
);
console.log(`function countLetters(str) {
    const letterCount = {};
    for (const char of str) {
        if (char in letterCount) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }
    return letterCount;
}

function main() {
    const str = prompt("Введите строку:");
    const result = countLetters(str);
    console.log(result);
}

main();`);
function countLetters(str) {
  const letterCount = {};
  for (const char of str) {
    if (char in letterCount) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }
  return letterCount;
}

function main5() {
  console.log(`Введите строку:`);
  const str = readlineSync.question("Enter the line: ");
  const result = countLetters(str);
  console.log(result);
}

main5();
console.log();
