// Необходимо создать переменную в которой будет храниться температура
// в градусах Цельсия, преобразовать значение в температуру по фаренгейту.


const degreesCelsius = prompt("Сколько градусов вы хотите перевести из Цельсия в Фаренгейт");
const degreesFahrenheit = degreesCelsius * 1.8 + 32;
alert(`В Фаренгейтах это ${degreesFahrenheit}`);
console.log(`В Фаренгейтах это ${degreesFahrenheit}`);