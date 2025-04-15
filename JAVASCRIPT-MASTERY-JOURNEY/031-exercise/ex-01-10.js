console.log(`1. Умножение трех чисел: function multiplyThreeNumbers(a, b, c) {return a * b * c;`);
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}
console.log(`multiplyThreeNumbers(21, 2, 3))`);
console.log(multiplyThreeNumbers(21, 2, 3));
console.log();
console.log(
  `2. Вычисление комичества минут в неделе: function calculateMinutesInWeek() {return 7 * 24 * 60:`
);
function calculateMinutesInWeek() {
  return 7 * 24 * 60;
}
console.log(`console.log(calculateMinutesInWeek())`);
console.log(calculateMinutesInWeek());
console.log();
console.log(`3. Дано 1440 минут, сколько это часов?`);
console.log(`function minutesToHours(minutes) {return minutes / 60`);
function minutesToHours(minutes) {
  return minutes / 60;
}
console.log(`console.log(minutesToHours(1000))`);
console.log(minutesToHours(1000));
console.log();
console.log(`4. Найти объем куба с заданной длиной ребра edge.`);
console.log(`function calculateCubeVolume(edge) {return Math.pow(edge, 3)`);
function calculateCubeVolume(edge) {
  return Math.pow(edge, 3);
}
console.log(`console.log(calculateCubeVolume(20))`);
console.log(calculateCubeVolume(20));
console.log();
console.log(
  `5. Функция/метод, которая вычисляет площадь треугольника по формуле Герона с заданными сторонами a b c`
);
console.log(`function calculateTriangleArea(a, b, c) {var s = (a + b + c) / 2;`);
console.log(`return Math.sqrt(s * (s - a) * (s - b) * (s - c))`);
function calculateTriangleArea(a, b, c) {
  var s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(`console.log(calculateTriangleArea(2, 4, 3))`);
console.log(calculateTriangleArea(2, 4, 3));
console.log();
console.log(`6. Функция/метод, которая вычисляет длину окружности с заданным радиусом Два пи эр.`);
console.log(`function calculateCircleLength(radius) {return 2 * Math.PI * radius;}`);
function calculateCircleLength(radius) {
  return 2 * Math.PI * radius;
}
console.log(`console.log(calculateCircleLength(5))`);
console.log(calculateCircleLength(5));
console.log();
console.log(`7. Функцию/метод для перевода градусов Фаренгейта в градусы Цельсия.`);
console.log(`function fahrenheitToCelsius(fahrenheit) {return (5 / 9) * (fahrenheit - 32)`);
function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(`console.log(fahrenheitToCelsius(100))`);
console.log(fahrenheitToCelsius(100));
console.log();
console.log(
  `8. Функция/метод для вычисления скалярного произведения двух векторов в трёхмерном пространстве (создать массивы a и b).`
);
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(`function scalarProduct(a, b) {return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]`);
function scalarProduct(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
console.log(`console.log(scalarProduct(a, b))`);
console.log(scalarProduct(a, b));
console.log();
console.log(
  `9. функцию/метод для вычисления значения выражения ax2+bx+c, где a, b, c задаются пользователем, а x - входной параметр.`
);
console.log(`function quadraticExpression(a, b, c, x) {return a * x * x + b * x + c;`);
function quadraticExpression(a, b, c, x) {
  return a * x * x + b * x + c;
}
console.log(`console.log(quadraticExpression(0, 5, -3, 1))`);
console.log(quadraticExpression(0, 5, -3, 1));
console.log();
console.log(
  `10. функцию/метод для вычисления расстояния, пройденного объектом, движущимся с начальной скоростью v0, ускорением a за время t.`
);
console.log(`function distanceTraveled(v0, a, t) {return v0 * t + 0.5 * a * t * t;`);
function distanceTraveled(v0, a, t) {
  return v0 * t + 0.5 * a * t * t;
}
console.log(`console.log(distanceTraveled(20, -3, 4))`);
console.log(distanceTraveled(20, -3, 4));
console.log();
