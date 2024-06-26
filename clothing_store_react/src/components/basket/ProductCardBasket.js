import CloseCrossSVG from './CloseCrossSVG';

function ProductCardBasket({ product }) {

    return (
        <li><div className="cart-box__product-box__item">
            <img className="cart-box__product-box__pic"
                src={require("../../img/" + product.img_src)} alt={product.img_alt} />
            <div
                className="cart-box__product-box__description">
                <div className="cart-box__product-box__name">{product.catalog__cart__name}</div>
                <div
                    className="cart-box__product-box__close">
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
                        <input type='number' min={0} max={99} className="cart-box__product-box__quantity"></input>
                    </li>
                </ul>
            </div>
        </div>
        </li>
    );
}

export default ProductCardBasket;