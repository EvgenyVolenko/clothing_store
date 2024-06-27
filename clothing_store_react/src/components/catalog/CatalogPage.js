import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import TopHeadCatlog from './TopHeadCatalog';
import FilterSort from './FilterSort';
import CatalogCatalog from './CatalogCatalog';
import Pagination from './Pagination';

function CatalogPage() {
    return (
        <div>
            <Header />
            <TopHeadCatlog />
            <FilterSort />
            <CatalogCatalog />
            <Pagination />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default CatalogPage;