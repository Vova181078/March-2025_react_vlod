import type {IPosts} from "../../models/IPosts.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api.service.ts";


type PostSliceType = {
    posts: IPosts [],

}

const initialPostSliceState:PostSliceType = {
    posts: [],

};

export const loadPosts = createAsyncThunk(
    'loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await getPosts();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message || 'Error loading posts');
        }
    }
);

export const postSlice  = createSlice({
    name: 'postSlice',
    initialState: initialPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
            state.posts = action.payload;

        })
        .addCase(loadPosts.rejected, (action) => {
           action.posts
        })

});

export const postActions = {...postSlice.actions, loadPosts};