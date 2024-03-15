const parseData = JSON.parse(catalogData);
const sectionCatalog = document.querySelector('section.catalog > div.catalog__box');

const template = catalog_item_template.content;
parseData.forEach(element => {
    const catalogItemTemplate = template.cloneNode(true);
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__item_selected > img').src = element.img_src;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__item_selected > img').alt = element.img_alt;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > h4.catalog__cart__name').textContent = element.catalog__cart__name;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > p.catalog__cart__description').textContent = element.catalog__cart__description;
    catalogItemTemplate.querySelector('article.catalog__item > div.catalog__cart > p.catalog__cart__price').textContent = element.catalog__cart__price;
    sectionCatalog.appendChild(catalogItemTemplate);
});