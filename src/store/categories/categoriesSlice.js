import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (_, action) => action.payload,
    },
})

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
