import womenImg from '../../img/offer_women.jpg';
import menImg from '../../img/offer_men.jpg';
import kidsImg from '../../img/offer_kids.jpg';
import accesoriesImg from '../../img/offer_acessories.jpg';

function Offer() {
    return (
        <section className="offer center">
            <h2 style={{ display: 'none' }}>For validation</h2>
            <article className="offer__card">
                <img src={womenImg} alt="women" />
                <div className="offer__text">
                    <h4 className="offer__text__header">30% OFF</h4>
                    <h3 className="offer__text__heading">FOR
                        WOMEN</h3>
                </div>
            </article>
            <article className="offer__card">
                <img src={menImg} alt="men" />
                <div className="offer__text">
                    <h4 className="offer__text__header">HOT DEAL</h4>
                    <h3 className="offer__text__heading">FOR MEN</h3>
                </div>
            </article>
            <article className="offer__card">
                <img src={kidsImg} alt="kids" />
                <div className="offer__text">
                    <h4 className="offer__text__header">NEW ARRIVALS</h4>
                    <h3 className="offer__text__heading">FOR
                        KIDS</h3>
                </div>
            </article>
            <article className="offer__card offer_wide">
                <img src={accesoriesImg} alt="accesories" />
                <div className="offer__text">
                    <h4 className="offer__text__header">LUXIROUS & TRENDY</h4>
                    <h3 className="offer__text__heading">ACCESORIES</h3>
                </div>
            </article>
        </section>
    );
}

export default Offer;