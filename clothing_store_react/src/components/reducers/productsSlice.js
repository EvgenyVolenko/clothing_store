import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { catalogData } from '../../data/data';

const parseData = JSON.parse(catalogData);

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve({ data: parseData }), 1000);
        setTimeout(() => reject(new Error('Данные не удалось считать')), 3000);
    });
    return promise;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        array: parseData,
        loading: false
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.array = action.payload.data;
                state.loading = false;
            })
    }
});

export default productsSlice.reducer;