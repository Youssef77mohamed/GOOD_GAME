import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function IconsSocial() {
  return (
    <div className='STAY-CONNECTED'>
      <div className='icons-so flex-column align-items-center text-center justify-content-center pt-5 '>
        <div className='icons text-light fs-1 d-flex justify-content-center align-items-center'>
            <h3 className='fs-1 fw-bold'>STAY CONNECTED</h3>
          <div className='icons-social text-light d-flex gap-5 ms-5'>

                <div>
                <a href='https://www.facebook.com' className='fs-70' >
                <FaFacebook />
                <p className='fs-5 fw-bold'>FACEBOOK</p>
                </a>

                </div>

                <div>
                <a href='https://twitter.com' className='fs-70'>
                <FaTwitter />
                <p className='fs-5 fw-bold'>TWITTER</p>
                </a>
                </div>

                <div>
                <a href='https://discord.com' className='fs-70'>
                <FaDiscord />
                <p className='fs-5 fw-bold'>DISCORD</p>
                </a>
                </div>

                <div>
                <a href='https://www.instagram.com' className='fs-70'>
                <FaInstagram />
                <p className='fs-5 fw-bold'>INSTAGRAM</p>
                </a>

                </div>

                <div>
                <a href='https://www.youtube.com' className='fs-70'>
                <FaYoutube />
                <p className='fs-5 fw-bold'>YOUTUBE</p>
                </a>
                </div>

                <div>
                <a href='https://www.twitch.tv' className='fs-70'>
                <FaTwitch />
                <p className='fs-5 fw-bold'>TWITCH</p>

                </a>
                </div>

          </div>
        </div>
      </div>

    </div>
  )
}
