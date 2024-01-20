import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Products from '../../../views/categories/Products'
import store from '../../../store'
import { categoriesData } from '../../../mock/data/categoriesData'
import { setProducts } from '../../../store/products/productsSlice'
import { productsData } from '../../../mock/data/productsData'
import {setCategories} from '../../../store/categories/categoriesSlice'

describe('Products Categories View', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();

        store.dispatch(setProducts({
            data: productsData
        }));

        store.dispatch(setCategories({
            data: categoriesData
        }));
    });

    it('renders successfully', () => {
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[`/produtos/1`]}>
                    <Routes>
                        <Route path="/produtos/:categoryId" element={<Products />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        const categoryName = getByText(categoriesData[0].name);
        expect(categoryName).toBeInTheDocument();
    });
})