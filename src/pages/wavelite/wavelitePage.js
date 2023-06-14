import React from 'react'

import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import FooterBtn from '../../components/footer/FooterBtn'
import MainNavBar from '../../components/navbar'
import WishingWellDay from '../../components/WishingWell'
import BackToTopButton from '../../components/back to top/BackToTop'



export default function WavelitePage() {
  return (
    <>
        <ButtonLog/>
        <MainNavBar/>
        <WishingWellDay/>
        <BackToTopButton/>
        <FooterBtn/>
    </>
  )
}
