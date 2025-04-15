console.log(`11. Программа, которая определяет, является ли введенное число четным или нечетным.`);
console.log(`function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Число " + num + " - четное.";
  } else {
    return "Число " + num + " - нечетное."`);
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Число " + num + " - четное.";
  } else {
    return "Число " + num + " - нечетное.";
  }
}
console.log(`console.log(checkEvenOdd(11))`);
console.log(checkEvenOdd(11));
console.log();
console.log(
  `12. Программа для расчета стоимости проезда в зависимости от дистанции: до 100 км — тариф А, свыше 100 км — тариф Б.`
);
console.log(`function calculateTicketCost(distance) {
  if (distance <= 100) {
    return "Стоимость проезда - тариф А";
  } else {
    return "Стоимость проезда - тариф Б`);
function calculateTicketCost(distance) {
  if (distance <= 100) {
    return "Стоимость проезда - тариф А";
  } else {
    return "Стоимость проезда - тариф Б";
  }
}
console.log(`console.log(calculateTicketCost(200))`);
console.log(calculateTicketCost(200));
console.log();
console.log(`13. Программа для определения сезона года по номеру месяца.`);
console.log(`function seasonByMonth(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "зима";
  } else if (month >= 3 && month <= 5) {
    return "весна";
  } else if (month >= 6 && month <= 8) {
    return "лето";
  } else if (month >= 9 && month <= 11) {
    return "осень";
  } else {
    return "Ошибка: введен некорректный номер месяца.";
  }
}`);
function seasonByMonth(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "зима";
  } else if (month >= 3 && month <= 5) {
    return "весна";
  } else if (month >= 6 && month <= 8) {
    return "лето";
  } else if (month >= 9 && month <= 11) {
    return "осень";
  } else {
    return "Ошибка: введен некорректный номер месяца.";
  }
}
console.log(`console.log(seasonByMonth(11))`);
console.log(seasonByMonth(11));
console.log();
console.log(
  `14. Программа, которая в зависимости от выбранного режима работы (легкая, средняя, тяжелая физическая активность) предлагает оптимальную температуру для комфортной работы.`
);
console.log(`function optimalTemperature(activity) {
    if (activity === "легкая") {
        return "Оптимальная температура: 20°C";
    } else if (activity === "средняя") {
        return "Оптимальная температура: 18°C";
    } else if (activity === "тяжелая") {
        return "Оптимальная температура: 16°C";
    } else {
        return "Ошибка: некорректно выбран режим работы.";
    }
}`);
function optimalTemperature(activity) {
  if (activity === "легкая") {
    return "Оптимальная температура: 20°C";
  } else if (activity === "средняя") {
    return "Оптимальная температура: 18°C";
  } else if (activity === "тяжелая") {
    return "Оптимальная температура: 16°C";
  } else {
    return "Ошибка: некорректно выбран режим работы.";
  }
}
console.log(`console.log(optimalTemperature("тяжелая"))`);
console.log(optimalTemperature("тяжелая"));
console.log();
console.log(
  `15. Программа, которая запрашивает возраст пользователя и сообщает, доступен ли ему контент определенной возрастной категории.`
);
console.log(`function checkAgeForContent(age, contentAge) {
    if (age >= contentAge) {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}`);
function checkAgeForContent(age, contentAge) {
  if (age >= contentAge) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}
console.log(`console.log(checkAgeForContent(16, 18))`);
console.log(checkAgeForContent(86, 18));
console.log();
console.log(`16. Программа для расчета идеального веса человека на основе его роста и пола.`);
console.log(`function calculateIdealWeight(height, gender) {
    if (gender === "мужской") {
        return "Идеальный вес: " + (height - 100 - ((height - 150) / 4)).toFixed(1) + " кг";
    } else if (gender === "женский") {
        return "Идеальный вес: " + (height - 110).toFixed(1) + " кг";
    } else {
        return "Ошибка: некорректно указан пол.";
    }
}`);
function calculateIdealWeight(height, gender) {
  if (gender === "мужской") {
    return "Идеальный вес: " + (height - 100 - (height - 150) / 4).toFixed(1) + " кг";
  } else if (gender === "женский") {
    return "Идеальный вес: " + (height - 110).toFixed(1) + " кг";
  } else {
    return "Ошибка: некорректно указан пол.";
  }
}
console.log(`console.log(calculateIdealWeight(190,"мужской"))`);
console.log(calculateIdealWeight(190, "мужской"));
console.log(`console.log(calculateIdealWeight(174, "женский"));`);
console.log(calculateIdealWeight(174, "женский"));
console.log();
console.log(`17. Программа для определения диапазона числа.`);
console.log(`function checkNumberRange(number) {
    if (number >= 0 && number <= 10) {
        return "Число находится в диапазоне: маленькое";
    } else if (number >= 11 && number <= 100) {
        return "Число находится в диапазоне: среднее";
    } else {
        return "Число находится в диапазоне: большое";
    }
}`);
function checkNumberRange(number) {
  if (number >= 0 && number <= 10) {
    return "Число находится в диапазоне: маленькое";
  } else if (number >= 11 && number <= 100) {
    return "Число находится в диапазоне: среднее";
  } else {
    return "Число находится в диапазоне: большое";
  }
}
console.log(`console.log(checkNumberRange(100))`);
console.log(checkNumberRange(100));
console.log();
console.log(
  `18. Программа, которая в зависимости от текущего времени суток предлагает различные активности.`
);
console.log(`function suggestActivity(time) {
    if (time === "утро") {
        return "Позавтракайте и начните день с положительных мыслей.";
    } else if (time === "день") {
        return "Пойдите на прогулку и насладитесь свежим воздухом.";
    } else if (time === "вечер") {
        return "Смотрите интересный фильм и расслабляйтесь.";
    } else if (time === "ночь") {
        return "Отдохните и поспите, чтобы быть бодрыми завтра.";
    } else {
        return "Ошибка: некорректно указано время суток.";
    }
}`);
function suggestActivity(time) {
  if (time === "утро") {
    return "Позавтракайте и начните день с положительных мыслей.";
  } else if (time === "день") {
    return "Пойдите на прогулку и насладитесь свежим воздухом.";
  } else if (time === "вечер") {
    return "Смотрите интересный фильм и расслабляйтесь.";
  } else if (time === "ночь") {
    return "Отдохните и поспите, чтобы быть бодрыми завтра.";
  } else {
    return "Ошибка: некорректно указано время суток.";
  }
}
console.log(`console.log(suggestActivity("день"))`);
console.log(suggestActivity("день"));
console.log();
console.log(`19. Программа для классификации учебных оценок.`);
console.log(`function classifyGrade(grade) {
    switch (grade) {
        case 5:
            return "Отлично";
        case 4:
            return "Хорошо";
        case 3:
            return "Удовлетворительно";
        case 2:
            return "Неудовлетворительно";
        case 1:
            return "Очень плохо";
        default:
            return "Ошибка: некорректная оценка.";
    }
}`);
function classifyGrade(grade) {
  switch (grade) {
    case 5:
      return "Отлично";
    case 4:
      return "Хорошо";
    case 3:
      return "Удовлетворительно";
    case 2:
      return "Неудовлетворительно";
    case 1:
      return "Очень плохо";
    default:
      return "Ошибка: некорректная оценка.";
  }
}
console.log(`console.log(classifyGrade(5))`);
console.log(classifyGrade(5));
console.log();
console.log(
  `20. Программа для проверки корректности введенного email на наличие символа "@" и точки.`
);
console.log(`function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "Email корректен";
    } else {
        return "Email некорректен";
    }
}`);
function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return "Email корректен";
  } else {
    return "Email некорректен";
  }
}
console.log(`console.log(validateEmail("123@465.j")`);
console.log(validateEmail("123@465.j"));
console.log();
