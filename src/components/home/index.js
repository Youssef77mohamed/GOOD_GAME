import React from 'react'
import './home.css'


import LayoutSliderAndImg from './slider&img/LayoutSlider&Img'
import TextAndBtn from './text&btn-First-Section/Text&Btn'
import WhatIsGoodGame from './What Is GoodGame'
import Mercenaries from './MERCENARIES'
import BecomeALegend from './BECOME_A_LEGEND'
import Footer from '../footer'

export default function SectionIntroduction() {
return (
    <>
    <div className='Home'>
    <TextAndBtn/>
    <LayoutSliderAndImg/>
    <WhatIsGoodGame/>
    <Mercenaries/>
    <BecomeALegend/>
    <Footer/>
    </div>
    
    </>
)
}
