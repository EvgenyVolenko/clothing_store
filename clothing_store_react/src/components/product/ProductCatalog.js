import { useSelector } from 'react-redux';
import ProductCardLarge from '../general/ProductCardLarge';

function ProductCatalog() {
    const count = 3;
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
            <h2 style={{ display: 'none' }}>Для валидации</h2>
            <div className="catalog__box">
                {
                    newArray.map(item => <ProductCardLarge product={item} key={item.id} />)
                }
            </div>
        </section>
    );
}

export default ProductCatalog;