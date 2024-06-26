import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Subscribe from '../../components/general/Subscribe';
import TopHeadCatlog from './TopHeadCatalog';
import FilterSort from './FilterSort';
import CatalogCatalog from './CatalogCatalog';
import Pagination from './Pagination';
import { createContext } from 'react';

const checBoxList = {
    sortCart__check1: false,
    sortCart__check2: false,
    sortCart__check3: false,
    sortCart__check4: false
};

export const CheckBoxSort = createContext(null);

function CatalogPage() {
    return (
        <div>
            <Header />
            <TopHeadCatlog />
            <CheckBoxSort.Provider value={checBoxList}>
                <FilterSort />
                <CatalogCatalog />
            </CheckBoxSort.Provider>
            <Pagination />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default CatalogPage;