import React from 'react'
import { useSelector } from "react-redux"
import Slider from '../components/ui/Slider'
import Product from '../components/ui/Product'
import i18n from 'i18next'

const Home = () => {
    const products = useSelector((state) => state.products.data)

    return (
        <div>
            <Slider />
            <h2 className="text-center my-10">{i18n.t('home.featuredProducts')}</h2>
            {products ? (
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {products.map(product => (
                        <Product
                            productName={product.name}
                            productImage={product.image}
                            productPrice={product.price}
                            key={product.id}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p>{i18n.t('home.emptyProducts')}</p>
                </div>
            )}
        </div>
    )
}

export default Home
