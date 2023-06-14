import React from 'react'
import MainNavBar from '../../components/navbar'

import FooterBtn from '../../components/footer/FooterBtn'
import IconsSocial from '../../components/footer/Icons-Social'
import DownloadBody from '../../components/download'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function DownloadPage() {
  return (
    <>
        <ButtonLog/>
        <MainNavBar/>
        <DownloadBody/>
        <BackToTopButton/>
        <IconsSocial/>
        <FooterBtn/>
    </>
  )
}
