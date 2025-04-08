let now = new Date();
console.log(now);

// Преобразование даты в строку в местном часовом поясе
console.log(now.toString());

// Преобразование даты в строку в формате ISO 8601 в UTC
console.log(now.toISOString());

// Получение строкового представления даты и времени в соответствии с локалью пользователя
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
