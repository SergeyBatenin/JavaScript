const data = JSON.parse(cardsInfo);

const goodsEl = document.querySelector('.main__goods');

data.forEach(element => {
    // создаем общий блок карточки и добавлям класс, id
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    itemEl.setAttribute("id", element.id);

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

    // Добавляем блок с кнопкой при эффекте наведения
    const itemBtnLink = document.createElement("a");
    const itemBtnEl = document.createElement("div");
    itemBtnEl.classList.add("item__button");
    itemBtnEl.textContent = "Add to Cart";
    itemBtnEl.insertAdjacentHTML("afterbegin", shoppingCartSvg);
    itemBtnLink.append(itemBtnEl);

    itemPhotoEl.append(itemBtnLink);
});


// добавляем событие, чтобы при клике на товар он добавлялся в корзину
const shopCartEl = document.querySelector('.cart-content');
const addItemToShopCartBtns = document.querySelectorAll('.item__button');
// Элемент где непосредственно будут храниться карточки товаров
const cartsElement = document.querySelector('.cart');

addItemToShopCartBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // получаем исходную карточку товара по которой произвели нажатие
        const currItem = btn.parentElement.parentElement.parentElement;
        const imgItem = currItem.firstChild.firstChild;
        
        // создаем блок для карточки товара в корзине, добавляем класс
        const productCard = document.createElement("div");
        productCard.classList.add("cart__product");
        // создаем раздел с фотографией товара
        const productImage = document.createElement("img");
        productImage.classList.add("product__image");
        productImage.src = imgItem.src;
        productImage.alt = "product image";

        // Создаем раздел с описанием товара
        const productDescription = document.createElement("div");
        productDescription.classList.add("product__description");
        // Создание раздела с названием товара и кнопкой удаления
        const productName = document.createElement("div");
        productName.classList.add("product__name");
        const productNameLink = document.createElement("a");
        productNameLink.classList.add("product__link");
        productNameLink.href = "#";
        productNameLink.textContent = currItem.lastChild.firstChild.textContent;
        const productRemoveButton = document.createElement("button");
        productRemoveButton.classList.add("product__remove-button");
        productRemoveButton.insertAdjacentHTML("afterbegin", removeButtonSvg);

        productName.append(productNameLink);
        productName.append(productRemoveButton);

        // Создаем раздел с характеристиками товара
        const productAttributes = document.createElement("div");
        productAttributes.classList.add("product__attributes");
        // Раздел цены - общий блок
        const productPriceP = document.createElement("p");
        productPriceP.textContent = "Price: ";
        // Раздел цены - сумма
        const productPriceAmount = document.createElement("span");
        productPriceAmount.classList.add("product__attributes_price");
        productPriceAmount.textContent = currItem.lastChild.lastChild.lastChild.textContent;
        // Раздел цены - валюта
        const productPriceCurrency = document.createElement("span");
        productPriceCurrency.classList.add("product__price_currency");
        productPriceCurrency.textContent = currItem.lastChild.lastChild.firstChild.textContent;
        // Собираем блок с ценой
        productPriceAmount.insertAdjacentElement("afterbegin", productPriceCurrency);
        productPriceP.append(productPriceAmount);

        // Раздел цвета товара
        const productColor = document.createElement("p");
        productColor.textContent = "Color: Red";

        // Раздел размера товара
        const productSize = document.createElement("p");
        productSize.textContent = "Size: Xl";

        // Форма с вводом количества товара
        const productQuantityForm = document.createElement("form");
        productQuantityForm.classList.add("product__attributes_input-box");
        productQuantityForm.textContent = "Quantity:";
        
        const productQuantityInput = document.createElement("input");
        productQuantityInput.classList.add("product__attributes_input");
        productQuantityInput.type = "number";
        productQuantityInput.value = 1;

        productQuantityForm.append(productQuantityInput);

        productAttributes.append(productPriceP);
        productAttributes.append(productColor);
        productAttributes.append(productSize);
        productAttributes.append(productQuantityForm);
        
        productDescription.append(productName);
        productDescription.append(productAttributes);

        productCard.append(productImage);
        productCard.append(productDescription);

        cartsElement.append(productCard);
        // Делаем нашу корзину видимой с добавленным товаром
        shopCartEl.classList.remove("invisible");

        // Добавляем событие удаление элемента по нажатию по кнопке
        productRemoveButton.addEventListener('click', function (e) {            
            productCard.remove();
            // Если карточек в корзине больше нет, тогда скрываем корзину
            if (cartsElement.children.length == 0) {
                shopCartEl.classList.add("invisible");
            }        
        });
    });
});


// добавляем событие для кнопок удаления товаров из корзины
const removeBtns = document.querySelectorAll('.product__remove-button');
removeBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // Определяем родительский блок карточки товара
        const currentItem = e.currentTarget.parentElement.parentElement.parentElement;

        currentItem.remove();

        if (cartsElement.children.length == 0) {
            shopCartEl.classList.add("invisible");
        }        
    });
});