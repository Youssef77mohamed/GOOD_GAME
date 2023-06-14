import React from 'react'
import"./become.css"
import { Link } from 'react-router-dom'

export default function BecomeALegend() {
  return (
    <>
    <h1 className='what-is fw-bold mt-5'>BECOME A LEGEND</h1>
  
    <div className='BECOME_A_LEGEND d-flex justify-content-center align-items-center text-light mt-5'>

   <div>
   <h3 className='fw-bold fs-1'>Compete against the best teams in the world for big prizes!</h3>
    <Link to='/Esports' className='mt-3 fw-bold fs-3 text-decoration-none text-light btn border-5 border-light hover_btn p-2'>Explore Esports</Link>
   </div>

    </div>


    </>
  )
}
