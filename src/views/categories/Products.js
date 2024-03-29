import React from 'react'
import i18n from 'i18next'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import Product from '../../components/ui/Product'

const Products = () => {
    const { categoryId } = useParams()
    const products = useSelector((state) => state.products.data)
    const categories = useSelector((state) => state.categories.data)

    if (categoryId && products) {
        const productsFiltered = products.filter(product => parseInt(product.categoryId) === parseInt(categoryId))
        const categoriesFiltered = categories.filter(category => parseInt(category.id) === parseInt(categoryId))

        return (
            <>
                <h2 className="text-center my-10">{categoriesFiltered[0].name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {productsFiltered.map(product => (
                        <Product
                            productName={product.name}
                            productImage={product.image}
                            productPrice={product.price}
                            key={product.id}
                        />
                    ))}
                </div>
            </>
        )
    }

    return <div>{i18n.t('products.emptyProducts')}</div>
}

export default Products
