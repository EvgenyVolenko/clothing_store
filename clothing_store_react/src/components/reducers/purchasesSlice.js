import { createSlice } from '@reduxjs/toolkit';

export const purchasesSlice = createSlice({

    name: 'purchases',
    initialState: {
        obj: {}
    },
    reducers: {
        changePurchase: (state, { payload: { productId, product, quantity = 1 } }) => {
            state.obj = { ...state.obj, [productId]: [product, quantity] };
        },
        deletPurchase: (state, { payload: productId }) => {
            console.log(productId);
            delete state.obj[productId];
        },
        clearPurchase: (state) => {
            state.obj = {};
        }
    }
});

export const { changePurchase, deletPurchase, clearPurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;