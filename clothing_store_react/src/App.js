import { Provider } from 'react-redux';
import './styles/style.css';
import { store } from './components/store/store';
import StartPage from './components/index/StartPage';
import CatalogPage from './components/catalog/CatalogPage';
import BasketPage from './components/basket/BasketPage';

function App() {
  return (
    <div className='base'>
      <Provider store={store}>
        {/* <ProductCardLarge /> */}
        {/* <CatalogPage /> */}
        {/* <ProductPage /> */}
        <BasketPage />
        {/* <StartPage /> */}
      </Provider>
    </div>
  );
}

export default App;
