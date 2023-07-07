import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        fetchCategoryPending: state => {
            state.loading = true
        },
        fetchCategoryFulfilled: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        fetchCategoryRejected: state => {
            state.loading = false
        },
    },
})


export const { 
    fetchCategoryPending,
    fetchCategoryFulfilled, 
    fetchCategoryRejected 
} = categoriesSlice.actions

export default categoriesSlice.reducer