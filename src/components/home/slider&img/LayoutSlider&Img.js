import React from 'react'
import { Container } from 'react-bootstrap'
import Images from './Images'
import Slider from './slider'

export default function LayoutSliderAndImg() {
  return (
    <div>

        <Container className='mt-5'>
          <div className='row'>
          <Slider/>
          <Images/>
          </div>

        </Container>
    </div>
  )
}
