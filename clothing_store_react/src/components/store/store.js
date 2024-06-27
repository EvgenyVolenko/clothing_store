import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsSlice';
import checkboxsReducer from '../reducers/checkboxsSlice';
import purchasesReducer from '../reducers/purchasesSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        checkboxs: checkboxsReducer,
        purchases: purchasesReducer
    }
});