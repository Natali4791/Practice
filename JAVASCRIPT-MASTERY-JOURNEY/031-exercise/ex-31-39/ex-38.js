const readlineSync = require("readline-sync");
console.log(
  `38. Программа, которая находит заданное слово в предложении и заменяет его на другое слово.`
);
// console.log(`function replaceWord(sentence, oldWord, newWord) {
//     return sentence.split(oldWord).join(newWord);
// }

// function main() {
//     let inputSentence = prompt("Введите предложение:");
//     let wordToReplace = prompt("Введите слово для замены:");
//     let newWord = prompt("Введите новое слово:");
//     let replacedSentence = replaceWord(inputSentence, wordToReplace, newWord);
//     alert(replacedSentence);
// }

// main();`);
function replaceWord(sentence, oldWord, newWord) {
  return sentence.split(oldWord).join(newWord);
}

function main() {
  console.log(`Введите предложение:`);
  let inputSentence = readlineSync.question("Enter offer:");
  console.log(`Введите слово для замены:`);
  let wordToReplace = readlineSync.question("Enter a word to replace:");
  console.log(`Введите новое слово:`);
  let newWord = readlineSync.question("Enter a new word:");
  let replacedSentence = replaceWord(inputSentence, wordToReplace, newWord);
  console.log(replacedSentence);
}

main();
console.log();
