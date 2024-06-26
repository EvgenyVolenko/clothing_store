// import CatalogPage from './components/catalog/CatalogPage';
import { Provider } from 'react-redux';
import ProductCardLarge from './components/general/ProductCardLarge';
// import ProductPage from './components/product/ProductPage';
// import RegistrationPage from './components/registration/RegistrationPage';
import './styles/style.css';
// import StartPage from './components/index/StartPage';
// import BasketPage from './components/basket/BasketPage';
import { store } from './components/store/store';

function App() {
  return (
    <div className='base'>
      <Provider store={store}>
        <ProductCardLarge />
      </Provider>
    </div>
  );
}

export default App;
