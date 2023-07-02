const data = JSON.parse(cardsInfo);

const goodsEl = document.querySelector('.main__goods');

data.forEach(element => {
    // создаем общий блок карточки и добавлям класс
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    // создаем блок с фотографией товара для карточки
    const itemPhotoEl = document.createElement("div");
    itemPhotoEl.classList.add("item__photo");
    // создаем блок фотографии, указываем адрес, описание, класс
    const itemImg = document.createElement("img");
    itemImg.classList.add("item__image-product");
    itemImg.src = element.image;
    itemImg.alt = "product_photo";    
    // добавляем фотографию в блок фото карточки
    itemPhotoEl.append(itemImg);
    
    // создаем блок для описания товара и добавляем класс
    const itemInfoEl = document.createElement("div");
    itemInfoEl.classList.add("item__card");

    // создаем элемент с названием товара
    const itemName = document.createElement("h4");
    itemName.classList.add("item__product-name");
    itemName.textContent = element.name;
    // создаем элемент с описанием товара
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item__product-description");
    itemDescription.textContent = element.description;
    // создаем общий блок с ценой товара
    const itemPriceEl = document.createElement("p");
    itemPriceEl.classList.add("item__product-price");
    itemPriceEl.textContent = element.price;
    // создаем блок для валюты цены товара и добавляем в общий блок с ценой
    const itemPriceCurrency = document.createElement("span");
    itemPriceCurrency.classList.add("item__currency");
    itemPriceCurrency.textContent = element.currency;
    itemPriceEl.insertAdjacentElement("afterbegin", itemPriceCurrency);

    // в блок с информацией о товаре добавляем данные
    itemInfoEl.append(itemName);
    itemInfoEl.append(itemDescription);
    itemInfoEl.append(itemPriceEl);
    // Добавляем в общую карточку товара данные с фотографией и описанием
    itemEl.append(itemPhotoEl);
    itemEl.append(itemInfoEl);
    
    // Добавляем карточку с товаром для отображения на сайте
    goodsEl.append(itemEl);
});