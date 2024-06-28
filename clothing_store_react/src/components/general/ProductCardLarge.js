import { useDispatch } from 'react-redux';
import ToBasketButtonSVG from './ToBasketButtonSVG';
import { changePurchase } from '../reducers/purchasesSlice';

function ProductCardLarge({ product }) {

    const dispatch = useDispatch();

    const productToBasket = (element) => {
        dispatch(changePurchase({ productId: element.id, product: element }));
    }

    return (
        <article className="catalog__item">

            <div className="catalog__item_selected">
                <img src={require("../../img/" + product.img_src)} alt={product.img_alt} />

                <button className="catalog__cart__button" onClick={() => (productToBasket(product))}>
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