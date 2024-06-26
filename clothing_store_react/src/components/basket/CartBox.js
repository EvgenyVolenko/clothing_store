import { useSelector } from 'react-redux';
import ProductCardBasket from './ProductCardBasket';

function CartBox() {

    const count = 2;
    const products = useSelector(state => state.products.array);

    const randomArray = (products, count) => {
        let array = [];

        while (array.length < count) {
            let index = Math.floor(Math.random() * products.length);
            if (array.includes(products[index])) {
                continue;
            }
            array.push(products[index]);
        }
        return array;
    }

    const newArray = randomArray(products, count);

    return (

        <div className="cart-box center">
            <div className="cart-box__product-box">
                <ul className="cart-box__product-box__list">
                    {
                        newArray.map(item => <ProductCardBasket product={item} key={item.id} />)
                    }
                </ul>
                <div className="cart-box__product-box__button-box">
                    <a href="#" className="cart-box__product-box__button">
                        <p className="uppercase">C</p>LEAR
                        SHOPPING CART</a>
                    <a href="#" className="cart-box__product-box__button">
                        <p className="uppercase">C</p>ONTINUE
                        SHOPPING</a>
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
                            className="uppercase">G</p>ET
                        A
                        QUOTE</div>
                </div>
                <div className="cart-box__order-details__checkout">
                    <div className="cart-box__order-details__checkout__sub-total">
                        <p>SUB TOTAL</p>
                        <p>$900</p>
                    </div>
                    <div className="cart-box__order-details__checkout__grand-total">
                        <p>GRAND TOTAL</p>
                        <p
                            className="cart-box__order-details__checkout__bold">$900</p>
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