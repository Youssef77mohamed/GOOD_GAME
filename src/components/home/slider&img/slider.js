import React from 'react'
import { Carousel} from 'react-bootstrap'
import one from'../../../images/home/slider/two.jpg'
import two from'../../../images/home/slider/cfwe_topaz_crate_forum.jpg'
import { Link } from 'react-router-dom'


export default function Slider () {
return (
<>
    <Carousel className='col-6 slider'>

    <Carousel.Item>
    <Link to='/pistolWeek'>
    <img
        className="d-block w-100"
        src={one}
        alt="Second slide"
    />
    </Link>
    </Carousel.Item>
    <Carousel.Item>
    <Link to='/wavelite'>
    <img
        className="d-block w-100"
        src={two}
        alt="Third slide"
    />
    </Link>
    </Carousel.Item>
</Carousel>
    </>
    )   
}
