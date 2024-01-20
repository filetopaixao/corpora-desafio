import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Products from '../../../views/categories/Products'
import translation from '../../../locales/lang/en.json'
import i18n from '../../../locales'
import store from '../../../store'
import { categoriesData } from '../../../mock/data/categoriesData'
import { setProducts } from '../../../store/products/productsSlice'
import { productsData } from '../../../mock/data/productsData'
import {setCategories} from "../../../store/categories/categoriesSlice";

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
                <I18nextProvider i18n={i18n}>
                    <MemoryRouter initialEntries={[`/produtos/1`]}>
                        <Routes>
                            <Route path="/produtos/:categoryId" element={<Products />} />
                        </Routes>
                    </MemoryRouter>
                </I18nextProvider>
            </Provider>
        );

        const categoryName = getByText(categoriesData[0].name);
        expect(categoryName).toBeInTheDocument();
    });
})