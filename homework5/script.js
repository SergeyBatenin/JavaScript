// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
};
for (const item of Object.values(numbers)) {
    if (item >= 3) {
        console.log(item);
    }
}



// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};
// Долго думал как сделать автоматический вывод рекурсивно, потом понял что комментарии
// в условии не смогу отслеживать) разочаровался сильно) Тогда кроме как прямого вывода
// больше нет идей как это вывести
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const product = [
{
    id: 3,
    price: 200
},
{
    id: 4,
    price: 900
},
{
    id: 1,
    price: 1000
},
];

const sale = (prod) => prod.forEach(elem => elem.price = elem.price * 0.85);

sale(product);
product.forEach(elem => console.log(`id: ${elem.id}, price: ${elem.price}`));


// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
{
    id: 3,
    price: 127,
    photos: [
        "1.jpg",
        "2.jpg"
    ]
},
{
    id: 5,
    price: 499,
    photos: []
},
{
    id: 10,
    price: 26,
    photos: [
        "3.jpg",
    ]
},
{
    id: 8,
    price: 78
}
];

products.filter(elem => Object.hasOwn(elem, 'photos') && elem.photos.length > 0).forEach(el => console.log(el));



// **Задание 5**
// Дано 2 массива 
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const result = {};

// Пытался что нить с редьюсом придумать, но что то не получилось ничего) не знаю как связать в одном редьюсе 2 разных объекта
// если только не выдумывать костыли просто, чтобы было)
for (let i = 0; i < en.length; i++) {
    result[en[i]] = ru[i];
}
console.log(result);