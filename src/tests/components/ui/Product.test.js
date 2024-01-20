import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Product from '../../../components/ui/Product'
import { productsData } from '../../../mock/data/productsData'

describe('Product Component', () => {
    it('renders successfully', () => {
        const { getByText } = render(
            <Product
                productName={productsData[0].name}
                productPrice={productsData[0].price}
                productImage={productsData[0].image}
            />
        );

        const productName = getByText(productsData[0].name);
        expect(productName).toBeInTheDocument();
    });
})