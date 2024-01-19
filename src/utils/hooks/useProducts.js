import { useDispatch } from 'react-redux'
import { setProducts } from 'store/products/productsSlice'
import { apiGetProducts } from "../../services/ProductsService";

async function useProducts () {
    const dispatch = useDispatch()

    const products = await apiGetProducts()

    dispatch(
        setProducts(products)
    )

    return {
        products
    }
}

export default useProducts
