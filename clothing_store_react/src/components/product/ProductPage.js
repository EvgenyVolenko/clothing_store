import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import TopHeadProduct from './TopHeadProduct';
import MainProduct from './MainProduct';
import ProductCatalog from './ProductCatalog';

function ProductPage() {
    return (
        <div>
            <Header />
            <TopHeadProduct />
            <MainProduct />
            <ProductCatalog />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default ProductPage;