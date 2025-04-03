function btnClick() {
  // Изменяем текст в контейнере
  // textContainer.innerHTML = "<b><u>Новый текст</u></b>";
  textContainer.textContent = `Неформатированный текст`;
}

// Получаем ссылку на кнопку и контейнер текста
const changeTextBtn = document.getElementById("changeTextBtn");
const textContainer = document.getElementById("textContainer");

// Добавляем обработчик события клика на кнопку
changeTextBtn.addEventListener("click", btnClick);
