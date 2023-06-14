import React from 'react'
import MainNavBar from '../../components/navbar'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import FooterBtn from '../../components/footer/FooterBtn'
import BodyLogIn from '../../components/logIn'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function LoginPage() {
  return (
    <>
      <div className='bg-login'>
      <ButtonLog/>
      <MainNavBar/>
      <BodyLogIn/>
      <BackToTopButton/>
      <FooterBtn/>
      </div>

    </>
  )
}
