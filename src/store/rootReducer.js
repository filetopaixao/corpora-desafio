import { combineReducers } from 'redux'
import theme from './theme/themeSlice'
import auth from './auth'
import base from './base'
import products from './products/productsSlice'
import categories from './categories/categoriesSlice'
import locale from './locale/localeSlice'

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        base,
        locale,
        products,
        categories,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
