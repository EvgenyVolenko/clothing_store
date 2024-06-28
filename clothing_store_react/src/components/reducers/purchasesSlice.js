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
            delete state.obj[productId];
        }
    }
});

export const { changePurchase, deletPurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;