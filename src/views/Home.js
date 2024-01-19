import React from 'react'
import { useSelector } from "react-redux";

const Home = () => {
    const products = useSelector((state) => state.products.data)
    console.log('TEST', products)

    return <div>Home</div>
}

export default Home
