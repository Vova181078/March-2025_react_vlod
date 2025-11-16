import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUsers} from "../../models/IUsers.ts";
import {getUsers} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUsers[];

};

const initialUserSliceState: UserSliceType = {
    users: [],

};


export const loadUsers = createAsyncThunk(
    "users/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await getUsers()
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            return thunkAPI.rejectWithValue("Error loading users");
        }
    }
);


export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialUserSliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUsers[]>) => {
                state.users = action.payload;

            })
            .addCase(loadUsers.rejected, ( action) => {
               action.users
            });
    }
});

export const userActions = { ...userSlice.actions, loadUsers};