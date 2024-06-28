import { Provider } from 'react-redux';
import './styles/style.css';
import { store } from './components/store/store';
import StartPage from './components/index/StartPage';
import CatalogPage from './components/catalog/CatalogPage';
import BasketPage from './components/basket/BasketPage';
import CatalogCatalog from './components/catalog/CatalogCatalog';

function App() {
  return (
    <div className='base'>
      <Provider store={store}>
        {/* <ProductCardLarge /> */}
        <CatalogCatalog />
        {/* <ProductPage /> */}
        <BasketPage />
        {/* <StartPage /> */}
      </Provider>
    </div>
  );
}

export default App;
