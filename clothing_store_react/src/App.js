import { Provider } from 'react-redux';
import './styles/style.css';
import { store } from './components/store/store';
import StartPage from './components/index/StartPage';
import CatalogPage from './components/catalog/CatalogPage';
import BasketPage from './components/basket/BasketPage';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

export const Chapter = createContext();

function App() {

  return (
    <div className='base'>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/men' element={
            <Chapter.Provider value={'men'}><CatalogPage /></Chapter.Provider>
          } />
          <Route path='/women' element={
            <Chapter.Provider value={'women'}><CatalogPage /></Chapter.Provider>
          } />
          <Route path='/kids' element={
            <Chapter.Provider value={'kids'}><CatalogPage /></Chapter.Provider>
          } />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
