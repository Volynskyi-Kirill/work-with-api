import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    posts: [],
    userId: null,
    albums: [],
};

const data = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUsers: (state, action) => {
            state.users = action.payload;
        },
        updatePosts: (state, action) => {
            state.posts = action.payload;
        },
        updateUserId: (state, action) => {
            state.userId = action.payload;
        },
        updateAlbums: (state, action) => {
            state.albums = action.payload;
        },
    },
});

const { actions, reducer } = data;
const { updateUsers, updatePosts, updateUserId, updateAlbums } = actions;
const dataPlaceholder = reducer;

export { dataPlaceholder, updateUsers, updatePosts, updateUserId, updateAlbums };
