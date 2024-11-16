import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    searchResults: [],
    isLoading: false,
    isError: false
};

// Thunk for searching users
export const searchUserThunk = createAsyncThunk(
    'redux/searchUser',
    async (search) => {
        try {
            const data = ""; // Replace with actual fetch logic
            return data;
        } catch (error) {
            toast.error('Something went wrong. Try again');
            throw error; // Ensure the thunk knows an error occurred
        }
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchUserThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchUserThunk.fulfilled, (state, action) => {
                state.searchResults = action.payload; // Use `action.payload` for the result
                state.isLoading = false;
            })
            .addCase(searchUserThunk.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default searchSlice.reducer;
