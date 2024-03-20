const parseData = JSON.parse(catalogData);
const sectionCatalog = document.querySelector('section.catalog > div.catalog__box');
const template = catalog_item_template.content;
const divCartBoxIndexPage = document.querySelector('div.cart-box_index-page');
const divListCart = divCartBoxIndexPage.querySelector('ul.cart-box__product-box__list');
const templateProdCart = cartBox_indexPage_template.content;

let productBoxListNode = divListCart.querySelectorAll('div.cart-box__product-box__item');

const testProductBoxListLenght = () => {
    productBoxListNode = divListCart.querySelectorAll('div.cart-box__product-box__item');
    if (productBoxListNode.length === 0) {
        divCartBoxIndexPage.classList.add('cart-box_hidden');
    } else {
        divCartBoxIndexPage.classList.remove('cart-box_hidden');
    }
};

const fillingCartItem = element => {
    const cartBoxItemTemplate = templateProdCart.cloneNode(true);
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > img.cart-box__product-box__pic').src = element.img_src;
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > img.cart-box__product-box__pic').alt = element.img_alt;
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > div.cart-box__product-box__description > div.cart-box__product-box__name').textContent = element.catalog__cart__name;
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > div.cart-box__product-box__description > ul.cart-box__product-box__data > li > span.cart-box__product-box__price').textContent = element.catalog__cart__price;
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > div.cart-box__product-box__description > ul.cart-box__product-box__data > li.cart-box__product-box__color').textContent = `Color: ${element.color}`;
    cartBoxItemTemplate.querySelector('div.cart-box__product-box__item > div.cart-box__product-box__description > ul.cart-box__product-box__data > li.cart-box__product-box__size').textContent = `Size: ${element.size}`;

    const itemClose = cartBoxItemTemplate.querySelector('div.cart-box__product-box__close');
    itemClose.addEventListener('click', function (e) {
        productBoxListNode[0].remove();
    });

    divListCart.appendChild(cartBoxItemTemplate);

    testProductBoxListLenght();
};

parseData.forEach(element => {
    const catalogItemTemplate = template.cloneNode(true);
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__item_selected > img').src = element.img_src;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__item_selected > img').alt = element.img_alt;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > h4.catalog__cart__name').textContent = element.catalog__cart__name;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > p.catalog__cart__description').textContent = element.catalog__cart__description;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > p.catalog__cart__price').textContent = element.catalog__cart__price;

    const itemsButton = catalogItemTemplate.querySelector('button');

    itemsButton.addEventListener('click', () => {
        fillingCartItem(element);
    });

    sectionCatalog.appendChild(catalogItemTemplate);
});