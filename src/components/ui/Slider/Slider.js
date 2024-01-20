import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import Button from '../Buttons'
import i18n from 'i18next'

import ebook3 from '../../../assets/images/ebook-3.png'
import curso1 from '../../../assets/images/curso-1.png'
import produto1 from '../../../assets/images/produto-1.jpg'

import 'react-awesome-slider/dist/styles.css'
import style from '../../../assets/styles/template/_react-awesome-slider.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            cssModule={style}
            bullets={false}
        >
            <div className="bg-white w-full h-full flex justify-around items-center">
                <div>
                    <h1 className="mb-2">Ebook 3</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex items-center mt-7">
                        <Button variant="solid">{i18n.t('products.buy')}</Button>
                        <p className="ml-4 font-bold">R$ 100,00</p>
                    </div>
                </div>
                <div>
                    <img className="w-72" src={ebook3} />
                </div>
            </div>
            <div className="bg-white w-full h-full flex justify-around items-center">
                <div>
                    <h1 className="mb-2">Course 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex items-center mt-7">
                        <Button variant="solid">{i18n.t('products.buy')}</Button>
                        <p className="ml-4 font-bold">R$ 100,00</p>
                    </div>
                </div>
                <div>
                    <img className="w-72" src={curso1} />
                </div>
            </div>
            <div className="bg-white w-full h-full flex justify-around items-center">
                <div>
                    <h1 className="mb-2">Product 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex items-center mt-7">
                        <Button variant="solid">{i18n.t('products.buy')}</Button>
                        <p className="ml-4 font-bold">R$ 100,00</p>
                    </div>
                </div>
                <div>
                    <img className="w-72" src={produto1} />
                </div>
            </div>
        </AutoplaySlider>
    )
}

export default Slider
