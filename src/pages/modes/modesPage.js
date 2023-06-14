import React from 'react'
import MainNavBar from '../../components/navbar'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import FooterBtn from '../../components/footer/FooterBtn'
import IconsSocial from '../../components/footer/Icons-Social'
import Modes from '../../components/modes'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function ModesPage() {
  return (
    <>
        <ButtonLog/>
        <MainNavBar/>
        <Modes/>
        <BackToTopButton/>
        <IconsSocial/>
        <FooterBtn/>
        
    </>
  )
}
