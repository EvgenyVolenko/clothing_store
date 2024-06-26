import { useSelector } from 'react-redux';
import ProductCardLarge from '../general/ProductCardLarge';

function CatalogCatalog() {

    const chapter = 'men';

    const products = useSelector(state => state.products.array);

    const filteredArray = products.filter(item => item.chapter.toUpperCase() === chapter.toUpperCase());

    return (
        <section className="catalog center">
            <h2 style={{ display: 'none' }}>Для валидации</h2>
            <div className="catalog__box">
                {
                    filteredArray.map(item => <ProductCardLarge product={item} key={item.id} />)
                }
            </div>
        </section>
    );
}

export default CatalogCatalog;