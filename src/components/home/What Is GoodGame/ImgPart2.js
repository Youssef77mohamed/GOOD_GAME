import React from 'react'
import { Link } from 'react-router-dom'

export default function ImgPart2() {
  return (
    <>
          <div className='style-d mt-1 gap-1'>
            <div className='img1-what-is'>

                <div className='my-100'>
                <h2 className='fw-bold'>COMPETITIVE MODES</h2>
                <Link to={"/modes"} className='text-white text-decoration-none border-5 btn rounded-2 border-light fw-bold p-2 hover_btn text-uppercase'>Explore Modes</Link>
                </div>
            </div>
            <div className='img2-what-is'>

                <div className='my-100'>
                <h2 className='fw-bold'>WEAPONS</h2>
                <Link to={"/weapons"} className='text-white text-decoration-none border-5 btn rounded-2 border-light fw-bold p-2 hover_btn text-uppercase'>Explore Weapons</Link>
                </div>
            </div>

        </div>
    </>
  )
}
