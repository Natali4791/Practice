//логика подсчета счета чаевых
function calculateTipAmount(billAmount, tipPercentage){
  return billAmount * (tipPercentage / 100);
}
//Подсчет итоговой суммы
function calculateTotalAmount(billAmount, tipAmount){
  return billAmount + tipAmount;
}
//подсчет суммы с каждого учасника
function calculatePerPersonAmount(totalAmount, numberOfPeople) {
  return totalAmount / numberOfPeople;
}
//кнопка по id
var calculateButton = document.getElementById ("calculateButton");

calculateButton.addEventListener("click", function () {
  //получаем значения из подей ввода
  var billAmount = parseInt(document.getElementById("billAmount").value);
  var tipPercentage = parseInt(document.getElementById("tipPercentage").value);
  var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  //Проверяем все ли поля заполнены корректно
  if (isNaN(billAmount) 
    || isNaN(tipPercentage) 
    || isNaN(numberOfPeople) 
    || billAmount <= 0 
    || tipPercentage <= 0 
    || numberOfPeople <= 0) {
    alert("Пожалуйста, введите корретные значения.");
    return;
  }
  //Вычисляем чаевые
  var tipAmount = calculateTipAmount(billAmount, tipPercentage);
  //Вычисляем общую сумму
  var totalAmount = calculateTotalAmount(billAmount,tipAmount);
  //вычмсляем сумму на каждого человека
  var perPersonAmount = calculatePerPersonAmount(totalAmount, numberOfPeople);
  //Выводим результаты
  document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
  document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
  document.getElementById("perPersonAmount").innerText = perPersonAmount.toFixed(2);
});
