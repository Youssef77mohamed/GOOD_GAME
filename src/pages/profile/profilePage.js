import React from "react";
import MainNavBar from "../../components/navbar";
import FooterBtn from "../../components/footer/FooterBtn";
import ButtonLog from "../../components/navbar/login&signInBtn/Button";
import ProfileData from "../../components/profile";
import IconsSocial from '../../components/footer/Icons-Social'
import BackToTopButton from "../../components/back to top/BackToTop";

export default function ProfilePage() {
  return (
    <>
      <ButtonLog />
      <MainNavBar />
      <ProfileData/>
      <BackToTopButton/>
      <IconsSocial/>
      <FooterBtn />
    </>
  );
}
