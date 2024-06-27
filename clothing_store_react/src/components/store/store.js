import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsSlice';
import checkboxsReducer from '../reducers/checkboxsSlice';


export const store = configureStore({
    reducer: {
        products: productsReducer,
        checkboxs: checkboxsReducer
    }
});