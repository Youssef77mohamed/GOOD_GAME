import React from 'react'

import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import FooterBtn from '../../components/footer/FooterBtn'
import PistolDay from '../../components/pistol-week'
import MainNavBar from '../../components/navbar'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function PistolWeekPage() {
  return (
    <>
        <ButtonLog/>
        <MainNavBar/>
        <PistolDay/>
        <BackToTopButton/>
        <FooterBtn/>
    </>
  )
}
