import { createSlice } from '@reduxjs/toolkit';
import { STORAGE } from '../../const/const';

let posts;
let userId;
try {
    posts = JSON.parse(localStorage.getItem(STORAGE.POSTS));
    userId = JSON.parse(localStorage.getItem(STORAGE.USER_ID));
} catch (error) {
    console.log('error: ', error);
}

const initialState = {
    users: [],
    posts: posts ?? [],
    userId: userId ?? null,
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

export {
    dataPlaceholder,
    updateUsers,
    updatePosts,
    updateUserId,
    updateAlbums,
};
