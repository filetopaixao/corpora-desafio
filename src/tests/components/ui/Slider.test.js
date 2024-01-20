import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Slider from '../../../components/ui/Slider'
import { I18nextProvider } from 'react-i18next'
import translation from '../../../locales/lang/en.json'
import i18n from '../../../locales'

describe('Slider Component', () => {
    it('renders successfully', () => {
        const { getByText } = render(
            <I18nextProvider i18n={i18n}>
                <Slider />
            </I18nextProvider>
        );

        const buyText = getByText(translation.products.buy);
        expect(buyText).toBeInTheDocument();
    });
})