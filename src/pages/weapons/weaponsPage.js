import React from 'react'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import MainNavBar from '../../components/navbar'
import IconsSocial from '../../components/footer/Icons-Social'
import FooterBtn from '../../components/footer/FooterBtn'
import WeaponsData from '../../components/Weapons'
import BackToTopButton from '../../components/back to top/BackToTop'

export default function WeaponsPage() {
  return (
    <>
        <ButtonLog/>
        <MainNavBar/>
        <WeaponsData/>
        <BackToTopButton/>
        <IconsSocial/>
        <FooterBtn/>

    </>
  )
}
