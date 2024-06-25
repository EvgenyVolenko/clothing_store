import promoImg from '../../img/promo_img.png';

function Promo() {
    return (
        <section className="promo center">
            <img src={promoImg} alt="img" className="promo__img display-none" />
            <div className="promo__text">
                <h1 className="promo__text__header">THE BRAND</h1>
                <h2 className="promo__text__heading">OF LUXERIOUS <span
                    className="promo__text__heading_span">FASHION</span></h2>
            </div>
        </section>
    );
}

export default Promo;