import type {IComments} from "../../models/IComments.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service.ts";



type CommentSliceType = {
    comments: IComments []
}
const initialCommentSliceState:CommentSliceType = {
    comments: []
}

export const loadComments = createAsyncThunk(
    'loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await getComments();
            return thunkAPI.fulfillWithValue(comments);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message || 'Error loading comments');
        }
    }
);

export const commentSlice  = createSlice({
        name: 'commentSlice',
        initialState: initialCommentSliceState,
        reducers: {},
        extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComments[]>) => {
            state.comments = action.payload;

        })
            .addCase(loadComments.rejected, ( action) => {
                action.comments

            })

    }
)

export const commentActions = {...commentSlice.actions, loadComments};