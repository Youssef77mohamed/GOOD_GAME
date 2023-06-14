import React from 'react'
import "./wishing-well.css"
import {Container } from 'react-bootstrap'
import userImg from "../../images/pistol/nLNYQ0V622ZD2.png"
import pistolImg from "../../images/home/slider/cfwe_topaz_crate_forum.jpg"
import { Link } from 'react-router-dom'

import TextWishingWell from './Text-WishingWell'

export default function  WishingWellDay() {
    return (
        <div className='bg-pistol'>
            <Container>
                <h2 className='text-light'> Wishing Well : May 10 to June 14</h2>
                <div className='bg-pistol-container text-light'>
                <div className='w-img-user'>
                    <img src={userImg} alt=''/>
                    <span className='text-light'>[GM]Xenon</span>
                </div>
                <img src={pistolImg} alt='pistol'/>

                <TextWishingWell/>

                </div>
                <p className='text-light fw-bold fs-4'>Howdy, Stranger!</p>
                <p className='text-light'>It looks like you're new here. If you want to get involved, click one of these buttons!</p>
                <div className='text-light mt-4'>
                    <Link to={"/login"} className='btn-pistol'>Sign In</Link>
                    <Link to={"/signup"} className='btn-pistol'>Register</Link>
                </div>
            </Container>
        </div>
    )
}


