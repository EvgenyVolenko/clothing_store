import { createSlice } from '@reduxjs/toolkit';

export const purchasesSlice = createSlice({

    name: 'purchases',
    initialState: {
        obj: {}
    },
    reducers: {
        changePurchase: (state, { payload: { productId, quantity } }) => {
            state.obj = { ...state.obj, [productId]: quantity };
        },
        deletPurchase: (state, { payload: productId }) => {
            delete state.obj[productId];
        }
    }
});

export const { changePurchase, deletPurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;