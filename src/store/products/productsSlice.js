import { createSlice } from '@reduxjs/toolkit'

export const initialState = null

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (_, action) => action.payload,
    },
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
