import { useSelector } from "react-redux";
import ToBasketButtonSVG from './ToBasketButtonSVG';

function ProductCardLarge() {

    const product = useSelector(state => state.products.array[0]);

    const url = product.img_src;
    console.log(url);

    return (
        <article className="catalog__item">

            <div className="catalog__item_selected">
                <img src={require("../../img/" + product.img_src)} alt="product_1" />

                <button className="catalog__cart__button">
                    <ToBasketButtonSVG />
                    <span>Add to Cart</span>
                </button>
            </div>

            <div className="catalog__cart">
                <h4 className="catalog__cart__name">{product.catalog__cart__name}</h4>
                <p className="catalog__cart__description">{product.catalog__cart__description}</p>
                <p className="catalog__cart__price">${product.catalog__cart__price.toFixed(2)}</p>
            </div>
        </article>
    );
}

export default ProductCardLarge;