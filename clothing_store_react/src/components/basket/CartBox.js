import ex1 from '../../img/products_3.jpg';
import ex2 from '../../img/products_12.jpg';

function CartBox() {
    return (

        <div className="cart-box center">
            <div className="cart-box__product-box">
                <ul className="cart-box__product-box__list">
                    <li><div className="cart-box__product-box__item">
                        <img className="cart-box__product-box__pic"
                            src={ex1} alt="Товар_1" />
                        <div
                            className="cart-box__product-box__description">
                            <div
                                className="cart-box__product-box__name">MANGO
                                PEOPLE T-SHIRT
                            </div>
                            <div
                                className="cart-box__product-box__close">
                                <svg width="18" height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                        fill="#575757" />
                                </svg>
                            </div>
                            <ul
                                className="cart-box__product-box__data">
                                <li>Price: <span
                                    className="cart-box__product-box__price">$300</span></li>
                                <li>Color: Red</li>
                                <li>Size: XI</li>
                                <li
                                    className="cart-box__product-box__quantity-flex">Quantity:<div
                                        className="cart-box__product-box__quantity">2</div></li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li><div className="cart-box__product-box__item">
                        <img className="cart-box__product-box__pic"
                            src={ex2} alt="Товар_2" />
                        <div
                            className="cart-box__product-box__description">
                            <div
                                className="cart-box__product-box__name">MANGO
                                PEOPLE T-SHIRT
                            </div>
                            <div
                                className="cart-box__product-box__close">
                                <svg width="18" height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                        fill="#575757" />
                                </svg>
                            </div>
                            <ul
                                className="cart-box__product-box__data">
                                <li>Price: <span
                                    className="cart-box__product-box__price">$300</span></li>
                                <li>Color: Red</li>
                                <li>Size: XI</li>
                                <li
                                    className="cart-box__product-box__quantity-flex">Quantity:<div
                                        className="cart-box__product-box__quantity">2</div></li>
                            </ul>
                        </div>
                    </div>
                    </li>
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