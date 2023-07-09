const createCardToShopCart = btn => {
	// получаем исходную карточку товара по которой произвели нажатие
	const currItem = btn.parentElement.parentElement.parentElement;
	// Находим элемент с фотографией товара, чтобы получить путь к фото
	const imgItem = currItem.firstChild.firstChild;

	// создаем блок для карточки товара в корзине, добавляем класс
	const productCard = document.createElement('div');
	productCard.classList.add('cart__product');
	// создаем раздел с фотографией товара
	const productImage = document.createElement('img');
	productImage.classList.add('product__image');
	productImage.src = imgItem.src;
	productImage.alt = 'product image';

	// Создаем раздел с описанием товара
	const productDescription = document.createElement('div');
	productDescription.classList.add('product__description');

	// Создание раздела с названием товара и кнопкой удаления
	const productName = document.createElement('div');
	productName.classList.add('product__name');
	const productNameLink = document.createElement('a');
	productNameLink.classList.add('product__link');
	productNameLink.href = '#';
	productNameLink.textContent = currItem.lastChild.firstChild.textContent;
	const productRemoveButton = document.createElement('button');
	productRemoveButton.classList.add('product__remove-button');
	productRemoveButton.insertAdjacentHTML('afterbegin', removeButtonSvg);

	productName.append(productNameLink);
	productName.append(productRemoveButton);

	// Создаем раздел с характеристиками товара
	const productAttributes = document.createElement('div');
	productAttributes.classList.add('product__attributes');

	// Раздел цены - общий блок
	const productPriceP = document.createElement('p');
	productPriceP.textContent = 'Price: ';
	// Раздел цены - сумма
	const productPriceAmount = document.createElement('span');
	productPriceAmount.classList.add('product__attributes_price');
	productPriceAmount.textContent = currItem.lastChild.lastChild.lastChild.textContent;
	// Раздел цены - валюта
	const productPriceCurrency = document.createElement('span');
	productPriceCurrency.classList.add('product__price_currency');
	productPriceCurrency.textContent = currItem.lastChild.lastChild.firstChild.textContent;
	// Собираем блок с ценой
	productPriceAmount.insertAdjacentElement('afterbegin', productPriceCurrency);
	productPriceP.append(productPriceAmount);

	// Раздел цвета товара
	const productColor = document.createElement('p');
	productColor.textContent = 'Color: Red';

	// Раздел размера товара
	const productSize = document.createElement('p');
	productSize.textContent = 'Size: Xl';

	// Форма с вводом количества товара
	const productQuantityForm = document.createElement('form');
	productQuantityForm.classList.add('product__attributes_input-box');
	productQuantityForm.textContent = 'Quantity:';

	const productQuantityInput = document.createElement('input');
	productQuantityInput.classList.add('product__attributes_input');
	productQuantityInput.type = 'number';
	productQuantityInput.value = 1;
	productQuantityForm.append(productQuantityInput);

	productAttributes.append(productPriceP);
	productAttributes.append(productColor);
	productAttributes.append(productSize);
	productAttributes.append(productQuantityForm);

	// Добавляем в блок с описанием товара данные о названии и характеристиках товара
	productDescription.append(productName);
	productDescription.append(productAttributes);

	// Добавляем в итоговую карточку товара фотографию и описание
	productCard.append(productImage);
	productCard.append(productDescription);

	// Добавляем событие на кнопку для удаление товара из корзины
	productRemoveButton.addEventListener('click', function (e) {
		// Удаляем карточку с товаром
		productCard.remove();
		// Если карточек в корзине больше нет, тогда скрываем корзину
		if (cartsElement.children.length == 0) {
			shopCartEl.classList.add('invisible');
		}
	});

	// возвращаем готовую карточку
	return productCard;
};
