import React from 'react'

import MainNavBar from '../../components/navbar'
import EsportsBody from '../../components/Esports page'
import FooterBtn from '../../components/footer/FooterBtn'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function EsportsPage() {
  return (
    <>
    <ButtonLog/>
    <MainNavBar/>
    <EsportsBody/>
    <BackToTopButton/>
    <FooterBtn/>

    
    </>
  )
}
