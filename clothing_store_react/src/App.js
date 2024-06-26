import { Provider } from 'react-redux';
import ProductCardLarge from './components/general/ProductCardLarge';
import './styles/style.css';
import { store } from './components/store/store';
import CatalogCatalog from './components/catalog/CatalogCatalog';
import CatalogPage from './components/catalog/CatalogPage';
import ProductCatalog from './components/product/ProductCatalog';
import ProductPage from './components/product/ProductPage';
import ProductCardBasket from './components/basket/ProductCardBasket';
import BasketPage from './components/basket/BasketPage';
import StartPage from './components/index/StartPage';

function App() {
  return (
    <div className='base'>
      <Provider store={store}>
        {/* <ProductCardLarge /> */}
        {/* <CatalogPage /> */}
        {/* <ProductPage /> */}
        {/* <BasketPage /> */}
        <StartPage />
      </Provider>
    </div>
  );
}

export default App;
