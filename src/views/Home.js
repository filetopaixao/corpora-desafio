import React from 'react'
import { useSelector } from "react-redux"
import Slider from '../components/ui/Slider'

const Home = () => {
    const products = useSelector((state) => state.products.data)

    return (
        <div>
            <Slider />
        </div>
    )
}

export default Home
