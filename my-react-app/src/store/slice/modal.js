import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    albums: false,
};

const modals = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalStatus: (state, action) => {
            state.albums = action.payload;
        },
    },
});

const { actions, reducer } = modals;
const { changeModalStatus } = actions;
const modal = reducer;

export { modal, changeModalStatus };
