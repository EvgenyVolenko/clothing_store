import { createSlice } from '@reduxjs/toolkit';

export const checkboxsSlice = createSlice({

    name: 'checkboxs',
    initialState: {
        obj: {}
    },
    reducers: {
        changeCheckboxs: (state, { payload: { id, checked } }) => {
            state.obj = { ...state.obj, [id]: checked };
        }
    }
});

export const { changeCheckboxs } = checkboxsSlice.actions;
export default checkboxsSlice.reducer;