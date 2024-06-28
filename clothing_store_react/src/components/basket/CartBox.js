import { useDispatch, useSelector } from 'react-redux';
import ProductCardBasket from './ProductCardBasket';

function CartBox() {

    let newArray = [];

    const busketObj = useSelector(state => state.purchases.obj);

    for (const key of Object.keys(busketObj)) {
        newArray.push(busketObj[key]);
    }

    let grandTotal = 0;

    newArray.forEach(element => {
        grandTotal += element[0].catalog__cart__price * element[1];
    });

    return (

        <div className="cart-box center">
            <div className="cart-box__product-box">
                <ul className="cart-box__product-box__list">
                    {
                        newArray.map(item => <ProductCardBasket product={item[0]} key={item[0].id} quantityStart={1} />)
                    }
                </ul>
                <div className="cart-box__product-box__button-box">
                    <a href="#" className="cart-box__product-box__button">
                        <p className="uppercase">CLEAR SHOPPING CART</p>
                    </a>
                    <a href="#" className="cart-box__product-box__button">
                        <p className="uppercase">CONTINUE SHOPPING</p>
                    </a>
                </div>
            </div>
            <div className="cart-box__order-details">
                <div className="cart-box__order-details__ship-adress">
                    <span
                        className="cart-box__order-details__ship-adress__heading">SHIPPING
                        ADRESS</span>
                    <ul
                        className="cart-box__order-details__ship-adress__list">
                        <li><input
                            className="cart-box__order-details__ship-adress__input cart-box__order-details__input"
                            type="text" id="country" required
                            placeholder="Bangladesh" /></li>
                        <li><input
                            className="cart-box__order-details__ship-adress__input cart-box__order-details__input-dark"
                            type="text" id="state" required
                            placeholder="State" /></li>
                        <li><input
                            className="cart-box__order-details__ship-adress__input cart-box__order-details__input-dark"
                            type="text" id="zip" required
                            placeholder="Postcode / Zip" /></li>
                    </ul>
                    <div
                        className="cart-box__order-details__ship-adress__button"><p
                            className="uppercase">GET A
                            QUOTE</p>
                    </div>
                </div>
                <div className="cart-box__order-details__checkout">
                    <div className="cart-box__order-details__checkout__sub-total">
                        <p>SUB TOTAL</p>
                        <p>${grandTotal.toFixed(2)}</p>
                    </div>
                    <div className="cart-box__order-details__checkout__grand-total">
                        <p>GRAND TOTAL</p>
                        <p
                            className="cart-box__order-details__checkout__bold">${grandTotal.toFixed(2)}</p>
                    </div>
                    <div className="cart-box__order-details__checkout__line"></div>
                    <div className="cart-box__order-details__checkout__btn">PROCEED
                        TO CHECKOUT</div>
                </div>
            </div>
        </div>
    );
}

export default CartBox;