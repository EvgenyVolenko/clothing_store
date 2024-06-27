import { useSelector } from 'react-redux';
import ProductCardLarge from '../general/ProductCardLarge';

function CatalogCatalog() {

    const chapter = 'women';

    const products = useSelector(state => state.products.array);

    const checkboxs = useSelector(state => state.checkboxs.obj);

    const filteredArray = products.filter(item => item.chapter.toUpperCase() === chapter.toUpperCase());

    let resArray = []
    let checkCheckedEmpty = true;

    for (const key of Object.keys(checkboxs)) {

        if (checkboxs[key]) {
            checkCheckedEmpty = false;
            filteredArray.forEach(element => {
                if (element.size === key) {
                    resArray.push(element);
                    checkCheckedEmpty = true;
                }
            });
        }
    }

    if (!checkCheckedEmpty && resArray.length === 0) {
        return (
            <>
            </>
        );
    } else {
        return (
            <section className="catalog center">
                <h2 style={{ display: 'none' }}>Для валидации</h2>
                <div className="catalog__box">
                    {
                        resArray.length === 0 ?
                            filteredArray.map(item => <ProductCardLarge product={item} key={item.id} />) :
                            resArray.map(item => <ProductCardLarge product={item} key={item.id} />)
                    }
                </div>
            </section>
        );
    }
}

export default CatalogCatalog;