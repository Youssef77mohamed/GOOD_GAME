import React from 'react'
import"./download.css"
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function DownloadBody() {
  return (
    <div className='bg-download pb-5'>
        <h1 className='download fw-bold text-center text-light fs-70 pt-5 m'>DOWNLOAD</h1>
        <div className='d-flex'>
            <div className='d-flex justify-content-between download-btn-text text-light w-100'>
              <div className='d-flex justify-content-center align-items-center ps-5 text-center'>
                <a className='download-btn d-flex' href='https://cfpatch.z8games.com/download/CrossFireWest.exe'>
                    <FaCloudDownloadAlt className="fs-100"/>
                    <div className="download-btn">
                    <span className='text-center m-0'>Official </span>
                    <p >Downloader</p>
                    </div>
                </a>
              </div>

            <div className='download-btn-img'>
            
            </div>  
            </div>
        </div>

        <div className='text-center '>
        <Link to='/signup' className='fw-bold fs-3 text-decoration-none text-light btn border-5 border-light hover_btn mb-5'> Create an account </Link>
        </div>
        <div className='pb-5'>
          <h1 className='fw-bold text-center text-light download'>SYSTEM REQUIREMENTS</h1>
          <div className='m-res bg-light p-5 d-flex flex-wrap mt-5 flex-row mx-6'>
            <div className='border_card w-50-calc'>
              <div className='p-3'>
              <h4 className='fw-bold'>PROCESSOR (CPU)</h4>
              <p>Minimum: <br></br>
              AMD Athlon™ 64 X2 Dual Core Processor 4600+ 2.4GHz <br></br>
              Intel® Core™2 Duo Processor T6400 2.0GHz</p>
              <p>Recommended: <br></br>
              AMD Ryzen™ 3 1200 Processor @ 3.1GHz (4 Cores), ~3.4GHz <br></br>
              Intel® Core™ i5-3470 Processor @ 3.20GHz (4 Cores),~3.2GHz</p>
              </div>
            </div>
            <div className='border_card w-25-calc'>
              <div className='p-3'>
              <h4 className='fw-bold'>MEMORY (RAM) </h4>
              <p>Minimum: <br></br>
              4 GB</p>
              <p>Recommended: <br></br>
              8 GB</p>
              </div>
            </div>
            <div className='border_card w-25-calc '>
              <div className='p-3'>
              <h4 className='fw-bold'>VIDEO CARD</h4>
              <p>Minimum: <br></br>
              NVIDIA® GeForce® 9500 GT<br></br>
              AMD Radeon™ HD 6450<br></br>
              Intel® HD Graphics 3000</p>
              <p>Recommended: <br></br>
              NVIDIA® GeForce® GT 630<br></br>
              AMD Radeon™ HD 6570<br></br>
              Intel® HD Graphics 6000
              </p>
              </div>
            </div>
            <div className='border_card w-25-calc mt-2'>
              <div className='p-3'>
              <h4 className='fw-bold'>STORAGE (HDD)</h4>
              <p>Minimum: <br></br>
              15 GB of free space</p>
              </div>
            </div>
            <div className='border_card w-25-calc mt-2'>
              <div className='p-3'>
              <h4 className='fw-bold'>OPERATING SYSTEM</h4>
              <p>Minimum: <br></br>
              Windows 7/8/10 64-bit</p>
              </div>
            </div>
            <div className='border_card w-25-calc mt-2'>
              <div className='p-3'>
              <h4 className='fw-bold'>DIRECTX©</h4>
              <p>Minimum: <br></br>
              DirectX© 9.0c</p>
              <p>Recommended: <br></br>
              DirectX© 9.0c or higher</p>
              </div>
            </div>
            <div className='border_card w-25-calc mt-2'>
              <div className='p-3'>
              <h4 className='fw-bold fs-5'>INTERNET CONNECTION</h4>
              <p>Minimum: <br></br>
              Cable/DSL</p>
              <p>Recommended: <br></br>
              Cable / DSL or better</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
