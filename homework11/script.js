// Получаем данные о товарах
const data = JSON.parse(cardsInfo);

// Находим родительский блок для отображения доступных товаров
const goodsEl = document.querySelector('.main__goods');

// Создаем и добавляем товар для отображения пользователю
data.forEach(element => {
	// Передаем данные о товаре в функцию создания карточки товара
	const itemEl = createMainCard(element);

	// Добавляем готовую карточку с товаром для отображения на сайте
	goodsEl.append(itemEl);
});

// Находим основную секцию корзины
const shopCartEl = document.querySelector('.cart-content');
// находим блок где непосредственно будут отображаться добавленные товары
const cartsElement = document.querySelector('.cart');

// Находим все кнопки и добавляем событие, чтобы при клике на товар он добавлялся в корзину
const addItemToShopCartBtns = goodsEl.querySelectorAll('.item__button');

addItemToShopCartBtns.forEach(btn => {
	btn.addEventListener('click', function (e) {
		// Вызываем функцию по созданию карточки для корзины
		const productCard = createCardToShopCart(btn);
		// Добавляем ее в корзину
		cartsElement.append(productCard);

		// Делаем нашу корзину видимой с добавленным товаром
		shopCartEl.classList.remove('invisible');
	});
});
