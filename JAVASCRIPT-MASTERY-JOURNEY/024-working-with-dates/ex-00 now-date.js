let now = new Date();
console.log();
console.log(`текущее время: new Date(): ${now}`);
console.log();

let dateStr = new Date("2064-07-10");
console.log(`задать дату: new Date("2064-07-10"): ${dateStr}`);
console.log();

let dateComponents = new Date(2024, 0, 10, 14, 30, 0);
console.log(`задать дату и время: new Date(2024, 0, 10, 14, 30, 0) : ${dateComponents}`);
console.log();

// Создание объекта Date из миллисекунд с начала эпохи Unix
let dateFromMs = new Date(0); // Эпоха Unix
console.log(`задать нулевую дату Эпоха Unix: new Date(0): ${dateFromMs}`);
console.log();

let dateFromMs1 = new Date(9876543210); // Эпоха Unix
console.log(`задать 9876543210 миллисекунд от нулевой даты: new Date(9876543210): ${dateFromMs1}`);
console.log();

console.log(`Получение года текущей даты: now.getFullYear(): ${now.getFullYear()}`);
console.log();
console.log(`Получение месяца текущей даты (0-11): now.getMonth(): ${now.getMonth()}`);
console.log();
console.log(`Получение числа текущей даты: now.getDate(): ${now.getDate()}`);
console.log();
console.log(`Получение дня недели текущей даты (0-6): now.getDay(): ${now.getDay()}`);
console.log();
console.log(`Получение часов текущей даты (0-23): now.getHours(): ${now.getHours()}`);
console.log();
console.log(`Получение минут текущей даты (0-59): now.getMinutes(): ${now.getMinutes()}`);
console.log();
console.log(`Получение секунд текущей даты (0-59): now.getSeconds(): ${now.getSeconds()}`);
console.log();
console.log(
  `Получение миллисекунд текущей даты (0-999): now.getMilliseconds(): ${now.getMilliseconds()}`
);
console.log();
let timezoneOffset = now.getTimezoneOffset();
console.log(
  `Получение разницы в минутах между местным временем и UTC: timezoneOffset: ${timezoneOffset}`
);
console.log();
