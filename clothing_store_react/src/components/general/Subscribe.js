import face from '../../img/subscribe_1_face.png';

function Subscribe() {
    return (
        <aside className="subscribe center">
            <div className="subscribe__left">
                <img src={face} alt="Face" />
                <p className="subscribe__left__text">“Vestibulum quis porttitor dui!
                    Quisque viverra nunc mi, <i>a pulvinar purus
                        condimentum</i>“
                </p>
            </div>
            <div className="subscribe__right">
                <h2 className="subscribe__right__heading">SUBSCRIBE</h2>
                <h3 className="subscribe__right__text">FOR OUR NEWLETTER AND
                    PROMOTION</h3>
                <div className="subscribe__right__form">
                    <input className="subscribe__right__form__input" type="email"
                        placeholder="Enter Your Email" />
                    <input className="subscribe__right__form__button"
                        type="submit"
                        value="Subscribe" />
                </div>
            </div>
        </aside>
    );
}

export default Subscribe;