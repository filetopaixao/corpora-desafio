import React from 'react'
import Button from "../Buttons"

const Product = (props) => {
    const { productName, productPrice, productImage } = props
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <div className="h-72 flex items-center">
                <img className="h-60" src={productImage} />
            </div>
            <p>{productName}</p>
            <p className="font-bold">R$ {productPrice}</p>
            <Button block className="mt-5 mb-2">Ver Detalhes</Button>
            <Button block variant="solid">Comprar</Button>
        </div>
    )
}

export default Product
