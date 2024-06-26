import { useSelector } from "react-redux";
import ProductCardLarge from "./ProductCardLarge";

function Catalog() {

    const count = 6;
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
        <section className="catalog center">
            <h2 className="catalog__header">Fetured Items</h2>
            <p className="catalog__heading">Shop for items based on what we
                featured in this week</p>
            <div className="catalog__box">
                {
                    newArray.map(item => <ProductCardLarge product={item} key={item.id} />)
                }
            </div>
        </section>
    );
}

export default Catalog;