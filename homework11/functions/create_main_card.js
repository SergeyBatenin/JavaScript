// Функция создания карточки товара для отображения пользователю
const createMainCard = productInfo => {
	// Создаем общий блок карточки и добавлям класс, id
	const itemEl = document.createElement('div');
	itemEl.classList.add('item');
	itemEl.setAttribute('id', productInfo.id);

	// Создаем блок с фотографией товара для карточки
	const itemPhotoEl = document.createElement('div');
	itemPhotoEl.classList.add('item__photo');

	// Создаем блок фотографии, указываем адрес, описание, класс
	const itemImg = document.createElement('img');
	itemImg.classList.add('item__image-product');
	itemImg.src = productInfo.image;
	itemImg.alt = 'product_photo';

	// Добавляем фотографию в блок фото карточки
	itemPhotoEl.append(itemImg);

	// Создаем блок для описания товара и добавляем класс
	const itemInfoEl = document.createElement('div');
	itemInfoEl.classList.add('item__card');

	// Создаем элемент с названием товара
	const itemName = document.createElement('h4');
	itemName.classList.add('item__product-name');
	itemName.textContent = productInfo.name;

	// Создаем элемент с описанием товара
	const itemDescription = document.createElement('p');
	itemDescription.classList.add('item__product-description');
	itemDescription.textContent = productInfo.description;

	// Создаем общий блок с ценой товара
	const itemPriceEl = document.createElement('p');
	itemPriceEl.classList.add('item__product-price');
	itemPriceEl.textContent = productInfo.price;

	// Создаем блок для валюты цены товара и добавляем в общий блок с ценой
	const itemPriceCurrency = document.createElement('span');
	itemPriceCurrency.classList.add('item__currency');
	itemPriceCurrency.textContent = productInfo.currency;
	itemPriceEl.insertAdjacentElement('afterbegin', itemPriceCurrency);

	// В блок с информацией о товаре добавляем данные о названии, описании и цене
	itemInfoEl.append(itemName);
	itemInfoEl.append(itemDescription);
	itemInfoEl.append(itemPriceEl);

	// Добавляем в родительский элемент карточки товара данные с фотографией и описанием
	itemEl.append(itemPhotoEl);
	itemEl.append(itemInfoEl);

	// Добавляем блок с кнопкой при эффекте наведения
	const itemBtnLink = document.createElement('a');
	const itemBtnEl = document.createElement('div');
	itemBtnEl.classList.add('item__button');
	itemBtnEl.textContent = 'Add to Cart';
	itemBtnEl.insertAdjacentHTML('afterbegin', shoppingCartSvg);

	itemBtnLink.append(itemBtnEl);
	itemPhotoEl.append(itemBtnLink);

	// Возвращаем готовую карточку
	return itemEl;
};
