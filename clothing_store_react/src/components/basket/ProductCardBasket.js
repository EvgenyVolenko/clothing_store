import { useState } from 'react';
import CloseCrossSVG from './CloseCrossSVG';
import { useDispatch } from 'react-redux';
import { changePurchase, deletPurchase } from '../reducers/purchasesSlice';

function ProductCardBasket({ product, quantityStart }) {

    const [quantity, setQuantity] = useState(quantityStart);
    const dispatch = useDispatch();

    const changeQuantity = (e, product) => {
        setQuantity(e.target.value);
        dispatch(changePurchase({ productId: product.id, product: product, quantity: e.target.value }));
    }

    const deleteProduct = (id) => {
        dispatch(deletPurchase(id));
    }

    return (
        <li><div className="cart-box__product-box__item">
            <img className="cart-box__product-box__pic"
                src={require("../../img/" + product.img_src)} alt={product.img_alt} />
            <div
                className="cart-box__product-box__description">
                <div className="cart-box__product-box__name">{product.catalog__cart__name}</div>
                <div
                    className="cart-box__product-box__close" onClick={() => deleteProduct(product.id)}>
                    <CloseCrossSVG />
                </div>
                <ul
                    className="cart-box__product-box__data">
                    <li>Price: <span
                        className="cart-box__product-box__price">${product.catalog__cart__price}</span></li>
                    <li>Color: {product.color}</li>
                    <li>Size: {product.size}</li>
                    <li
                        className="cart-box__product-box__quantity-flex">Quantity:
                        <input onChange={(e) => (changeQuantity(e, product))} type='number' min={0} max={99} className="cart-box__product-box__quantity" defaultValue={quantity}></input>
                    </li>
                </ul>
            </div>
        </div>
        </li>
    );
}

export default ProductCardBasket;