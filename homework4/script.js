// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const printNumbers = (start, finish) => {
    const zeroSuffix = " - это ноль";
    const evenSuffix = " - четное число";
    const oddSuffix = " - нечетное число";

    for (let i = start; i < finish; i++) {
        let line = i;

        if (i === 0) {
            line += zeroSuffix;
        } else if (i % 2 === 0) {
            line += evenSuffix;
        } else {
            line += oddSuffix;
        }
        console.log(line);
    }
}

printNumbers(0, 11);
printNumbers(3, 7);


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const removeElementsFromArray = (baseArr, start, count, ...addValues) => {
    if (addValues.length === 0)
        baseArr.splice(start, count);
    else
        baseArr.splice(start, count, addValues);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(`Начальное состояние массива ${arr}`);
removeElementsFromArray(arr, 3, 2);
console.log(`Итоговое состояние массива ${arr}`);

console.log(`Начальное состояние массива ${arr1}`);
removeElementsFromArray(arr1, 3, 2, -3, -5, -7);
console.log(`Итоговое состояние массива ${arr1}`);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const generateIntArray = (countElements, minValue, maxValue) => {
    const arr = [];

    for (let i = 0; i < countElements; i++) {
        const num = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        arr.push(num);
    }
    return arr;
}

const findSumElementsArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const findMinElement = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

const containsElement = (arr, value) => {
    let answer = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            answer = true;
            break;
        }
    }

    return answer;
}

const randomArr = generateIntArray(5, 0, 9);
console.log(`Рандомный массив ${randomArr}`);
console.log(`Сумма элементов массива равна =  ${findSumElementsArray(randomArr)}`);
console.log(`Минимальный элемент массива равен =  ${findMinElement(randomArr)}`);
const numForSearch = 3;
console.log(`Число ${numForSearch} встречается в массиве? Ответ = ${containsElement(randomArr, numForSearch)}`);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

const toCell = (string) => ` ${string} `

const drawTriangle = (size) => {
    const symbol = toCell("*");
    const space = " ";

    for (let i = 0; i < size; i++) {
        const symbolCount = i;
        const spaceCount = size - i;
        const result = space.repeat(spaceCount) +  symbol.repeat(symbolCount);
        console.log(result);
    }
}
// кривенький конечно, но я не нашел по быстрому как можно выровнять это дело в ЖСе)
drawTriangle(10);