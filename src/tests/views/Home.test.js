import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import Home from '../../views/Home'
import translation from '../../locales/lang/en.json'
import i18n from '../../locales'
import store from '../../store'

describe('Home View', () => {
    it('renders successfully', () => {
        const { getByText } = render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Home />
                </I18nextProvider>
            </Provider>
        );

        const featuredProductsText = getByText(translation.home.featuredProducts);
        expect(featuredProductsText).toBeInTheDocument();
    });
})