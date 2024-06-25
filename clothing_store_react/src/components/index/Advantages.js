import advantages_1 from '../../img/advantages_1_auto.svg';
import advantages_2 from '../../img/advantages_2_procent.svg';
import advantages_3 from '../../img/advantages_3_crown.svg';


function Advantages() {
    return (
        <section className="advantages center">
            <h2 style={{ display: 'none' }}>For validation</h2>
            <article className="advantages__item">
                <img src={advantages_1} alt="auto" />
                <h3 className="advantages__item__heading">Free Delivery</h3>
                <p className="advantages__item__text">Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
            <article className="advantages__item">
                <img src={advantages_2} alt="procent" />
                <h3 className="advantages__item__heading">Sales & discounts</h3>
                <p className="advantages__item__text">Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
            <article className="advantages__item">
                <img src={advantages_3} alt="crown" />
                <h3 className="advantages__item__heading">Quality assurance</h3>
                <p className="advantages__item__text">Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
        </section>
    );
}

export default Advantages;