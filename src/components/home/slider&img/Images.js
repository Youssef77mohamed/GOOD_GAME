import React from 'react'
import img_2 from "../../../images/home/img-after-slider/mexicodaily_news.jpg"
import img_1 from "../../../images/home/img-after-slider/may_news.jpg"
import "../home.css"


export default function Images() {
return (
    <>
        <img className='col-3 img-after-slider hover-img-after-slider' src={img_1} alt='img1'/>
        <img className='col-3 img-after-slider hover-img-after-slider' src={img_2} alt='img2'/>
    </>
)
}
