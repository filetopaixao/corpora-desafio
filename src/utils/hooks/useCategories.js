import { useDispatch } from 'react-redux'
import { setCategories } from 'store/categories/categoriesSlice'
import { apiGetCategories } from "../../services/CategoriesService";

async function useCategories () {
    const dispatch = useDispatch()

    const categories = await apiGetCategories()

    dispatch(
        setCategories(categories)
    )

    return {
        categories
    }
}

export default useCategories
